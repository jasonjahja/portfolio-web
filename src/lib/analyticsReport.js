import "server-only";

const PROJECTS = [
  ["temukerja-job-portal", "TemuKerja"],
  ["multi-toys-b2c-ecommerce", "MULTI Toys B2C"],
  ["multi-toys-b2b-wholesale", "MULTI Toys B2B"],
  ["makmur-design-systems", "Makmur"],
  ["centre-point-medan-wayfinding", "Centre Point Medan"],
  ["kencana-jaya-persada-corporate-website", "Kencana Jaya Persada"],
];

const PAGE_SIZE = 1000;

async function fetchRows(supabase, table, timestampColumn, since, maxRows) {
  const rows = [];

  for (let offset = 0; offset < maxRows; offset += PAGE_SIZE) {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .gte(timestampColumn, since)
      .order(timestampColumn, { ascending: false })
      .range(offset, Math.min(offset + PAGE_SIZE - 1, maxRows - 1));

    if (error) throw error;
    rows.push(...data);
    if (data.length < PAGE_SIZE) return { rows, truncated: false };
  }

  return { rows, truncated: true };
}

function uniqueSessions(rows) {
  return new Set(rows.map((row) => row.session_id)).size;
}

function percentChange(current, previous) {
  if (previous === 0) return current === 0 ? 0 : null;
  return Math.round(((current - previous) / previous) * 1000) / 10;
}

function summarize(events) {
  const pageViews = events.filter((event) => event.event_name === "page_view");
  const engaged = events.filter((event) => event.event_name === "engaged_case_study");
  const completed = events.filter(
    (event) => event.event_name === "case_scroll_depth" && event.properties?.depth_percent === 90,
  );

  return {
    sessions: uniqueSessions(events),
    page_views: pageViews.length,
    engaged_readers: uniqueSessions(engaged),
    completions: uniqueSessions(completed),
    resume_clicks: events.filter((event) => event.event_name === "resume_click").length,
  };
}

function withComparison(current, previous) {
  return Object.fromEntries(
    Object.entries(current).map(([key, value]) => [key, {
      value,
      change: percentChange(value, previous[key]),
    }]),
  );
}

function jakartaDate(value) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function dailySeries(events, days, now) {
  const data = new Map();
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const key = jakartaDate(now - offset * 86_400_000);
    data.set(key, { date: key, sessions: new Set(), page_views: 0, engaged: 0, resume: 0 });
  }

  events.forEach((event) => {
    const entry = data.get(jakartaDate(event.occurred_at));
    if (!entry) return;
    entry.sessions.add(event.session_id);
    if (event.event_name === "page_view") entry.page_views += 1;
    if (event.event_name === "engaged_case_study") entry.engaged += 1;
    if (event.event_name === "resume_click") entry.resume += 1;
  });

  return [...data.values()].map((entry) => ({
    ...entry,
    sessions: entry.sessions.size,
  }));
}

function groupWithSessions(rows, getKey, extra = () => ({})) {
  const groups = new Map();

  rows.forEach((row) => {
    const key = getKey(row);
    if (!key) return;
    const current = groups.get(key) || {
      key,
      total: 0,
      sessions: new Set(),
      ...extra(row),
    };
    current.total += 1;
    current.sessions.add(row.session_id);
    groups.set(key, current);
  });

  return [...groups.values()]
    .map((group) => ({ ...group, sessions: group.sessions.size }))
    .sort((a, b) => b.total - a.total);
}

function pageBreakdown(events) {
  return groupWithSessions(
    events.filter((event) => event.event_name === "page_view"),
    (event) => event.pathname,
    (event) => ({ pathname: event.pathname }),
  ).slice(0, 20);
}

function firstPageViews(events) {
  const firstBySession = new Map();
  events
    .filter((event) => event.event_name === "page_view")
    .sort((a, b) => new Date(a.occurred_at) - new Date(b.occurred_at))
    .forEach((event) => {
      if (!firstBySession.has(event.session_id)) firstBySession.set(event.session_id, event);
    });
  return [...firstBySession.values()];
}

function trafficBreakdowns(events) {
  const entrances = firstPageViews(events);
  const dimension = (key, fallback) => groupWithSessions(
    entrances,
    (event) => event[key] || fallback,
    (event) => ({ label: event[key] || fallback }),
  );

  return {
    referrers: dimension("referrer_host", "Direct").slice(0, 12),
    devices: dimension("device_type", "Unknown"),
    browsers: dimension("browser", "Unknown").slice(0, 8),
    countries: dimension("country", "Unknown").slice(0, 12),
  };
}

function projectBreakdown(events) {
  return PROJECTS.map(([slug, name]) => {
    const related = events.filter((event) => event.project_slug === slug);
    const pageViews = related.filter((event) => event.event_name === "page_view");
    const completions = related.filter(
      (event) => event.event_name === "case_scroll_depth" && event.properties?.depth_percent === 90,
    );

    return {
      slug,
      name,
      page_views: pageViews.length,
      sessions: uniqueSessions(pageViews),
      card_clicks: related.filter((event) => event.event_name === "project_card_click").length,
      engaged_readers: uniqueSessions(
        related.filter((event) => event.event_name === "engaged_case_study"),
      ),
      completions: uniqueSessions(completions),
      resume_clicks: related.filter((event) => event.event_name === "resume_click").length,
      continue_clicks: related.filter((event) => event.event_name === "continue_project_click").length,
    };
  }).sort((a, b) => b.sessions - a.sessions || b.card_clicks - a.card_clicks);
}

function engagementBreakdowns(events) {
  const sectionEvents = events.filter((event) =>
    ["home_section_view", "case_section_view"].includes(event.event_name),
  );
  const scrollEvents = events.filter((event) => event.event_name === "case_scroll_depth");

  return {
    sections: groupWithSessions(
      sectionEvents,
      (event) => `${event.project_slug || "home"}:${event.properties?.section || "unknown"}`,
      (event) => ({
        project_slug: event.project_slug || "home",
        section: event.properties?.section || "Unknown",
      }),
    ),
    scroll_depth: groupWithSessions(
      scrollEvents,
      (event) => `${event.project_slug}:${event.properties?.depth_percent}`,
      (event) => ({
        project_slug: event.project_slug,
        depth_percent: event.properties?.depth_percent,
      }),
    ).sort((a, b) =>
      String(a.project_slug).localeCompare(String(b.project_slug)) ||
      Number(a.depth_percent) - Number(b.depth_percent),
    ),
  };
}

function eventBreakdowns(events) {
  const eventsByName = groupWithSessions(events, (event) => event.event_name, (event) => ({
    event_name: event.event_name,
  }));

  const clicks = events.filter((event) => event.event_name.endsWith("click"));
  const clickDetails = groupWithSessions(
    clicks,
    (event) => {
      const value = event.properties?.source || event.properties?.network ||
        event.properties?.destination_host || event.properties?.to_slug || "Unspecified";
      return `${event.event_name}:${value}`;
    },
    (event) => ({
      event_name: event.event_name,
      label: event.properties?.source || event.properties?.network ||
        event.properties?.destination_host || event.properties?.to_slug || "Unspecified",
    }),
  );

  return { events: eventsByName, clicks: clickDetails };
}

function percentile75(values) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.max(0, Math.ceil(sorted.length * 0.75) - 1)];
}

function vitalsBreakdown(vitals) {
  const aggregate = (rows, keyFn, extraFn) => {
    const groups = new Map();
    rows.forEach((row) => {
      const key = keyFn(row);
      const current = groups.get(key) || { key, values: [], ratings: {}, ...extraFn(row) };
      current.values.push(row.value);
      if (row.rating) current.ratings[row.rating] = (current.ratings[row.rating] || 0) + 1;
      groups.set(key, current);
    });

    return [...groups.values()].map((group) => ({
      ...group,
      p75: percentile75(group.values),
      points: group.values.length,
      values: undefined,
    }));
  };

  return {
    metrics: aggregate(
      vitals,
      (vital) => vital.metric_name,
      (vital) => ({ metric_name: vital.metric_name }),
    ).sort((a, b) => a.metric_name.localeCompare(b.metric_name)),
    by_path: aggregate(
      vitals,
      (vital) => `${vital.pathname}:${vital.metric_name}`,
      (vital) => ({ pathname: vital.pathname, metric_name: vital.metric_name }),
    ).sort((a, b) => b.points - a.points).slice(0, 30),
    by_device: aggregate(
      vitals,
      (vital) => `${vital.device_type}:${vital.metric_name}`,
      (vital) => ({ device_type: vital.device_type, metric_name: vital.metric_name }),
    ).sort((a, b) => a.device_type.localeCompare(b.device_type)),
  };
}

export async function buildAnalyticsReport(supabase, days) {
  const now = Date.now();
  const periodMs = days * 86_400_000;
  const currentSince = now - periodMs;
  const combinedSince = new Date(now - periodMs * 2).toISOString();

  const [eventResult, vitalResult] = await Promise.all([
    fetchRows(supabase, "analytics_events", "occurred_at", combinedSince, 30_000),
    fetchRows(supabase, "analytics_web_vitals", "recorded_at", new Date(currentSince).toISOString(), 15_000),
  ]);

  const currentEvents = eventResult.rows.filter(
    (event) => new Date(event.occurred_at).getTime() >= currentSince,
  );
  const previousEvents = eventResult.rows.filter((event) => {
    const timestamp = new Date(event.occurred_at).getTime();
    return timestamp < currentSince && timestamp >= now - periodMs * 2;
  });

  const recent = [...currentEvents]
    .sort((a, b) => new Date(b.occurred_at) - new Date(a.occurred_at))
    .slice(0, 40)
    .map((event) => ({
      occurred_at: event.occurred_at,
      event_name: event.event_name,
      pathname: event.pathname,
      project_slug: event.project_slug,
      properties: event.properties,
    }));

  return {
    generated_at: new Date(now).toISOString(),
    range_days: days,
    truncated: eventResult.truncated || vitalResult.truncated,
    summary: withComparison(summarize(currentEvents), summarize(previousEvents)),
    daily: dailySeries(currentEvents, days, now),
    pages: pageBreakdown(currentEvents),
    projects: projectBreakdown(currentEvents),
    traffic: trafficBreakdowns(currentEvents),
    engagement: engagementBreakdowns(currentEvents),
    ...eventBreakdowns(currentEvents),
    vitals: vitalsBreakdown(vitalResult.rows),
    recent,
  };
}


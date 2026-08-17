"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const tabs = [
  ["overview", "Overview"],
  ["projects", "Projects"],
  ["engagement", "Engagement"],
  ["traffic", "Traffic"],
  ["performance", "Performance"],
  ["events", "Events"],
];

const vitalThresholds = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  FID: { good: 100, poor: 300 },
};

function formatNumber(value) {
  return new Intl.NumberFormat("id-ID").format(value || 0);
}

function formatPercent(value, fallback = "—") {
  if (!Number.isFinite(value)) return fallback;
  return `${Math.round(value)}%`;
}

function ratio(value, total) {
  return total ? (value / total) * 100 : null;
}

function MetricCard({ label, metric }) {
  const positive = metric.change > 0;
  const negative = metric.change < 0;

  return (
    <div className="flex min-w-0 flex-col gap-10 border border-bw5 bg-bw1 p-20">
      <p className="text-body-b6 text-bw6">{label}</p>
      <div className="flex items-end justify-between gap-10">
        <p className="font-display text-heading-h5 md:text-heading-h4">
          {formatNumber(metric.value)}
        </p>
        <p className={`text-body-b7 ${positive ? "text-green-700" : negative ? "text-red-700" : "text-bw6"}`}>
          {metric.change === null
            ? "Baru"
            : `${positive ? "+" : ""}${metric.change}%`}
        </p>
      </div>
    </div>
  );
}

function Section({ title, description, children }) {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h2 className="font-display text-heading-h6 md:text-heading-h5">{title}</h2>
        {description && <p className="text-body-b6 text-bw6 md:text-body-b5">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function EmptyState({ children = "Belum ada data untuk periode ini." }) {
  return <p className="border border-bw5 p-20 text-body-b5 text-bw6">{children}</p>;
}

function DailyChart({ data }) {
  const maxValue = Math.max(1, ...data.map((item) => item.page_views));
  const visibleLabels = data.length <= 7 ? 1 : Math.ceil(data.length / 7);

  return (
    <div className="overflow-x-auto border border-bw5 bg-bw1 p-15 md:p-20">
      <div className="flex h-[220px] min-w-[620px] items-end gap-5">
        {data.map((item, index) => (
          <div key={item.date} className="group flex h-full flex-1 flex-col items-center justify-end gap-5">
            <span className="text-body-b7 text-bw6 opacity-0 transition-opacity group-hover:opacity-100">
              {item.page_views}
            </span>
            <div
              className="w-full min-h-px bg-bw8 transition-opacity group-hover:opacity-70"
              style={{ height: `${Math.max(1, (item.page_views / maxValue) * 170)}px` }}
              title={`${item.date}: ${item.page_views} pageviews, ${item.sessions} sessions`}
            />
            <span className="h-15 text-[9px] text-bw6">
              {index % visibleLabels === 0 ? item.date.slice(5) : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankedList({ rows, labelKey = "label", valueKey = "sessions" }) {
  if (!rows?.length) return <EmptyState />;
  const maxValue = Math.max(1, ...rows.map((row) => row[valueKey] || 0));

  return (
    <div className="flex flex-col border-t border-bw5">
      {rows.map((row) => (
        <div key={row.key} className="relative flex items-center justify-between gap-15 border-b border-bw5 px-10 py-12">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 bg-bw5/30"
            style={{ width: `${((row[valueKey] || 0) / maxValue) * 100}%` }}
          />
          <span className="relative min-w-0 truncate text-body-b6 md:text-body-b5">{row[labelKey]}</span>
          <span className="relative shrink-0 text-body-b6 text-bw6">{formatNumber(row[valueKey])}</span>
        </div>
      ))}
    </div>
  );
}

function OverviewTab({ data }) {
  return (
    <div className="flex flex-col gap-45">
      <div className="grid grid-cols-2 gap-10 xl:grid-cols-5">
        <MetricCard label="Sessions" metric={data.summary.sessions} />
        <MetricCard label="Pageviews" metric={data.summary.page_views} />
        <MetricCard label="Engaged readers" metric={data.summary.engaged_readers} />
        <MetricCard label="90% completions" metric={data.summary.completions} />
        <MetricCard label="Resume clicks" metric={data.summary.resume_clicks} />
      </div>

      <Section title="Traffic over time" description="Pageviews per hari dalam zona waktu Jakarta.">
        <DailyChart data={data.daily} />
      </Section>

      <div className="grid grid-cols-1 gap-30 xl:grid-cols-2">
        <Section title="Top pages">
          <RankedList rows={data.pages} labelKey="pathname" valueKey="sessions" />
        </Section>
        <Section title="Top referrers">
          <RankedList rows={data.traffic.referrers} />
        </Section>
      </div>
    </div>
  );
}

function ProjectsTab({ projects }) {
  return (
    <Section
      title="Project performance"
      description="Read rate dan completion rate menggunakan sesi anonim, bukan identitas pengunjung."
    >
      <div className="overflow-x-auto border border-bw5">
        <table className="w-full min-w-[900px] border-collapse text-left text-body-b6">
          <thead className="bg-bw1 text-bw6">
            <tr>
              {["Project", "Sessions", "Card clicks", "Read rate", "90% complete", "Resume", "Continue"].map((label) => (
                <th key={label} className="border-b border-bw5 px-15 py-12 font-normal">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-bw5 last:border-0">
                <td className="px-15 py-15 text-body-b5">{project.name}</td>
                <td className="px-15 py-15">{formatNumber(project.sessions)}</td>
                <td className="px-15 py-15">{formatNumber(project.card_clicks)}</td>
                <td className="px-15 py-15">{formatPercent(ratio(project.engaged_readers, project.sessions))}</td>
                <td className="px-15 py-15">{formatPercent(ratio(project.completions, project.sessions))}</td>
                <td className="px-15 py-15">{formatNumber(project.resume_clicks)}</td>
                <td className="px-15 py-15">{formatNumber(project.continue_clicks)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function EngagementTab({ engagement }) {
  const groupedScroll = useMemo(() => {
    const map = new Map();
    engagement.scroll_depth.forEach((row) => {
      const current = map.get(row.project_slug) || {};
      current[row.depth_percent] = row.sessions;
      map.set(row.project_slug, current);
    });
    return [...map.entries()];
  }, [engagement.scroll_depth]);

  return (
    <div className="flex flex-col gap-45">
      <Section title="Scroll depth" description="Jumlah sesi yang mencapai setiap milestone case study.">
        {!groupedScroll.length ? <EmptyState /> : (
          <div className="overflow-x-auto border border-bw5">
            <table className="w-full min-w-[700px] text-left text-body-b6">
              <thead className="bg-bw1 text-bw6">
                <tr>
                  <th className="px-15 py-12 font-normal">Project</th>
                  {[25, 50, 75, 90].map((depth) => (
                    <th key={depth} className="px-15 py-12 font-normal">{depth}%</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groupedScroll.map(([slug, depths]) => (
                  <tr key={slug} className="border-t border-bw5">
                    <td className="px-15 py-12">{slug}</td>
                    {[25, 50, 75, 90].map((depth) => (
                      <td key={depth} className="px-15 py-12">{formatNumber(depths[depth] || 0)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>

      <Section title="Section visibility" description="Heading yang benar-benar masuk viewport pengunjung.">
        {!engagement.sections.length ? <EmptyState /> : (
          <div className="overflow-x-auto border border-bw5">
            <table className="w-full min-w-[760px] text-left text-body-b6">
              <thead className="bg-bw1 text-bw6">
                <tr>
                  <th className="px-15 py-12 font-normal">Page/project</th>
                  <th className="px-15 py-12 font-normal">Section</th>
                  <th className="px-15 py-12 font-normal">Sessions</th>
                  <th className="px-15 py-12 font-normal">Views</th>
                </tr>
              </thead>
              <tbody>
                {engagement.sections.map((row) => (
                  <tr key={row.key} className="border-t border-bw5">
                    <td className="px-15 py-12">{row.project_slug}</td>
                    <td className="max-w-[500px] px-15 py-12">{row.section}</td>
                    <td className="px-15 py-12">{formatNumber(row.sessions)}</td>
                    <td className="px-15 py-12">{formatNumber(row.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </div>
  );
}

function TrafficTab({ traffic }) {
  return (
    <div className="grid grid-cols-1 gap-35 md:grid-cols-2">
      <Section title="Referrers"><RankedList rows={traffic.referrers} /></Section>
      <Section title="Devices"><RankedList rows={traffic.devices} /></Section>
      <Section title="Browsers"><RankedList rows={traffic.browsers} /></Section>
      <Section title="Countries"><RankedList rows={traffic.countries} /></Section>
    </div>
  );
}

function vitalValue(metric) {
  if (!Number.isFinite(metric.p75)) return "—";
  if (metric.metric_name === "CLS") return metric.p75.toFixed(3);
  return `${Math.round(metric.p75)} ms`;
}

function vitalStatus(metric) {
  const threshold = vitalThresholds[metric.metric_name];
  if (!threshold || !Number.isFinite(metric.p75)) return "unknown";
  if (metric.p75 <= threshold.good) return "good";
  if (metric.p75 <= threshold.poor) return "needs-improvement";
  return "poor";
}

function PerformanceTab({ vitals }) {
  return (
    <div className="flex flex-col gap-45">
      <Section title="P75 Web Vitals" description="Pengalaman 75% kunjungan nyata; hijau berarti berada dalam target metric.">
        {!vitals.metrics.length ? <EmptyState>Web Vitals akan muncul setelah ada kunjungan production.</EmptyState> : (
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 xl:grid-cols-6">
            {vitals.metrics.map((metric) => {
              const status = vitalStatus(metric);
              return (
                <div key={metric.metric_name} className="flex flex-col gap-8 border border-bw5 bg-bw1 p-15">
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-body-b6 text-bw6">{metric.metric_name}</span>
                    <span className={`h-8 w-8 rounded-full ${status === "good" ? "bg-green-600" : status === "poor" ? "bg-red-600" : "bg-amber-500"}`} />
                  </div>
                  <strong className="font-display text-heading-h6">{vitalValue(metric)}</strong>
                  <span className="text-body-b7 text-bw6">{metric.points} data points</span>
                </div>
              );
            })}
          </div>
        )}
      </Section>

      <Section title="Performance by path">
        {!vitals.by_path.length ? <EmptyState /> : (
          <div className="overflow-x-auto border border-bw5">
            <table className="w-full min-w-[700px] text-left text-body-b6">
              <thead className="bg-bw1 text-bw6">
                <tr>
                  <th className="px-15 py-12 font-normal">Path</th>
                  <th className="px-15 py-12 font-normal">Metric</th>
                  <th className="px-15 py-12 font-normal">P75</th>
                  <th className="px-15 py-12 font-normal">Points</th>
                </tr>
              </thead>
              <tbody>
                {vitals.by_path.map((metric) => (
                  <tr key={metric.key} className="border-t border-bw5">
                    <td className="px-15 py-12">{metric.pathname}</td>
                    <td className="px-15 py-12">{metric.metric_name}</td>
                    <td className="px-15 py-12">{vitalValue(metric)}</td>
                    <td className="px-15 py-12">{metric.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>

      <Section title="Performance by device">
        {!vitals.by_device.length ? <EmptyState /> : (
          <div className="overflow-x-auto border border-bw5">
            <table className="w-full min-w-[620px] text-left text-body-b6">
              <thead className="bg-bw1 text-bw6">
                <tr>
                  <th className="px-15 py-12 font-normal">Device</th>
                  <th className="px-15 py-12 font-normal">Metric</th>
                  <th className="px-15 py-12 font-normal">P75</th>
                  <th className="px-15 py-12 font-normal">Points</th>
                </tr>
              </thead>
              <tbody>
                {vitals.by_device.map((metric) => (
                  <tr key={metric.key} className="border-t border-bw5">
                    <td className="px-15 py-12 capitalize">{metric.device_type}</td>
                    <td className="px-15 py-12">{metric.metric_name}</td>
                    <td className="px-15 py-12">{vitalValue(metric)}</td>
                    <td className="px-15 py-12">{metric.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </div>
  );
}

function EventsTab({ data }) {
  return (
    <div className="flex flex-col gap-45">
      <div className="grid grid-cols-1 gap-30 xl:grid-cols-2">
        <Section title="Event totals">
          <RankedList rows={data.events} labelKey="event_name" valueKey="total" />
        </Section>
        <Section title="Click breakdown">
          {!data.clicks.length ? <EmptyState /> : (
            <div className="flex flex-col border-t border-bw5">
              {data.clicks.map((row) => (
                <div key={row.key} className="flex justify-between gap-15 border-b border-bw5 px-10 py-12 text-body-b6">
                  <span><span className="text-bw6">{row.event_name}</span> · {row.label}</span>
                  <span>{row.total}</span>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>

      <Section title="Recent events" description="Tidak menyertakan IP atau identitas pengunjung.">
        {!data.recent.length ? <EmptyState /> : (
          <div className="overflow-x-auto border border-bw5">
            <table className="w-full min-w-[900px] text-left text-body-b7">
              <thead className="bg-bw1 text-bw6">
                <tr>
                  <th className="px-15 py-12 font-normal">Time</th>
                  <th className="px-15 py-12 font-normal">Event</th>
                  <th className="px-15 py-12 font-normal">Path</th>
                  <th className="px-15 py-12 font-normal">Properties</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((event, index) => (
                  <tr key={`${event.occurred_at}-${index}`} className="border-t border-bw5">
                    <td className="whitespace-nowrap px-15 py-12">{new Date(event.occurred_at).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}</td>
                    <td className="px-15 py-12">{event.event_name}</td>
                    <td className="px-15 py-12">{event.pathname}</td>
                    <td className="max-w-[360px] px-15 py-12 text-bw6">{JSON.stringify(event.properties)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </div>
  );
}

function LoginForm({ email, password, setEmail, setPassword, onSubmit, isLoading, message }) {
  return (
    <main className="min-h-screen px-25 pb-60 pt-[120px] text-bw8 md:px-40 xl:px-120 xl:pt-[170px]">
      <form onSubmit={onSubmit} className="mx-auto flex max-w-[600px] flex-col gap-20">
        <p className="text-body-b6 text-bw6">Portfolio administration</p>
        <h1 className="font-display text-heading-h5 md:text-heading-h3">Analytics</h1>
        <p className="text-body-b5 text-bw7">Login dengan akun admin untuk melihat data portfolio.</p>
        <label className="flex flex-col gap-5 text-body-b5">
          Email admin
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" className="border border-bw5 bg-bw1 px-15 py-10 outline-none focus:border-bw8" />
        </label>
        <label className="flex flex-col gap-5 text-body-b5">
          Password
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" className="border border-bw5 bg-bw1 px-15 py-10 outline-none focus:border-bw8" />
        </label>
        <button type="submit" disabled={isLoading} className="w-fit bg-bw8 px-20 py-10 text-bw1 disabled:opacity-50">
          {isLoading ? "Memuat..." : "Login"}
        </button>
        {message && <p role="status" className="text-body-b5 text-red-700">{message}</p>}
        <Link href="/" className="w-fit underline">Kembali ke homepage</Link>
      </form>
    </main>
  );
}

export default function AdminAnalytics() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [days, setDays] = useState(30);
  const [tab, setTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!supabase) return undefined;
    supabase.auth.getSession().then(({ data: authData }) => {
      setSession(authData.session);
      setIsLoading(Boolean(authData.session));
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
        setIsLoading(Boolean(nextSession));
      },
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return undefined;

    const controller = new AbortController();

    fetch(`/api/admin/analytics?days=${days}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Analytics belum dapat dimuat.");
        setData(result);
      })
      .catch((error) => {
        if (error.name !== "AbortError") setMessage(error.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [session, days, refreshKey]);

  async function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setIsLoading(false);
      setMessage("Email atau password tidak valid.");
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    setData(null);
    await supabase.auth.signOut();
    setPassword("");
    setIsLoading(false);
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="min-h-screen px-25 pb-60 pt-[120px] text-bw8 md:px-40 xl:px-120 xl:pt-[170px]">
        <div className="mx-auto flex max-w-[700px] flex-col gap-20">
          <h1 className="font-display text-heading-h5 md:text-heading-h3">Analytics</h1>
          <p className="text-body-b5 text-bw7">Supabase belum dikonfigurasi.</p>
          <Link href="/" className="w-fit underline">Kembali ke homepage</Link>
        </div>
      </main>
    );
  }

  if (!session) {
    return <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={handleLogin} isLoading={isLoading} message={message} />;
  }

  return (
    <main className="min-h-screen px-25 pb-60 pt-[110px] text-bw8 md:px-40 xl:px-120 xl:pt-[150px]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-30">
        <header className="flex flex-col justify-between gap-20 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <p className="text-body-b6 text-bw6">Portfolio administration</p>
            <h1 className="font-display text-heading-h5 md:text-heading-h3">Analytics</h1>
            <p className="text-body-b6 text-bw6">Anonymous first-party data · Asia/Jakarta</p>
          </div>
          <div className="flex flex-wrap items-center gap-15 text-body-b6">
            <Link href="/admin/resume" className="underline">Resume settings</Link>
            <button type="button" onClick={handleLogout} className="cursor-pointer underline">Logout</button>
          </div>
        </header>

        <div className="h-px bg-bw5" />

        <div className="flex flex-col justify-between gap-15 xl:flex-row xl:items-center">
          <div className="flex gap-5 overflow-x-auto pb-5">
            {tabs.map(([value, label]) => (
              <button key={value} type="button" onClick={() => setTab(value)} className={`shrink-0 border px-12 py-8 text-body-b6 ${tab === value ? "border-bw8 bg-bw8 text-bw1" : "border-bw5"}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {[7, 30, 90].map((value) => (
              <button key={value} type="button" onClick={() => { setIsLoading(true); setMessage(""); setDays(value); }} className={`border px-10 py-7 text-body-b7 ${days === value ? "border-bw8" : "border-bw5 text-bw6"}`}>
                {value}D
              </button>
            ))}
            <button type="button" onClick={() => { setIsLoading(true); setMessage(""); setRefreshKey((value) => value + 1); }} className="border border-bw5 px-10 py-7 text-body-b7">Refresh</button>
          </div>
        </div>

        {isLoading && !data ? <p className="py-60 text-center text-body-b5 text-bw6">Memuat analytics...</p> : null}
        {message && <p role="alert" className="border border-red-300 bg-red-50 p-15 text-body-b5 text-red-800">{message}</p>}
        {data?.truncated && <p className="border border-amber-400 bg-amber-50 p-15 text-body-b6">Dataset sangat besar dan laporan dibatasi ke baris terbaru. Pilih periode lebih pendek.</p>}

        {data && (
          <>
            {tab === "overview" && <OverviewTab data={data} />}
            {tab === "projects" && <ProjectsTab projects={data.projects} />}
            {tab === "engagement" && <EngagementTab engagement={data.engagement} />}
            {tab === "traffic" && <TrafficTab traffic={data.traffic} />}
            {tab === "performance" && <PerformanceTab vitals={data.vitals} />}
            {tab === "events" && <EventsTab data={data} />}
            <p className="text-body-b7 text-bw6">
              Last generated {new Date(data.generated_at).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} · Sesi anonim, tanpa IP atau fingerprint.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

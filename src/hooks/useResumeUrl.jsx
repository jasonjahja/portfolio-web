import { useEffect, useState } from "react";

export const FALLBACK_RESUME_URL =
  "https://drive.google.com/file/d/1wIniqDimrqYNiFFfpc5tNNQNyCVt-SNe/view?usp=sharing";

const RESUME_UPDATED_EVENT = "resume-url-updated";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let cachedResumeUrl = null;
let pendingResumeUrl = null;

function isValidWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function publishResumeUrl(value) {
  if (!isValidWebUrl(value)) return;

  cachedResumeUrl = value;
  window.dispatchEvent(
    new CustomEvent(RESUME_UPDATED_EVENT, { detail: value }),
  );
}

async function fetchResumeUrl() {
  const endpoint = new URL("/rest/v1/site_settings", supabaseUrl);
  endpoint.searchParams.set("key", "eq.resume_url");
  endpoint.searchParams.set("select", "value");
  endpoint.searchParams.set("limit", "1");

  const response = await fetch(endpoint, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!response.ok) return null;

  const [setting] = await response.json();
  return setting?.value && isValidWebUrl(setting.value) ? setting.value : null;
}

export default function useResumeUrl() {
  const [resumeUrl, setResumeUrl] = useState(
    cachedResumeUrl || FALLBACK_RESUME_URL,
  );

  useEffect(() => {
    let isActive = true;
    const handleUpdate = (event) => setResumeUrl(event.detail);
    window.addEventListener(RESUME_UPDATED_EVENT, handleUpdate);

    if (!cachedResumeUrl && isSupabaseConfigured) {
      pendingResumeUrl ??= fetchResumeUrl().catch(() => null);
      pendingResumeUrl.then((value) => {
        if (!value) return;

        cachedResumeUrl = value;
        if (isActive) setResumeUrl(value);
      });
    }

    return () => {
      isActive = false;
      window.removeEventListener(RESUME_UPDATED_EVENT, handleUpdate);
    };
  }, []);

  return resumeUrl;
}

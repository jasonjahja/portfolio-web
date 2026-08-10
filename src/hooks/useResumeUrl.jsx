import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

export const FALLBACK_RESUME_URL =
  "https://drive.google.com/file/d/1wIniqDimrqYNiFFfpc5tNNQNyCVt-SNe/view?usp=sharing";

const RESUME_UPDATED_EVENT = "resume-url-updated";
let cachedResumeUrl = null;

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

export default function useResumeUrl() {
  const [resumeUrl, setResumeUrl] = useState(
    cachedResumeUrl || FALLBACK_RESUME_URL,
  );

  useEffect(() => {
    const handleUpdate = (event) => setResumeUrl(event.detail);
    window.addEventListener(RESUME_UPDATED_EVENT, handleUpdate);

    if (!cachedResumeUrl && isSupabaseConfigured) {
      supabase
        .from("site_settings")
        .select("value")
        .eq("key", "resume_url")
        .maybeSingle()
        .then(({ data }) => {
          if (data?.value && isValidWebUrl(data.value)) {
            cachedResumeUrl = data.value;
            setResumeUrl(data.value);
          }
        });
    }

    return () => window.removeEventListener(RESUME_UPDATED_EVENT, handleUpdate);
  }, []);

  return resumeUrl;
}

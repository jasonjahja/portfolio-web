import { createClient } from "@supabase/supabase-js";

import { buildAnalyticsReport } from "@/lib/analyticsReport";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedRanges = new Set([7, 30, 90]);
const adminEmail = (process.env.ANALYTICS_ADMIN_EMAIL || "jasonjahja@gmail.com").toLowerCase();

async function authenticatedAdmin(request) {
  const authorization = request.headers.get("authorization") || "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!token || !supabaseUrl || !anonKey) return null;

  const authClient = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await authClient.auth.getUser(token);
  if (error || data.user?.email?.toLowerCase() !== adminEmail) return null;
  return data.user;
}

export async function GET(request) {
  const user = await authenticatedAdmin(request);
  if (!user) return Response.json({ error: "Unauthorized." }, { status: 401 });

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return Response.json({
      error: "Analytics belum dikonfigurasi. Tambahkan SUPABASE_SERVICE_ROLE_KEY.",
    }, { status: 503 });
  }

  const requestedRange = Number(new URL(request.url).searchParams.get("days") || 30);
  const days = allowedRanges.has(requestedRange) ? requestedRange : 30;

  try {
    const report = await buildAnalyticsReport(supabase, days);
    return Response.json(report, {
      headers: { "Cache-Control": "private, no-store, max-age=0" },
    });
  } catch (error) {
    const missingTable = error?.code === "42P01" || error?.code === "PGRST205";
    return Response.json({
      error: missingTable
        ? "Tabel analytics belum tersedia. Jalankan supabase/setup.sql terlebih dahulu."
        : "Laporan analytics belum dapat dimuat.",
    }, { status: 500 });
  }
}


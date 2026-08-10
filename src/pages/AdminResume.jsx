import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FALLBACK_RESUME_URL,
  publishResumeUrl,
} from "../hooks/useResumeUrl";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

export default function AdminResume() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resumeUrl, setResumeUrl] = useState(FALLBACK_RESUME_URL);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!supabase) return undefined;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => setSession(nextSession),
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session || !supabase) return;

    supabase
      .from("site_settings")
      .select("value")
      .eq("key", "resume_url")
      .single()
      .then(({ data, error }) => {
        if (data?.value) setResumeUrl(data.value);
        if (error) setMessage("Resume URL belum dapat dimuat.");
      });
  }, [session]);

  async function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);
    setMessage(error ? "Email atau password tidak valid." : "Login berhasil.");
  }

  async function handleSave(event) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    let normalizedUrl;
    try {
      normalizedUrl = new URL(resumeUrl);
      if (!["http:", "https:"].includes(normalizedUrl.protocol)) throw new Error();
    } catch {
      setMessage("Masukkan URL lengkap yang diawali http:// atau https://.");
      setIsLoading(false);
      return;
    }

    const value = normalizedUrl.toString();
    const { data, error } = await supabase
      .from("site_settings")
      .update({ value, updated_at: new Date().toISOString() })
      .eq("key", "resume_url")
      .select("value")
      .single();

    if (error) {
      setMessage("Gagal menyimpan. Pastikan akun ini memiliki akses admin.");
    } else {
      setResumeUrl(data.value);
      publishResumeUrl(data.value);
      setMessage("Link resume berhasil diperbarui.");
    }

    setIsLoading(false);
  }

  async function handleLogout() {
    setIsLoading(true);
    await supabase.auth.signOut();
    setMessage("");
    setPassword("");
    setIsLoading(false);
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="min-h-screen px-25 md:px-40 xl:px-120 pt-[120px] xl:pt-[170px] pb-60 text-bw8">
        <div className="mx-auto max-w-[700px] flex flex-col gap-25">
          <h1 className="font-display text-heading-h5 md:text-heading-h3">
            Resume Settings
          </h1>
          <p className="text-body-b5 md:text-body-b3 text-bw7">
            Supabase belum dikonfigurasi. Tambahkan VITE_SUPABASE_URL dan
            VITE_SUPABASE_ANON_KEY ke environment variable terlebih dahulu.
          </p>
          <Link to="/" className="underline w-fit">Kembali ke homepage</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-25 md:px-40 xl:px-120 pt-[120px] xl:pt-[170px] pb-60 text-bw8">
      <div className="mx-auto max-w-[700px] flex flex-col gap-30">
        <div className="flex flex-col gap-10">
          <p className="text-body-b6 text-bw6">Portfolio administration</p>
          <h1 className="font-display text-heading-h5 md:text-heading-h3">
            Resume Settings
          </h1>
          <p className="text-body-b5 md:text-body-b3 text-bw7">
            Perbarui tujuan link Resume tanpa melakukan deployment ulang.
          </p>
        </div>

        <div className="h-px w-full bg-bw5" />

        {isLoading ? (
          <p className="text-body-b5 text-bw7">Memuat...</p>
        ) : !session ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-20">
            <label className="flex flex-col gap-5 text-body-b5">
              Email admin
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                className="border border-bw5 bg-bw1 rounded-8 px-15 py-10 outline-none focus:border-bw8"
              />
            </label>
            <label className="flex flex-col gap-5 text-body-b5">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className="border border-bw5 bg-bw1 rounded-8 px-15 py-10 outline-none focus:border-bw8"
              />
            </label>
            <button
              type="submit"
              className="w-fit bg-bw8 text-bw1 rounded-8 px-20 py-10 cursor-pointer"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSave} className="flex flex-col gap-20">
            <div className="flex items-center justify-between gap-15 text-body-b6 text-bw6">
              <span>Login sebagai {session.user.email}</span>
              <button type="button" onClick={handleLogout} className="underline cursor-pointer">
                Logout
              </button>
            </div>
            <label className="flex flex-col gap-5 text-body-b5">
              Resume URL
              <input
                type="url"
                value={resumeUrl}
                onChange={(event) => setResumeUrl(event.target.value)}
                required
                placeholder="https://..."
                className="border border-bw5 bg-bw1 rounded-8 px-15 py-10 outline-none focus:border-bw8"
              />
            </label>
            <div className="flex flex-wrap items-center gap-15">
              <button
                type="submit"
                className="bg-bw8 text-bw1 rounded-8 px-20 py-10 cursor-pointer"
              >
                Simpan link
              </button>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Preview link
              </a>
            </div>
          </form>
        )}

        {message && (
          <p role="status" className="text-body-b5 text-bw7">{message}</p>
        )}

        <Link to="/" className="underline w-fit text-body-b5">
          Kembali ke homepage
        </Link>
      </div>
    </main>
  );
}

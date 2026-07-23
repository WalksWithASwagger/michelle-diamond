import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Studio sign-in — Diamond's Edge Photography" },
      { name: "description", content: "Studio sign-in for Diamond's Edge Photography." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin" });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        if (data.session) navigate({ to: "/admin" });
        else setNotice("Check your inbox to confirm your address, then sign in.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-ivory">
      <div className="mx-auto max-w-md px-6 py-24 lg:py-32">
        <p className="meta-label">The studio door</p>
        <h1 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
          {mode === "signin" ? "Sign in" : "Create studio account"}
        </h1>
        <p className="mt-4 font-body text-ink/70">
          {mode === "signin"
            ? "Access the studio to review commission enquiries and manage galleries."
            : "The first account created will hold studio privileges."}
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <label className="block">
            <span className="meta-label">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mt-2 block w-full border border-brass/50 bg-soft-white px-4 py-3 font-body text-ink focus:border-oxblood focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="meta-label">Password</span>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              className="mt-2 block w-full border border-brass/50 bg-soft-white px-4 py-3 font-body text-ink focus:border-oxblood focus:outline-none"
            />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {notice && <p className="text-sm text-ink/80">{notice}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-oxblood px-6 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Working…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>

          <button
            type="button"
            onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setNotice(null); }}
            className="w-full text-center font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/60 hover:text-oxblood"
          >
            {mode === "signin" ? "Create account instead" : "I already have an account"}
          </button>
        </form>
      </div>
    </div>
  );
}

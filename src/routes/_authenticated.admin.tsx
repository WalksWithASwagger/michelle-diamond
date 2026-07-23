import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { getMyRole, claimInitialAdmin } from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Studio — Diamond's Edge Photography" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

const tabs = [
  { to: "/admin", label: "Overview", exact: true },
  { to: "/admin/enquiries", label: "Enquiries", exact: false },
  { to: "/admin/galleries", label: "Galleries", exact: false },
] as const;

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const queryClient = useQueryClient();
  const role = useQuery({
    queryKey: ["me", "role"],
    queryFn: () => getMyRole(),
    staleTime: 5 * 60 * 1000,
  });

  const claim = useMutation({
    mutationFn: () => claimInitialAdmin(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["me", "role"] }),
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (role.isLoading) {
    return (
      <div className="mx-auto max-w-[900px] px-6 py-24 text-center">
        <p className="meta-label">Opening the studio</p>
      </div>
    );
  }

  if (!role.data?.isAdmin) {
    return (
      <div className="mx-auto max-w-[720px] px-6 py-24">
        <p className="meta-label">Studio access</p>
        <h1 className="mt-6 font-display text-4xl italic text-ink">
          You&rsquo;re signed in{role.data?.email ? `, ${role.data.email}` : ""}.
        </h1>
        <p className="mt-4 font-body text-lg text-ink/75">
          This account does not yet hold studio privileges. If you are the first
          person setting the studio up, claim access below. Otherwise ask the
          current studio administrator to grant your account.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => claim.mutate()}
            disabled={claim.isPending}
            className="bg-oxblood px-6 py-3 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {claim.isPending ? "Claiming…" : "Claim studio access"}
          </button>
          <button
            type="button"
            onClick={signOut}
            className="border border-ink/30 px-6 py-3 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-ink hover:border-oxblood hover:text-oxblood"
          >
            Sign out
          </button>
        </div>
        {claim.data?.ok === false && (
          <p className="mt-6 text-sm text-destructive">
            The studio already has an administrator. Ask them to grant your account.
          </p>
        )}
        {claim.isError && (
          <p className="mt-6 text-sm text-destructive">
            {claim.error instanceof Error ? claim.error.message : "Could not claim access."}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-[80vh]">
      <div className="border-b border-brass/30">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-6 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="meta-label">Studio</p>
            <h1 className="mt-2 font-display text-3xl italic text-ink">
              Diamond&rsquo;s Edge — administration
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex flex-wrap gap-6">
              {tabs.map((t) => {
                const active = t.exact
                  ? pathname === t.to
                  : pathname === t.to || pathname.startsWith(`${t.to}/`);
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    className={`font-sans-ui text-[12px] tracking-[0.22em] uppercase pb-1 border-b ${
                      active ? "text-oxblood border-oxblood" : "text-ink/70 border-transparent hover:text-ink"
                    }`}
                  >
                    {t.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              onClick={signOut}
              className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/60 hover:text-oxblood"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-12 lg:py-14">
        <Outlet />
      </div>
    </div>
  );
}

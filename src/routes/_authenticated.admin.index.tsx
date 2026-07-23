import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { getAdminStats } from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const stats = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => getAdminStats(),
  });

  if (stats.isLoading) {
    return <p className="meta-label">Loading…</p>;
  }
  if (stats.isError || !stats.data) {
    return <p className="meta-label text-destructive">Could not load studio overview.</p>;
  }

  const s = stats.data;

  return (
    <div className="space-y-14">
      <section>
        <p className="meta-label">Commission enquiries</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-brass/40 bg-soft-white p-8">
            <p className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/60">
              New / unread
            </p>
            <p className="mt-4 font-display text-6xl italic text-oxblood">
              {s.enquiries.newCount}
            </p>
            <Link
              to="/admin/enquiries"
              className="mt-6 inline-block font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood border-b border-oxblood/60 pb-0.5"
            >
              Review enquiries →
            </Link>
          </div>
          <div className="border border-brass/40 bg-soft-white p-8">
            <p className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/60">
              Total on file
            </p>
            <p className="mt-4 font-display text-6xl italic text-ink">
              {s.enquiries.total}
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="meta-label">Galleries</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {(["opera", "portrait", "event"] as const).map((cat) => {
            const c = s.gallery[cat];
            return (
              <div key={cat} className="border border-brass/40 bg-soft-white p-8">
                <p className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/60 capitalize">
                  {cat}
                </p>
                <p className="mt-4 font-display text-5xl italic text-ink">{c.published}</p>
                <p className="mt-2 font-sans-ui text-[11px] tracking-[0.18em] uppercase text-ink/50">
                  Published · {c.total - c.published} draft
                </p>
                <Link
                  to="/admin/galleries"
                  search={{ tab: cat }}
                  className="mt-5 inline-block font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood border-b border-oxblood/60 pb-0.5"
                >
                  Manage →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

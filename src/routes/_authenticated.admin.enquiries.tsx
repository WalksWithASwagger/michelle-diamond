import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import {
  listEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
  ENQUIRY_STATUSES,
  type EnquiryStatus,
  type AdminEnquiry,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin/enquiries")({
  component: EnquiriesPage,
});

function EnquiriesPage() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState<"all" | EnquiryStatus>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const q = useQuery({ queryKey: ["admin", "enquiries"], queryFn: () => listEnquiries() });

  const updateStatus = useMutation({
    mutationFn: (input: { id: string; status: EnquiryStatus }) =>
      updateEnquiryStatus({ data: input }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "enquiries"] });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });
  const remove = useMutation({
    mutationFn: (id: string) => deleteEnquiry({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "enquiries"] });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });

  const all = q.data ?? [];
  const rows = filter === "all" ? all : all.filter((e) => e.status === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="meta-label">Commission enquiries</p>
        <div className="flex flex-wrap gap-1">
          {(["all", ...ENQUIRY_STATUSES] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 font-sans-ui text-[11px] tracking-[0.22em] uppercase border ${
                filter === s
                  ? "border-oxblood text-oxblood"
                  : "border-brass/40 text-ink/70 hover:text-ink"
              }`}
            >
              {s}
              {s !== "all" && (
                <span className="ml-2 text-ink/50">
                  {all.filter((e) => e.status === s).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {q.isLoading && <p className="mt-8 meta-label">Loading…</p>}
      {q.isError && (
        <p className="mt-8 text-sm text-destructive">
          Could not load enquiries.
        </p>
      )}

      {!q.isLoading && rows.length === 0 && (
        <p className="mt-16 font-body text-lg italic text-ink/60 text-center">
          No enquiries in this view.
        </p>
      )}

      <ul className="mt-8 divide-y divide-brass/30 border-y border-brass/30">
        {rows.map((e) => (
          <EnquiryRow
            key={e.id}
            enquiry={e}
            open={expanded === e.id}
            onToggle={() => setExpanded(expanded === e.id ? null : e.id)}
            onStatusChange={(status) => updateStatus.mutate({ id: e.id, status })}
            onDelete={() => {
              if (confirm(`Delete enquiry from ${e.name}? This cannot be undone.`)) {
                remove.mutate(e.id);
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
}

function EnquiryRow({
  enquiry,
  open,
  onToggle,
  onStatusChange,
  onDelete,
}: {
  enquiry: AdminEnquiry;
  open: boolean;
  onToggle: () => void;
  onStatusChange: (s: EnquiryStatus) => void;
  onDelete: () => void;
}) {
  const dt = new Date(enquiry.createdAt);
  const dateStr = dt.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  return (
    <li className="py-4">
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onToggle}
          className="flex-1 min-w-0 text-left"
          aria-expanded={open}
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-display text-xl italic text-ink">{enquiry.name}</span>
            {enquiry.organization && (
              <span className="font-body text-sm text-ink/60">· {enquiry.organization}</span>
            )}
            <span className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/50 ml-auto">
              {dateStr}
            </span>
          </div>
          <p className="mt-1 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood">
            {enquiry.category}
          </p>
          {!open && (
            <p className="mt-2 font-body text-[15px] text-ink/70 line-clamp-2">
              {enquiry.project}
            </p>
          )}
        </button>
        <select
          value={enquiry.status}
          onChange={(e) => onStatusChange(e.target.value as EnquiryStatus)}
          className="font-sans-ui text-[11px] tracking-[0.18em] uppercase border border-brass/50 bg-soft-white px-3 py-2 text-ink"
        >
          {ENQUIRY_STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {open && (
        <div className="mt-6 grid gap-x-10 gap-y-4 border-t border-brass/30 pt-6 sm:grid-cols-2">
          <Field label="Email" value={<a className="text-oxblood underline" href={`mailto:${enquiry.email}`}>{enquiry.email}</a>} />
          <Field label="Phone" value={enquiry.phone ?? "—"} />
          <Field label="Dates" value={enquiry.dates ?? "—"} />
          <Field label="Location" value={enquiry.location ?? "—"} />
          <Field label="Coverage" value={enquiry.coverage ?? "—"} />
          <Field label="Image use" value={enquiry.imageUse ?? "—"} />
          <Field label="Deadline" value={enquiry.deadline ?? "—"} />
          <Field label="Budget" value={enquiry.budget ?? "—"} />
          <div className="sm:col-span-2">
            <p className="meta-label">Project</p>
            <p className="mt-2 font-body text-[16px] leading-relaxed text-ink/85 whitespace-pre-wrap">
              {enquiry.project}
            </p>
          </div>
          {enquiry.context && (
            <div className="sm:col-span-2">
              <p className="meta-label">Context</p>
              <p className="mt-2 font-body text-[16px] leading-relaxed text-ink/85 whitespace-pre-wrap">
                {enquiry.context}
              </p>
            </div>
          )}
          <div className="sm:col-span-2 flex justify-end pt-2">
            <button
              type="button"
              onClick={onDelete}
              className="font-sans-ui text-[11px] tracking-[0.22em] uppercase text-destructive hover:opacity-80"
            >
              Delete enquiry
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="meta-label">{label}</p>
      <p className="mt-1 font-body text-[15px] text-ink/85 break-words">{value}</p>
    </div>
  );
}

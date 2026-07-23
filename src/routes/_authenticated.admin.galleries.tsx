import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import {
  adminListGalleryImages,
  upsertGalleryImage,
  deleteGalleryImage,
  reorderGalleryImages,
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type AdminGalleryImage,
} from "@/lib/gallery.functions";

const searchSchema = z.object({
  tab: z.enum(GALLERY_CATEGORIES).optional(),
});

export const Route = createFileRoute("/_authenticated/admin/galleries")({
  validateSearch: (search) => searchSchema.parse(search),
  component: GalleriesPage,
});

function GalleriesPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const active: GalleryCategory = tab ?? "opera";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="meta-label">Galleries</p>
        <div className="flex flex-wrap gap-1">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => navigate({ search: { tab: c } })}
              className={`px-4 py-1.5 font-sans-ui text-[11px] tracking-[0.22em] uppercase border capitalize ${
                active === c ? "border-oxblood text-oxblood" : "border-brass/40 text-ink/70 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <GalleryEditor key={active} category={active} />
    </div>
  );
}

function GalleryEditor({ category }: { category: GalleryCategory }) {
  const qc = useQueryClient();
  const listKey = ["admin", "gallery", category] as const;
  const q = useQuery({
    queryKey: listKey,
    queryFn: () => adminListGalleryImages({ data: { category } }),
  });

  const upload = useMutation({
    mutationFn: async (file: File) => {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${category}/${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("gallery")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (upErr) throw upErr;
      const nextOrder = (q.data?.length ?? 0) * 10 + 10;
      await upsertGalleryImage({
        data: {
          category,
          imagePath: path,
          altText: file.name.replace(/\.[a-z0-9]+$/i, ""),
          sortOrder: nextOrder,
          published: false,
        },
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: listKey });
      qc.invalidateQueries({ queryKey: ["gallery", category] });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });

  const saveField = useMutation({
    mutationFn: (input: {
      id: string;
      category: GalleryCategory;
      imagePath: string;
      title?: string | null;
      caption?: string | null;
      altText: string;
      sortOrder?: number;
      published?: boolean;
    }) => upsertGalleryImage({ data: input }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: listKey });
      qc.invalidateQueries({ queryKey: ["gallery", category] });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });

  const remove = useMutation({
    mutationFn: (input: { id: string; imagePath: string }) =>
      deleteGalleryImage({ data: input }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: listKey });
      qc.invalidateQueries({ queryKey: ["gallery", category] });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    },
  });

  const reorder = useMutation({
    mutationFn: (items: { id: string; sortOrder: number }[]) =>
      reorderGalleryImages({ data: { items } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: listKey });
      qc.invalidateQueries({ queryKey: ["gallery", category] });
    },
  });

  const fileRef = useRef<HTMLInputElement | null>(null);
  const rows = q.data ?? [];

  const onFiles = async (files: FileList | null) => {
    if (!files) return;
    for (const f of Array.from(files)) {
      if (!f.type.startsWith("image/")) continue;
      await upload.mutateAsync(f);
    }
  };

  const move = (index: number, dir: -1 | 1) => {
    const next = [...rows];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    reorder.mutate(next.map((r, i) => ({ id: r.id, sortOrder: (i + 1) * 10 })));
  };

  return (
    <div className="mt-8">
      <Dropzone
        onFiles={onFiles}
        onPick={() => fileRef.current?.click()}
        busy={upload.isPending}
      />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => onFiles(e.target.files)}
      />
      {upload.isError && (
        <p className="mt-3 text-sm text-destructive">
          {upload.error instanceof Error ? upload.error.message : "Upload failed"}
        </p>
      )}

      {q.isLoading && <p className="mt-10 meta-label">Loading…</p>}
      {q.isError && (
        <p className="mt-10 text-sm text-destructive">Could not load gallery.</p>
      )}

      {!q.isLoading && rows.length === 0 && (
        <p className="mt-16 font-body text-lg italic text-ink/60 text-center">
          No images yet. Drop files above to add the first plate.
        </p>
      )}

      <ul className="mt-10 space-y-4">
        {rows.map((row, i) => (
          <GalleryRow
            key={row.id}
            row={row}
            canMoveUp={i > 0}
            canMoveDown={i < rows.length - 1}
            onMoveUp={() => move(i, -1)}
            onMoveDown={() => move(i, 1)}
            onSave={(patch) =>
              saveField.mutate({
                id: row.id,
                category: row.category,
                imagePath: row.imagePath,
                title: patch.title ?? row.title,
                caption: patch.caption ?? row.caption,
                altText: patch.altText ?? row.altText,
                published: patch.published ?? row.published,
                sortOrder: row.sortOrder,
              })
            }
            onDelete={() => {
              if (confirm("Delete this image? The file will be removed from storage.")) {
                remove.mutate({ id: row.id, imagePath: row.imagePath });
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
}

function Dropzone({
  onFiles,
  onPick,
  busy,
}: {
  onFiles: (f: FileList | null) => void;
  onPick: () => void;
  busy: boolean;
}) {
  const [over, setOver] = useState(false);
  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        onFiles(e.dataTransfer.files);
      }}
      className={`border-2 border-dashed p-10 text-center transition-colors ${
        over ? "border-oxblood bg-paper/60" : "border-brass/50 bg-soft-white"
      }`}
    >
      <p className="meta-label">Add images</p>
      <p className="mt-3 font-body text-lg text-ink/75">
        Drop image files here, or{" "}
        <button
          type="button"
          onClick={onPick}
          className="text-oxblood underline underline-offset-4"
        >
          browse
        </button>
        .
      </p>
      <p className="mt-3 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-ink/50">
        {busy ? "Uploading…" : "JPG / PNG / WebP · uploaded unpublished as drafts"}
      </p>
    </div>
  );
}

function GalleryRow({
  row,
  onSave,
  onDelete,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}: {
  row: AdminGalleryImage;
  onSave: (patch: Partial<Pick<AdminGalleryImage, "title" | "caption" | "altText" | "published">>) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}) {
  const [title, setTitle] = useState(row.title ?? "");
  const [caption, setCaption] = useState(row.caption ?? "");
  const [altText, setAlt] = useState(row.altText);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setTitle(row.title ?? "");
    setCaption(row.caption ?? "");
    setAlt(row.altText);
    setDirty(false);
  }, [row.id, row.title, row.caption, row.altText]);

  const track = <T,>(setter: (v: T) => void) => (v: T) => { setter(v); setDirty(true); };

  return (
    <li className="grid gap-6 border border-brass/30 bg-soft-white p-5 md:grid-cols-[220px,1fr,auto]">
      <div className="relative">
        <img
          src={row.url}
          alt={row.altText}
          className="w-full h-auto object-cover aspect-[4/3]"
          loading="lazy"
        />
        {!row.published && (
          <span className="absolute top-2 left-2 bg-ink/80 text-ivory font-sans-ui text-[9px] tracking-[0.22em] uppercase px-2 py-1">
            Draft
          </span>
        )}
      </div>
      <div className="space-y-3">
        <label className="block">
          <span className="meta-label">Title</span>
          <input
            value={title}
            onChange={(e) => track(setTitle)(e.target.value)}
            className="mt-1 block w-full border border-brass/40 bg-ivory px-3 py-2 font-body text-ink focus:border-oxblood focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="meta-label">Caption</span>
          <textarea
            value={caption}
            rows={2}
            onChange={(e) => track(setCaption)(e.target.value)}
            className="mt-1 block w-full border border-brass/40 bg-ivory px-3 py-2 font-body text-ink focus:border-oxblood focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="meta-label">Alt text (accessibility)</span>
          <input
            value={altText}
            onChange={(e) => track(setAlt)(e.target.value)}
            className="mt-1 block w-full border border-brass/40 bg-ivory px-3 py-2 font-body text-ink focus:border-oxblood focus:outline-none"
          />
        </label>
      </div>
      <div className="flex md:flex-col justify-between gap-2">
        <div className="flex md:flex-col gap-2">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={!canMoveUp}
            aria-label="Move up"
            className="border border-brass/40 px-3 py-2 font-sans-ui text-xs text-ink/70 hover:text-oxblood hover:border-oxblood disabled:opacity-30"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={!canMoveDown}
            aria-label="Move down"
            className="border border-brass/40 px-3 py-2 font-sans-ui text-xs text-ink/70 hover:text-oxblood hover:border-oxblood disabled:opacity-30"
          >
            ↓
          </button>
        </div>
        <label className="flex items-center gap-2 font-sans-ui text-[11px] tracking-[0.18em] uppercase text-ink/80">
          <input
            type="checkbox"
            checked={row.published}
            onChange={(e) => onSave({ published: e.target.checked })}
          />
          Published
        </label>
        <div className="flex md:flex-col gap-2">
          <button
            type="button"
            disabled={!dirty}
            onClick={() => { onSave({ title, caption, altText }); setDirty(false); }}
            className="bg-oxblood px-4 py-2 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90 disabled:opacity-30"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="border border-destructive/60 px-4 py-2 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-destructive hover:bg-destructive hover:text-primary-foreground"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

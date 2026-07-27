// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

function normalizePublicBase(value: string | undefined): string {
  if (!value || value.trim() === "" || value.trim() === "/") {
    return "/";
  }

  return `/${value.trim().replace(/^\/+|\/+$/g, "")}/`;
}

const publicBase = normalizePublicBase(
  process.env.MICHELLE_DIAMOND_PUBLIC_BASE,
);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // GitHub Pages preview builds set a repo-subpath base without changing local dev defaults.
  // Allow Cloudflare / localtunnel hosts for shared Michelle review previews.
  vite: {
    base: publicBase,
    server: {
      allowedHosts: true,
    },
  },
});

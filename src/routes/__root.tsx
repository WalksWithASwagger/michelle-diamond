import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { JsonLd } from "../components/json-ld";
import { siteCopy } from "../lib/portfolio-data";
import { localBusiness, michellePerson } from "../lib/schema";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="meta-label">Not in this house</p>
        <h1 className="mt-4 text-6xl font-normal text-foreground">404</h1>
        <p className="mt-4 text-base text-muted-foreground">
          This page is not part of the current programme.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center border border-oxblood px-6 py-3 text-sm text-oxblood transition-colors hover:bg-oxblood hover:text-primary-foreground font-sans-ui tracking-wide uppercase"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="meta-label">A pause in the programme</p>
        <h1 className="mt-4 text-3xl font-normal text-foreground">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something interrupted the performance. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-oxblood px-6 py-3 text-sm text-primary-foreground transition-colors hover:opacity-90 font-sans-ui tracking-wide uppercase"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-6 py-3 text-sm text-foreground transition-colors hover:bg-paper font-sans-ui tracking-wide uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: `${siteCopy.fullBrand} — ${siteCopy.headline}`,
      },
      {
        name: "description",
        content: siteCopy.tagline,
      },
      { name: "author", content: "Michelle Diamond" },
      { property: "og:site_name", content: "Diamond's Edge Photography" },
      {
        property: "og:title",
        content: `${siteCopy.fullBrand} — ${siteCopy.headline}`,
      },
      {
        property: "og:description",
        content: siteCopy.tagline,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `${siteCopy.fullBrand} — ${siteCopy.headline}`,
      },
      {
        name: "twitter:description",
        content: siteCopy.tagline,
      },
      { property: "og:image", content: "/gallery/opera/03.jpg" },
      { name: "twitter:image", content: "/gallery/opera/03.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <JsonLd data={[localBusiness, michellePerson]} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

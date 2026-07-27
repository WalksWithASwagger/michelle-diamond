import { createFileRoute } from "@tanstack/react-router";

import { ClientGalleryBrowser } from "@/components/client-gallery-browser";
import { siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: `Client galleries — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Find your Diamond's Edge Pixieset gallery — events, portraits, and private collections.",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-12 lg:px-12 lg:pt-24">
          <p className="meta-label">Client galleries</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-3xl">
            Your gallery,
            <br />
            <span className="italic text-oxblood">when you need it.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Public and password-protected Pixieset deliveries. Search by event name or
            location. Password galleries still appear here so you know where to ask.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:pb-28">
          <ClientGalleryBrowser />
        </div>
      </section>
    </div>
  );
}

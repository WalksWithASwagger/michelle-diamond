import { createFileRoute, Link } from "@tanstack/react-router";

import heroSoprano from "@/assets/hero-soprano.jpg";
import rehearsalQuiet from "@/assets/rehearsal-quiet.jpg";
import opera1 from "@/assets/opera-1-empty.jpg";
import opera2 from "@/assets/opera-2-rehearsal.jpg";
import opera3 from "@/assets/opera-3-entrance.jpg";
import opera4 from "@/assets/opera-4-peak.jpg";
import opera5 from "@/assets/opera-5-ensemble.jpg";
import opera6 from "@/assets/opera-6-curtain.jpg";
import opera7 from "@/assets/opera-7-aftermath.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diamond's Edge Photography She knows the stage from both sides of the light" },
      {
        name: "description",
        content:
          "Former opera singer Michelle Diamond photographs performance, rehearsal, portraiture, and the people who make a house come alive.",
      },
      { property: "og:title", content: "Diamond's Edge Photography She knows the stage from both sides of the light" },
      {
        property: "og:description",
        content:
          "Former opera singer Michelle Diamond photographs performance, rehearsal, portraiture, and the people who make a house come alive.",
      },
    ],
  }),
  component: HomePage,
});

const openingSequence: Array<{
  src: string;
  alt: string;
  production: string;
  company: string;
  role?: string;
  span: "wide" | "portrait" | "square";
}> = [
  { src: opera1, alt: "Empty opera stage before rehearsal, painted garden scenery under a single work light.", production: "Rehearsal — Act I", company: "Sample production", span: "wide" },
  { src: opera2, alt: "Rehearsal room with conductor at a piano and two singers reading scores.", production: "Music call", company: "Sample company", role: "Conductor, principals", span: "portrait" },
  { src: opera3, alt: "Opera singer emerging from the wings into a shaft of warm stage light.", production: "Entrance — Act II", company: "Sample production", role: "Soprano", span: "portrait" },
  { src: opera4, alt: "Close portrait of a mezzo-soprano at the emotional peak of an aria.", production: "Aria — Act II", company: "Sample production", role: "Mezzo-soprano", span: "portrait" },
  { src: opera5, alt: "Opera chorus in period costume arranged on a large stage.", production: "Ensemble scene", company: "Sample festival", role: "Chorus & principals", span: "wide" },
  { src: opera6, alt: "Row of principal singers bowing at curtain call, hands joined.", production: "Curtain call", company: "Sample opera company", span: "wide" },
  { src: opera7, alt: "Empty stage after the performance: costume across a chair, open score on the floor.", production: "After the performance", company: "Sample production", span: "wide" },
];

const principles = [
  {
    label: "01",
    title: "Breath",
    body:
      "She recognizes the physical beginning of a phrase before the audience hears it.",
  },
  {
    label: "02",
    title: "Timing",
    body:
      "She anticipates emotional and visual peaks rather than reacting after they pass.",
  },
  {
    label: "03",
    title: "Presence",
    body:
      "She understands the vulnerability performing requires, and photographs artists without flattening them into spectacle.",
  },
  {
    label: "04",
    title: "The room",
    body:
      "She moves through rehearsals, backstage spaces, and live performance without interrupting the work.",
  },
];

const services = [
  {
    n: "I.",
    title: "Production coverage",
    body:
      "Live performance and dress rehearsal imagery designed for press, campaign, social, archive, and season communications.",
  },
  {
    n: "II.",
    title: "Rehearsal and process",
    body:
      "Directors, conductors, designers, singers, choruses, and technicians. The work before opening night.",
  },
  {
    n: "III.",
    title: "Artist portraits and publicity",
    body:
      "Portraits for singers, conductors, directors, creative teams, season announcements, press kits, and campaigns.",
  },
  {
    n: "IV.",
    title: "Opening nights and patron events",
    body:
      "Galas, receptions, donors, artists, dignitaries, and the atmosphere surrounding the performance.",
  },
  {
    n: "V.",
    title: "Season and institutional archives",
    body:
      "Consistent visual documentation across multiple productions, rehearsals, company events, and artist initiatives.",
  },
];

const sampleClients = [
  "Meridian Opera",
  "Halcyon Festival",
  "Northern Lyric Company",
  "Vestibule Chamber Opera",
  "Aster Concert Hall",
  "Cadenza Recording Society",
];

function HomePage() {
  return (
    <div className="bg-ivory text-ink">
      {/* 1. Hero */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pt-10 pb-16 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <p className="meta-label">Act I · Opening</p>
              <h1 className="mt-8 font-display text-[2.75rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.5rem] fade-up">
                She knows the stage
                <br />
                <span className="italic text-oxblood">from both sides</span>
                <br />
                of the light.
              </h1>
              <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-ink/80">
                Former opera singer Michelle Diamond photographs performance, rehearsal,
                portraiture, and the people who make a house come alive.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/opera"
                className="inline-flex items-center justify-center bg-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                View the opera work
              </Link>
              <Link
                to="/commission"
                search={{ type: "Opera production" }}
                className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood self-start sm:self-auto hover:opacity-70"
              >
                Discuss a production →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <img
                src={heroSoprano}
                alt="Soprano mid-phrase on a warmly lit opera stage, arms open, painted classical scenery behind her."
                width={1600}
                height={1800}
                className="w-full h-auto object-cover aspect-[4/5] fade-up"
              />
              <div className="absolute -bottom-4 -left-4 hidden md:block">
                <p className="meta-label bg-ivory px-3 py-2">
                  Performance · Sample opera company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Inside perspective */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <img
              src={rehearsalQuiet}
              alt="Opera singer in profile backstage before an entrance, eyes closed, hand near her sternum."
              width={1400}
              height={1700}
              loading="lazy"
              className="w-full h-auto aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-center">
            <p className="meta-label">Act I · Scene ii</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
              Before she anticipated the shutter,
              <br />
              <span className="italic text-oxblood">she learned to anticipate the breath.</span>
            </h2>
            <p className="mt-10 max-w-xl font-body text-lg leading-relaxed text-ink/80">
              Michelle&apos;s years as an opera singer shaped the way she watches a room.
              She recognizes the breath before the phrase, the physical preparation before
              an entrance, and the instant a performer stops presenting and becomes fully
              present.
            </p>
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-ink/80">
              Her photographs are made from that understanding.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selected opera work */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="meta-label">Act II · Programme</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                Selected opera work.
              </h2>
            </div>
            <Link
              to="/opera"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start md:self-auto"
            >
              Explore opera &amp; performance →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <OperaFrame image={openingSequence[0]} className="md:col-span-12 aspect-[16/9]" />
            <OperaFrame image={openingSequence[1]} className="md:col-span-5 aspect-[4/5]" />
            <OperaFrame image={openingSequence[2]} className="md:col-span-4 aspect-[3/4]" />
            <OperaFrame image={openingSequence[3]} className="md:col-span-3 aspect-[3/4]" />
            <OperaFrame image={openingSequence[4]} className="md:col-span-8 aspect-[16/10]" />
            <OperaFrame image={openingSequence[5]} className="md:col-span-4 aspect-[3/4]" />
            <OperaFrame image={openingSequence[6]} className="md:col-span-12 aspect-[16/8]" />
          </div>
        </div>
      </section>

      {/* 4. Four principles */}
      <section className="bg-paper/60 border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <p className="meta-label">Entr&apos;acte</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
            The difference is not access.
            <br />
            <span className="italic text-oxblood">It is understanding.</span>
          </h2>

          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col">
                <span className="font-sans-ui text-[11px] tracking-[0.28em] text-oxblood">
                  {p.label}
                </span>
                <h3 className="mt-4 font-display text-3xl text-ink">{p.title}</h3>
                <div className="program-rule mt-4 w-10" />
                <p className="mt-5 font-body text-base leading-relaxed text-ink/80">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Opera commission types */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="meta-label">Act III · Commission</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                Ways of working with an opera company.
              </h2>
              <Link
                to="/commission"
                search={{ type: "Opera production" }}
                className="mt-8 inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
              >
                Begin a conversation →
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-brass/40">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="grid grid-cols-12 items-baseline gap-4 border-b border-brass/40 py-8 group"
                  >
                    <span className="col-span-2 font-display text-2xl text-oxblood italic">
                      {s.n}
                    </span>
                    <div className="col-span-10 md:col-span-6">
                      <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                    </div>
                    <p className="col-span-12 md:col-span-4 font-body text-base leading-relaxed text-ink/75">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Selected clients */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
          <p className="meta-label text-center">Selected cultural context · Sample listing</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {sampleClients.map((c, i) => (
              <span key={c} className="flex items-center gap-10">
                <span className="font-display text-xl italic text-oxblood/90">{c}</span>
                {i < sampleClients.length - 1 && (
                  <span className="hidden md:inline-block h-4 w-px bg-brass/50" />
                )}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            Placeholder — final client list to be confirmed with Michelle.
          </p>
        </div>
      </section>

      {/* 7. Portraits */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 mb-14">
            <div className="lg:col-span-5">
              <p className="meta-label">Movement II</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                Portraits with the patience of rehearsal.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <p className="font-body text-lg leading-relaxed text-ink/80">
                For artists, executives, founders, public figures, and private clients who
                need more than a technically correct likeness. Michelle directs posture,
                breath, expression, and presence until the portrait feels composed without
                feeling performed.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <span className="font-sans-ui text-[12px] tracking-[0.22em] uppercase text-ink/40">
                  View portraits
                </span>
                <Link
                  to="/commission"
                  search={{ type: "Portrait commission" }}
                  className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
                >
                  Commission a portrait →
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[portrait1, portrait2, portrait3].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={src}
                  alt="Editorial portrait."
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Events */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <img
                  src={event1}
                  alt="Guests gathered in an ornate opera-house foyer, warm chandelier light."
                  width={1800}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <img
                  src={event2}
                  alt="Two patrons in conversation near an arched window, mid-laugh."
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/5] sm:mt-16"
                />
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
              <p className="meta-label">Movement III</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                The room, not merely the schedule.
              </h2>
              <p className="mt-8 font-body text-lg leading-relaxed text-ink/80">
                Galas, cultural gatherings, conferences, celebrations, and private
                occasions photographed with discretion, anticipation, and a strong sense
                of who and what matters.
              </p>
              <Link
                to="/commission"
                search={{ type: "Gala or opening night" }}
                className="mt-8 inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
              >
                Enquire about coverage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonial */}
      <section className="bg-aubergine text-ivory border-b border-brass/30">
        <div className="mx-auto max-w-[1000px] px-6 py-28 lg:py-36 text-center">
          <p className="meta-label" style={{ color: "var(--color-brass)" }}>
            In the words of a company
          </p>
          <blockquote className="mt-10 font-display text-3xl leading-[1.25] text-ivory sm:text-4xl lg:text-[2.75rem]">
            <span className="text-oxblood font-display text-6xl leading-none align-top mr-1">“</span>
            Michelle photographs a production the way a great music director hears it —
            waiting for what is about to happen, present exactly when it does. Our
            company&apos;s archive is calmer, more accurate, and more moving because of her.
          </blockquote>
          <div className="mt-10">
            <p className="font-sans-ui text-sm tracking-[0.15em] uppercase text-ivory/90">
              An artistic director
            </p>
            <p className="mt-1 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ivory/50">
              Sample copy — final attribution to be confirmed
            </p>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-32 lg:py-40 text-center">
          <p className="meta-label">Coda</p>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[5rem]">
            Tell Michelle
            <br />
            <span className="italic text-oxblood">what is being made.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl font-body text-lg leading-relaxed text-ink/80">
            Share the production, artist, occasion, or audience. Michelle will respond
            with a considered approach to coverage, timing, usage, and delivery.
          </p>
          <div className="mt-12">
            <Link
              to="/commission"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Begin a conversation
            </Link>
          </div>
          <p className="mt-8 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            Response within two working days once availability is confirmed
          </p>
        </div>
      </section>
    </div>
  );
}

function OperaFrame({
  image,
  className,
}: {
  image: (typeof openingSequence)[number];
  className: string;
}) {
  return (
    <figure className={`group relative overflow-hidden ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/85 via-ink/50 to-transparent p-5 text-ivory transition-transform duration-500 ease-out group-hover:translate-y-0">
        <p className="font-sans-ui text-[10px] tracking-[0.25em] uppercase text-ivory/70">
          {image.company}
        </p>
        <p className="mt-1 font-display text-xl italic">{image.production}</p>
        {image.role && (
          <p className="mt-0.5 font-sans-ui text-[11px] tracking-[0.15em] uppercase text-ivory/80">
            {image.role}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

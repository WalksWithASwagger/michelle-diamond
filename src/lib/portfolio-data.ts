/**
 * Curated portfolio data for Diamond's Edge / Michelle Diamond.
 * Public gallery grids read from /public/gallery/* — not Supabase.
 *
 * Voice: editorial photography for exceptional work, grounded in excellence,
 * craft, timing, and presence. Deer Lake = cultural proof, not biography.
 */

import type { LightboxItem } from "@/components/gallery-lightbox";

export const siteCopy = {
  brand: "Diamond's Edge",
  fullBrand: "Diamond's Edge Photography",
  photographer: "Michelle Diamond",
  headline: "Editorial photography for people who create exceptional things.",
  tagline:
    "Luxury hospitality, cultural institutions, performing arts, and extraordinary events — Vancouver & Surrey.",
  essence: "I photograph people who care deeply about creating something exceptional.",
  promise: "I don't simply photograph beautiful moments. I document the dedication behind them.",
  philosophy:
    "Opera shaped how I see. It taught me discipline, timing, elegance, and respect for craft. Today, those lessons influence every photograph I create.",
  email: "hello@diamondsedge.ca",
  location: "Vancouver & Surrey, BC",
  studio: "Nook Coworking · Richmond, BC",
  response: "Response within two working days once availability is confirmed.",
  pixiesetOpera:
    "https://diamondsedgephotography.pixieset.com/vancouveroperadeerlakepark/",
  pixiesetHome: "https://diamondsedgephotography.pixieset.com/",
  useSessionBook: "https://book.usesession.com/i/ULefuYo5Zi",
  instagram: "https://www.instagram.com/diamondsedgephotography/",
  siteUrl: "https://diamondsedge.ca",
} as const;

/** Three-frame VO leave-behind: Authority · Intimacy · Spectacle */
export const operaLeaveBehind = [
  {
    id: "authority",
    label: "01 · Authority",
    title: "Authority",
    body: "Conductor mid-gesture — editorial season leave-behind.",
    url: "/gallery/opera/01.jpg",
    alt: "Conductor and outdoor orchestra under canopy at Deer Lake",
  },
  {
    id: "intimacy",
    label: "02 · Intimacy",
    title: "Intimacy",
    body: "Soloist at the mic — close performance craft without losing the room.",
    url: "/gallery/opera/09.jpg",
    alt: "Opera soloist singing into a microphone at Deer Lake",
  },
  {
    id: "spectacle",
    label: "03 · Spectacle",
    title: "Spectacle",
    body: "Costume colour in park light — what the night looked like.",
    url: "/gallery/opera/03.jpg",
    alt: "Woman in deep red satin gown at Deer Lake",
  },
] as const;

export const servicePillars = [
  {
    slug: "luxury",
    title: "Luxury hospitality & beauty",
    body: "Hotels, clubs, gala rooms, and brand experiences photographed with elegance, timing, and respect for the people hosting them.",
    workTo: "/luxury" as const,
    commission: "Gala or opening night" as const,
  },
  {
    slug: "food",
    title: "Fine dining & culinary",
    body: "Chefs, dining rooms, and table craft documented for hospitality brands that care how the experience is remembered.",
    workTo: "/food" as const,
    commission: "Cultural or corporate event" as const,
  },
  {
    slug: "opera",
    title: "Performing arts & cultural institutions",
    body: "Performing arts, rehearsals, and cultural programmes covered with backstage fluency and editorial calm.",
    workTo: "/opera" as const,
    commission: "Opera production" as const,
  },
  {
    slug: "events",
    title: "Extraordinary events",
    body: "Philanthropy nights, private occasions, openings, and other extraordinary gatherings held with discretion.",
    workTo: "/events" as const,
    commission: "Cultural or corporate event" as const,
  },
  {
    slug: "portraits",
    title: "Editorial portraits",
    body: "Portraits for founders, artists, speakers, and hosts who want presence without stiffness.",
    workTo: "/portraits" as const,
    commission: "Portrait commission" as const,
  },
  {
    slug: "community",
    title: "Community nights",
    body: "Community nights and mini-sessions that keep the same care for emerging rooms, speakers, and members.",
    workTo: "/community" as const,
    commission: null,
  },
] as const;

export const faqs = [
  {
    q: "Where do you shoot?",
    a: "Studio is at Nook Coworking in Richmond, BC, with on-location coverage across Greater Vancouver, Surrey, the Fraser Valley, and the Sea-to-Sky corridor. Travel beyond is happily quoted.",
  },
  {
    q: "How fast do galleries arrive?",
    a: "Events: within 72 hours of the shoot. Portrait and branding sessions: a curated preview within five business days, finished delivery within fifteen.",
  },
  {
    q: "Do you do retouching?",
    a: "Yes. Skin, light, colour, and the small distractions you would otherwise notice — corrected by hand. Faces, bodies, and weather are not rewritten.",
  },
  {
    q: "Do you use AI?",
    a: "Yes, for culling, base edits, and consistency work. AI is not used to generate people or fabricate moments. See The Experience for the long answer.",
  },
  {
    q: "Community rate?",
    a: "A monthly community day at Nook with C$200 mini-sessions for BC + AI, Vancouver AI, and Surrey AI members. Twenty minutes, ten finished images — booked through UseSession, not the public form.",
  },
  {
    q: "Do you travel?",
    a: "Regularly. Weddings, retreats, productions, and brand work outside the Lower Mainland are quoted custom.",
  },
] as const;

export const journalPosts = [
  {
    slug: "ai-in-photography-what-changes-what-doesnt",
    title: "AI in photography — what changes, what doesn't",
    excerpt:
      "Where Michelle uses AI in the pipeline, and the hard line she will not cross.",
    date: "2026-05-01",
  },
  {
    slug: "what-to-wear-corporate-headshot-vancouver",
    title: "What to wear for a corporate headshot in Vancouver",
    excerpt:
      "Solids, jewel tones, and the three things that ruin a studio frame.",
    date: "2026-04-15",
  },
  {
    slug: "christmas-family-portraits-vancouver-when-to-book",
    title: "Christmas family portraits — when to book",
    excerpt:
      "Why the good December slots fill by October, and how to plan the session.",
    date: "2026-03-20",
  },
] as const;

export const principles = [
  {
    label: "01",
    title: "Excellence",
    body: "The filter is simple: people, rooms, and institutions committed to creating something exceptional.",
  },
  {
    label: "02",
    title: "Timing",
    body: "She watches for what is about to happen: a downbeat, a glance, the plate leaving the pass. The peak is anticipated, not chased.",
  },
  {
    label: "03",
    title: "Craft",
    body: "Beautiful moments matter, but so does the dedication behind them — rehearsal, repetition, plating, hosting, and the hours no one sees.",
  },
  {
    label: "04",
    title: "Presence",
    body: "She moves through rehearsals, dining rooms, stages, and gala floors with calm confidence, earning trust without interrupting the work.",
  },
] as const;

export const commissionTypes = [
  {
    n: "I.",
    title: "Luxury hospitality & brand rooms",
    body: "Hotels, clubs, launches, and guest experiences photographed with the same respect given to the work behind them.",
  },
  {
    n: "II.",
    title: "Fine dining & culinary storytelling",
    body: "Chefs, makers, and dining rooms documented so the dedication behind the plate is visible.",
  },
  {
    n: "III.",
    title: "Performing arts & cultural coverage",
    body: "Rehearsals, productions, artist portraits, and institutional archives made with fluency for performance spaces.",
  },
  {
    n: "IV.",
    title: "Editorial portraits",
    body: "Portraits for founders, artists, speakers, and hosts who want elegance, direction, and a finished sense of self.",
  },
  {
    n: "V.",
    title: "Extraordinary events & ongoing relationships",
    body: "Galas, philanthropy, private occasions, and season-long documentation for organizations that need continuity, not one-off snapshots.",
  },
] as const;

/** Ideal-client contexts — not a client parade. */
export const culturalContext = [
  "Luxury hospitality",
  "Fine dining",
  "Performing arts",
  "Cultural institutions",
  "Philanthropy",
  "Extraordinary events",
] as const;

/** Home opening-sequence captions (images imported from src/assets). */
export const openingSequenceMeta = [
  {
    production: "Before the house",
    company: "VO + VSO · Deer Lake",
    role: undefined as string | undefined,
  },
  {
    production: "Music in the park",
    company: "Vancouver Symphony",
    role: undefined as string | undefined,
  },
  {
    production: "Close portrait",
    company: "Vancouver Opera",
    role: undefined as string | undefined,
  },
  {
    production: "Ceremonial presence",
    company: "Deer Lake Park",
    role: undefined as string | undefined,
  },
  {
    production: "Orchestra under canopy",
    company: "VO + VSO · Deer Lake",
    role: undefined as string | undefined,
  },
  {
    production: "Finale",
    company: "Vancouver Opera",
    role: undefined as string | undefined,
  },
  {
    production: "Performance energy",
    company: "Vancouver Opera",
    role: undefined as string | undefined,
  },
] as const;

export const heroCredit = "Symphony & Opera in the Park · VO + VSO · Deer Lake";

/** Approved Michelle-as-subject album (Pixieset somefavsmusicandluxurycopy). Not home hero. */
export const aboutMichelleLead = {
  src: "/gallery/about/michelle-01.jpg",
  alt: "Michelle Diamond in an oxblood dress holding a camera — studio portrait",
  caption: "Michelle Diamond · studio",
} as const;

export const aboutMichelleStrip = [
  {
    src: "/gallery/about/michelle-02.jpg",
    alt: "Michelle Diamond smiling in oxblood — studio portrait",
  },
  {
    src: "/gallery/about/michelle-03.jpg",
    alt: "Michelle Diamond with camera holster, hands on hips — working photographer portrait",
  },
  {
    src: "/gallery/about/michelle-04.jpg",
    alt: "Michelle Diamond laughing with camera holstered at her hip",
  },
  {
    src: "/gallery/about/michelle-08.jpg",
    alt: "Michelle Diamond in navy holding a long lens over her shoulder",
  },
] as const;

export const aboutMichelleSpeaking = [
  {
    src: "/gallery/about/michelle-06.jpg",
    alt: "Michelle Diamond presenting at Chai & Chat — Showing up online as your best self",
    label: "Chai & Chat · Jan 2025",
  },
  {
    src: "/gallery/about/michelle-07.jpg",
    alt: "Michelle Diamond speaking beside a More Confidence ON CAMERA slide",
    label: "More Confidence ON CAMERA",
  },
  {
    src: "/gallery/about/michelle-05.jpg",
    alt: "Michelle Diamond laughing while teaching at a YVR Creatives workshop",
    label: "YVR Creatives",
  },
] as const;

export const homeMichellePeek = [
  {
    src: "/gallery/about/michelle-02.jpg",
    alt: "Michelle Diamond — oxblood studio portrait",
  },
  {
    src: "/gallery/about/michelle-03.jpg",
    alt: "Michelle Diamond — camera holster, ready to work",
  },
  {
    src: "/gallery/about/michelle-04.jpg",
    alt: "Michelle Diamond — joyful working portrait",
  },
] as const;

export const homePortraitAlts = [
  "Orpheum Theatre portrait — lace top and rose-print satin",
  "Orpheum portrait on the upper rail under chandelier light",
  "Orpheum balcony portrait framed by the house arch",
] as const;

/** Public paths for home portrait strip (Orpheum unlock). */
export const homePortraitStrip = [
  "/gallery/portraits/orph-01.jpg",
  "/gallery/portraits/orph-09.jpg",
  "/gallery/portraits/orph-11.jpg",
] as const;

export const operaShow = {
  title: "Symphony & Opera in the Park",
  subtitle: "Vancouver Opera + Vancouver Symphony",
  dateLabel: "Summer 2025",
  venue: "Deer Lake Park · Burnaby",
  note: "Outdoor programme at Deer Lake — orchestra depth, costume colour, ceremonial presence, conductor gesture, and the park holding the night. Proof that Michelle can cover cultural performance for a house archive and season outreach.",
  brief: [
    "Outdoor performance coverage",
    "Conductor and orchestra frames",
    "Intimate performer portraits",
    "VIP atmosphere and finale",
  ],
  credits: [
    { label: "Programme", value: "Symphony & Opera in the Park" },
    { label: "Companies", value: "Vancouver Opera · Vancouver Symphony" },
    { label: "Venue", value: "Deer Lake Park · Burnaby" },
    { label: "Coverage", value: "Performance · Portrait · Atmosphere · Archive" },
  ],
  pixiesetUrl: siteCopy.pixiesetOpera,
} as const;

export const operaServices = [
  "Live performance coverage",
  "Outdoor cultural programmes",
  "Artist publicity portraits",
  "Company and ensemble frames",
  "Season campaign selects",
  "Opening-night atmosphere",
  "Patron and VIP gatherings",
  "Press and social delivery",
  "Archival coverage",
  "Multi-event season relationships",
] as const;

/** Deer Lake production plates — includes leave-behind face (02). */
export const operaProductionImages: Array<{
  url: string;
  alt: string;
  ratio: string;
  title: string;
  caption: string;
}> = [
  {
    url: "/gallery/opera/01.jpg",
    alt: "Full outdoor orchestra under canopy at Deer Lake",
    ratio: "aspect-[16/10]",
    title: "Orchestra under canopy",
    caption: "Conductor mid-gesture, depth through the strings — the strongest editorial read of the night.",
  },
  {
    url: "/gallery/opera/02.jpg",
    alt: "Intimate performer portrait at Deer Lake",
    ratio: "aspect-[3/4]",
    title: "Close portrait",
    caption: "The leave-behind face — quiet, close, made for a house that needs intimacy as well as spectacle.",
  },
  {
    url: "/gallery/opera/03.jpg",
    alt: "Woman in deep red satin gown at Deer Lake outdoors",
    ratio: "aspect-[3/4]",
    title: "Costume colour",
    caption: "Red gown and outdoor light — colour and costume storytelling without a studio.",
  },
  {
    url: "/gallery/opera/04.jpg",
    alt: "Indigenous man in ceremonial cedar hat at Deer Lake",
    ratio: "aspect-[3/4]",
    title: "Ceremonial presence",
    caption: "Cultural portrait from the programme — dignity held in natural light.",
  },
  {
    url: "/gallery/opera/06.jpg",
    alt: "Conductor with baton raised in white jacket",
    ratio: "aspect-[16/10]",
    title: "The beat held",
    caption: "Second conductor beat — gesture variety for a season archive.",
  },
  {
    url: "/gallery/opera/12.jpg",
    alt: "Finale bow under warm fabric arch",
    ratio: "aspect-[16/10]",
    title: "Finale",
    caption: "Closing colour and bow — the night resolved.",
  },
];

const operaArchiveMeta: Array<{ title: string; caption: string; alt: string }> = [
  {
    title: "Orchestra under canopy",
    caption: "Conductor mid-gesture with full outdoor orchestra depth.",
    alt: "Full outdoor orchestra under canopy at Deer Lake",
  },
  {
    title: "Close portrait",
    caption: "Intimate performer portrait — retainer leave-behind face.",
    alt: "Intimate performer portrait at Deer Lake",
  },
  {
    title: "Costume colour",
    caption: "Red gown and outdoor light — spectacle without a studio.",
    alt: "Woman in deep red satin gown at Deer Lake",
  },
  {
    title: "Ceremonial presence",
    caption: "Cultural portrait opener from the Deer Lake programme.",
    alt: "Indigenous man in ceremonial cedar hat at Deer Lake",
  },
  {
    title: "Performance energy",
    caption: "Singer at the mic — outdoor programme energy held close.",
    alt: "Performer with microphone at Deer Lake",
  },
  {
    title: "The beat held",
    caption: "Conductor in white jacket, baton raised.",
    alt: "Conductor with baton raised at Deer Lake",
  },
  {
    title: "VIP atmosphere",
    caption: "Civic presence in the park — atmosphere around the programme, not a performance plate.",
    alt: "VIP atmosphere at Deer Lake Park programme",
  },
  {
    title: "Performer alternate",
    caption: "Supporting portrait from the same outdoor bill.",
    alt: "Performer portrait alternate at Deer Lake",
  },
  {
    title: "Supporting frame",
    caption: "Stage context and colour from mid-programme.",
    alt: "Supporting performance frame at Deer Lake",
  },
  {
    title: "Park atmosphere",
    caption: "Supporting VIP / park atmosphere — kept soft in the archive.",
    alt: "Park atmosphere at Deer Lake programme",
  },
  {
    title: "Before the house",
    caption: "Establishing the outdoor stage and lawn before the peak.",
    alt: "Outdoor stage establishing view at Deer Lake",
  },
  {
    title: "Finale",
    caption: "Closing bow under warm fabric — colour and resolve.",
    alt: "Finale bow under warm fabric arch at Deer Lake",
  },
];

export const operaGalleryItems: LightboxItem[] = operaArchiveMeta.map((meta, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `opera-${n}`,
    url: `/gallery/opera/${n}.jpg`,
    altText: meta.alt,
    title: meta.title,
    caption: meta.caption,
  };
});

/**
 * Orpheum + See Mo unlocks, Power50 / Creative Mornings / YVR selects,
 * then meetup-derived founder-room frames (honest about origin).
 */
export const portraitGalleryItems: LightboxItem[] = [
  {
    id: "p-new-1",
    url: "/gallery/portraits/orph-01.jpg",
    altText: "Woman in lace top and rose-print satin skirt at the Orpheum",
    title: "Brass rail smile",
    caption: "Brass rail, drop earrings, rose-print satin — a warm stair portrait that still reads formal.",
  },
  {
    id: "p-new-2",
    url: "/gallery/portraits/orph-02.jpg",
    altText: "Conductor portrait framed by carved gold doorway at the Orpheum",
    title: "Gold doorway",
    caption: "Carved plaster, red carpet edge, baton still in hand — a conductor portrait with the house in it.",
  },
  {
    id: "p-new-3",
    url: "/gallery/portraits/orph-03.jpg",
    altText: "Woman in black suit on red velvet sofa beneath chandelier at the Orpheum",
    title: "Balcony sofa",
    caption: "Red carpet, chandelier, BALCONY plaque — quiet control in the corner of the house.",
  },
  {
    id: "p-new-4",
    url: "/gallery/portraits/orph-04.jpg",
    altText: "Woman in black suit seated on red Orpheum stairs with chin on clasped hands",
    title: "Red stair close",
    caption: "Hands under chin, black tailoring, scarlet stairs — warmth without losing formality.",
  },
  {
    id: "p-new-5",
    url: "/gallery/portraits/orph-05.jpg",
    altText: "Man in dark suit on Orpheum staircase under coffered ceiling",
    title: "Coffered ceiling",
    caption: "Small figure, long rail, patterned ceiling — the theatre doing scale work for the portrait.",
  },
  {
    id: "p-new-6",
    url: "/gallery/portraits/orph-06.jpg",
    altText: "Man in plaid blazer beneath painted Orpheum dome and chandelier",
    title: "Painted dome",
    caption: "Plaid jacket under the painted ceiling and crystal drop — a speaker portrait with the room still breathing.",
  },
  {
    id: "p-new-7",
    url: "/gallery/portraits/orph-07.jpg",
    altText: "Man in black suit reflected in grand piano at the Orpheum",
    title: "Piano reflection",
    caption: "Piano lid reflection, open strings, empty chairs — musician portraiture made from the stage itself.",
  },
  {
    id: "p-new-8",
    url: "/gallery/portraits/orph-08.jpg",
    altText: "Two young guests in black with event badges inside the Orpheum auditorium",
    title: "Dress rehearsal pair",
    caption: "Lanyards, black wardrobe, house lights behind — youth portraiture held like a programme still.",
  },
  {
    id: "p-new-9",
    url: "/gallery/portraits/orph-09.jpg",
    altText: "Woman in black sequins leaning on brass rail inside the Orpheum auditorium",
    title: "Chandelier rail",
    caption: "Sequins against red velvet seating and the painted dome — a theatre portrait that keeps the full bowl.",
  },
  {
    id: "p-new-10",
    url: "/gallery/portraits/orph-10.jpg",
    altText: "Woman in black sequins walking the Orpheum balcony rail",
    title: "Balcony walk",
    caption: "One hand on the rail, chandelier overhead, red seats falling away — movement inside a formal house.",
  },
  {
    id: "p-new-11",
    url: "/gallery/portraits/orph-11.jpg",
    altText: "Woman in green lace dress framed by pointed balcony arch at the Orpheum",
    title: "Arch landing",
    caption: "Green lace, brass rail, Gothic arch — the quiet upper-balcony version of black-tie.",
  },
  {
    id: "p-new-12",
    url: "/gallery/portraits/orph-12.jpg",
    altText: "Man in formal black coat standing at the Orpheum balcony rail beneath carved ceiling",
    title: "Upper rail",
    caption: "Straight stance, carved columns, chandelier glow below — formal portraiture with full-house gravity.",
  },
  {
    id: "p-seemo-1",
    url: "/gallery/portraits/seemo-01.jpg",
    altText: "Man in charcoal blazer seated on urban ledge looking aside",
    title: "Urban ledge",
    caption: "Charcoal blazer, low concrete ledge, soft downtown blur — a branding frame with room to breathe.",
  },
  {
    id: "p-seemo-2",
    url: "/gallery/portraits/seemo-02.jpg",
    altText: "Man smiling with arms crossed showing luxury watch",
    title: "Downward grin",
    caption: "Eyes down, arms crossed, bezel catching light — the relaxed beat before the hard-sell face.",
  },
  {
    id: "p-seemo-3",
    url: "/gallery/portraits/seemo-03.jpg",
    altText: "Head-and-shoulders portrait looking into camera",
    title: "Blue-bokeh headshot",
    caption: "Open collar, direct eye line, cool city bokeh — the clean speaker-page frame.",
  },
  {
    id: "p-seemo-4",
    url: "/gallery/portraits/seemo-04.jpg",
    altText: "Man arms crossed in herringbone blazer with white pocket square",
    title: "Pocket-square front",
    caption: "Front-facing, arms folded, white pocket square and steel watch held quiet against the blur.",
  },
  {
    id: "p-seemo-5",
    url: "/gallery/portraits/seemo-05.jpg",
    altText: "Man smiling in emerald high-back chair in herringbone blazer",
    title: "Emerald chair laugh",
    caption: "Half-profile smile inside the emerald wingback — softer than the rooftop set without losing polish.",
  },
  {
    id: "p-seemo-6",
    url: "/gallery/portraits/seemo-06.jpg",
    altText: "Man seated in emerald wing chair with legs crossed",
    title: "Wingback full seat",
    caption: "Crossed leg, stacked bracelets, deep green upholstery — lounge authority without boardroom stiffness.",
  },
  {
    id: "p-seemo-7",
    url: "/gallery/portraits/seemo-07.jpg",
    altText: "See Mo smiling over a glass rail with city and mountain blur behind",
    title: "Glass-rail smile",
    caption: "Elbow on the glass rail, mountain haze behind, full smile finally on the page.",
  },
  {
    id: "p-seemo-8",
    url: "/gallery/portraits/seemo-08.jpg",
    altText: "See Mo standing with a partner on a rooftop terrace in coordinated black looks",
    title: "Terrace duo",
    caption: "Two-person branding frame on the terrace — coordinated blacks, brick facade, business-partner ease.",
  },
  {
    id: "p-seemo-9",
    url: "/gallery/portraits/seemo-09.jpg",
    altText: "See Mo lifting sunglasses on a sunlit rooftop ledge",
    title: "Sunglasses lift",
    caption: "Hand to the frames, late sun on the concrete, bracelet and watch doing subtle luxury work.",
  },
  {
    id: "p-seemo-10",
    url: "/gallery/portraits/seemo-10.jpg",
    altText: "See Mo seated on a rooftop ledge in sunglasses",
    title: "Rooftop still",
    caption: "Seated on the ledge in black-on-charcoal, sunglasses on — the serious closer after the smile set.",
  },
  {
    id: "p-new-13",
    url: "/gallery/portraits/p50-01.jpg",
    altText: "Man in bow tie and glasses in profile at a marquee W stage",
    title: "Stage profile",
    caption: "High-profile evening portrait \u2014 glasses, bow tie, marquee light. Event-night presence.",
  },
  {
    id: "p-new-14",
    url: "/gallery/portraits/p50-02.jpg",
    altText: "Power 50 or awards-night portrait select",
    title: "Awards night",
    caption: "Formal portrait energy from a Power 50 / awards room.",
  },
  {
    id: "p-new-15",
    url: "/gallery/portraits/p50-03.jpg",
    altText: "Power 50 or awards-night portrait select",
    title: "Room face",
    caption: "Finished face from a high-profile Vancouver evening.",
  },
  {
    id: "p-new-16",
    url: "/gallery/portraits/cm-01.jpg",
    altText: "Creative Mornings speaker or guest portrait",
    title: "Creative Mornings",
    caption: "Creative Mornings \u2014 talk-day portrait craft.",
  },
  {
    id: "p-new-17",
    url: "/gallery/portraits/yvr-01.jpg",
    altText: "YVR Entrepreneurs portrait select",
    title: "YVR Entrepreneurs",
    caption: "Brittany / YVR Entrepreneurs room \u2014 founder presence.",
  },

  {
    id: "p1",
    url: "/gallery/portraits/headshot-01.jpg",
    altText: "Speaker portrait from a Vancouver AI community evening",
    title: "Direct presence",
    caption: "Community speaker energy — clean separation, no stiff pose.",
  },
  {
    id: "p2",
    url: "/gallery/portraits/branding-01.jpg",
    altText: "Founder-room portrait with gesture",
    title: "In the room",
    caption: "Gesture and atmosphere from a founder evening — presence over product.",
  },
  {
    id: "p3",
    url: "/gallery/portraits/headshot-05.jpg",
    altText: "Bearded speaker with mic under warm stage light",
    title: "Stage heat",
    caption: "Tattoo, beanie, turquoise — a different founder-room register than the suit set.",
  },
  {
    id: "p4",
    url: "/gallery/portraits/headshot-02.jpg",
    altText: "Open-handed mid-talk portrait",
    title: "Open hand",
    caption: "Mid-talk portrait with the room still in the frame.",
  },
  {
    id: "p5",
    url: "/gallery/portraits/branding-03.jpg",
    altText: "Quiet authority portrait from a community gathering",
    title: "Quiet authority",
    caption: "Composure that reads finished, with just enough room tone left in to keep it honest.",
  },
  {
    id: "p6",
    url: "/gallery/portraits/headshot-06.jpg",
    altText: "Smiling speaker with Vancouver AI screen behind",
    title: "Community night",
    caption: "Yellow beanie, open laugh — the meetup energy people hire her to hold.",
  },
  {
    id: "p7",
    url: "/gallery/portraits/headshot-04.jpg",
    altText: "Founder on stage with name tag",
    title: "Founder stage",
    caption: "Name tag, gesture, and authority without the stiff corporate pose.",
  },
  {
    id: "p8",
    url: "/gallery/portraits/branding-04.jpg",
    altText: "Two guests mid-conversation on a meetup stage edge",
    title: "Between talks",
    caption: "Networking as a portrait — two people, one blue LED strip, no freeze.",
  },
  {
    id: "p9",
    url: "/gallery/portraits/branding-05.jpg",
    altText: "Portrait after the talk ends",
    title: "After the room",
    caption: "The person still holding the conversation after the talk ends.",
  },
  {
    id: "p10",
    url: "/gallery/portraits/headshot-03.jpg",
    altText: "Warm mid-talk community portrait",
    title: "Warm mid-talk",
    caption: "Confident mid-talk frame from a community night.",
  },
  {
    id: "p11",
    url: "/gallery/portraits/branding-06.jpg",
    altText: "Speaker in striped shirt under spotlight with purple stage light",
    title: "Keynote light",
    caption: "Spotlight and purple floor line — stage craft from a community bill.",
  },
  {
    id: "p12",
    url: "/gallery/portraits/headshot-07.jpg",
    altText: "Speaker mid-gesture explaining with both hands",
    title: "The explain",
    caption: "Hands mid-measure — the frame people reuse for speaker pages.",
  },
  {
    id: "p13",
    url: "/gallery/portraits/branding-02.jpg",
    altText: "Gesture-forward community portrait",
    title: "Gesture-forward",
    caption: "The branding frame people reuse — still honest about its meetup origin.",
  },
  {
    id: "p14",
    url: "/gallery/portraits/headshot-08.jpg",
    altText: "Woman in terracotta blouse presenting with laptop and mic",
    title: "Project overview",
    caption: "Woman on stage with laptop and mic — speaker craft the portraits page needed.",
  },
  {
    id: "p15",
    url: "/gallery/portraits/branding-08.jpg",
    altText: "Speaker on stage in front of his own projected portrait slide",
    title: "Slide and speaker",
    caption: "Live talk craft — speaker and projected portrait locked into one frame.",
  },
  {
    id: "p16",
    url: "/gallery/portraits/headshot-09.jpg",
    altText: "Speaker in tan blazer holding laptop and mic",
    title: "Laptop and mic",
    caption: "Builder energy mid-demo — candid, not a studio headshot.",
  },
  {
    id: "p17",
    url: "/gallery/portraits/branding-09.jpg",
    altText: "Bearded speaker with arm raised under stage light",
    title: "Arm high",
    caption: "Gesture that fills the frame — tattoos, mic, purple practical.",
  },
  {
    id: "p18",
    url: "/gallery/portraits/headshot-10.jpg",
    altText: "Young speaker smiling with magenta stage light",
    title: "Magenta laugh",
    caption: "Joy mid-talk — beanie, chain, Vancouver AI colour wash.",
  },
  {
    id: "p19",
    url: "/gallery/portraits/headshot-11.jpg",
    altText: "Speaker in profile gesturing with both hands",
    title: "Counting points",
    caption: "Profile explain — hands doing the coaching work.",
  },
  {
    id: "p20",
    url: "/gallery/portraits/branding-11.jpg",
    altText: "Tech operator at laptop and AV desk during a meetup",
    title: "At the desk",
    caption: "Production-side portrait — the room runs because someone sits here.",
  },
  {
    id: "p21",
    url: "/gallery/portraits/branding-12.jpg",
    altText: "Warm close portrait from a community talk",
    title: "Close finish",
    caption: "Tight finish frame — community-room polish with studio-level restraint.",
  },
];

/**
 * Full curated events diversity edit + community meetup frames.
 * Wired to every strong `_curated` non-opera select plus `public/gallery/community/`.
 * Tipalti/KTL depth still thin until album JPGs are restored for re-pull.
 */
export const eventGalleryItems: LightboxItem[] = [
  {
    id: "e1",
    url: "/gallery/events/tipalti-02.jpg",
    altText: "Seven guests in evening wear on a gold velvet settee",
    title: "The settee",
    caption: "Tipalti Holiday Party 2025 — seven-person glam held as a composed room.",
  },
  {
    id: "e2",
    url: "/gallery/events/tipalti-01.jpg",
    altText: "Couple on mustard velvet settee at Tipalti Holiday Party",
    title: "Gala romance",
    caption: "Tipalti Holiday Party 2025 — red gown, mustard velvet, human light.",
  },
  {
    id: "e3",
    url: "/gallery/events/hangar-01.jpg",
    altText: "Man in tuxedo with seaplane backdrop",
    title: "Private hangar",
    caption: "Tuxedo, Kodiak, Canadian flag — occasion without the crowd shot.",
  },
  {
    id: "e4",
    url: "/gallery/events/hangar-02.jpg",
    altText: "Man in black blazer with arms crossed at private hangar",
    title: "Hangar host",
    caption: "VC Private Hangar — lifestyle authority against the evening.",
  },
  {
    id: "e5",
    url: "/gallery/events/symphony-02.jpg",
    altText: "Young violinist at Symphony in the Park",
    title: "Music in the park",
    caption: "Vancouver Symphony at Deer Lake — cultural evening, not a meetup snapshot.",
  },
  {
    id: "e6",
    url: "/gallery/events/symphony-01.jpg",
    altText: "Trumpeter smiling at Symphony in the Park",
    title: "Brass daylight",
    caption: "Musician portrait from the same Deer Lake bill — daylight craft.",
  },
  {
    id: "e7",
    url: "/gallery/events/lambo-01.jpg",
    altText: "Electric blue Lamborghini Revuelto in showroom light",
    title: "The car alone",
    caption: "Revuelto product hero — brand night as object, not only people.",
  },
  {
    id: "e8",
    url: "/gallery/events/lambo-02.jpg",
    altText: "Guests laughing at the nose of a matte teal Lamborghini",
    title: "Around the nose",
    caption: "Lifestyle + car — guests pointing, hexagonal DRLs lit.",
  },
  {
    id: "e9",
    url: "/gallery/events/lambo-03.jpg",
    altText: "Model with gold chrome and Lamborghini branding",
    title: "Campaign night",
    caption: "Gold chrome and twin bulls — brand event as fashion still.",
  },
  {
    id: "e10",
    url: "/gallery/events/lambo-04.jpg",
    altText: "Lamborghini event portrait select",
    title: "Brand evening",
    caption: "Carbon helmet, gold gloves — colour and posture from the night.",
  },
  {
    id: "e11",
    url: "/gallery/events/lambo-05.jpg",
    altText: "Stephan Winkelmann speaking at Lamborghini event",
    title: "The mic",
    caption: "CEO mid-stride — authority without the stiff pose.",
  },
  {
    id: "e12",
    url: "/gallery/events/lambo-06.jpg",
    altText: "Lamborghini evening guest portrait",
    title: "Guest light",
    caption: "Suited VIP against matte blue — people and product fused.",
  },
  {
    id: "e13",
    url: "/gallery/events/proposal-01.jpg",
    altText: "Proposal moment — he kneels with the ring",
    title: "The kneel",
    caption: "Private occasion held with discretion and timing.",
  },
  {
    id: "e14",
    url: "/gallery/events/proposal-03.jpg",
    altText: "Couple through candle bokeh after proposal",
    title: "Candle depth",
    caption: "Oxblood dress, rose bouquet, taper bokeh — styled intimacy.",
  },
  {
    id: "e15",
    url: "/gallery/events/proposal-04.jpg",
    altText: "Joyful laughter with rose bouquet after yes",
    title: "Peak joy",
    caption: "Post-yes laugh and ring flash — celebration held clean.",
  },
  {
    id: "e16",
    url: "/gallery/events/proposal-02.jpg",
    altText: "Marquise diamond ring in rose petals",
    title: "Ring macro",
    caption: "Privacy-safe detail hero — the object without faces.",
  },
  {
    id: "e17",
    url: "/gallery/events/proposal-06.jpg",
    altText: "Joyful embrace with roses after the proposal",
    title: "The hold",
    caption: "Tears into the roses — the hold after the answer.",
  },
  {
    id: "e18",
    url: "/gallery/events/proposal-05.jpg",
    altText: "Intimate proposal portrait with ring detail",
    title: "Engagement finish",
    caption: "Polished couple portrait for the couple's own record.",
  },
  {
    id: "e19",
    url: "/gallery/events/ktl-01.jpg",
    altText: "Mini cupcakes with sage frosting and gold accents",
    title: "Holiday detail",
    caption: "KTL Holiday Party — table craft that sells the evening without a crowd shot.",
  },
  {
    id: "e20",
    url: "/gallery/events/catering-01.jpg",
    altText: "Gourmet sandwich and fries on branded plate at a community gathering",
    title: "Plate craft",
    caption: "Meetup catering detail — food as atmosphere, not filler.",
  },
  {
    id: "e21",
    url: "/gallery/community/meetup-01.jpg",
    altText: "Bearded speaker pointing toward audience at Vancouver AI meetup",
    title: "Community stage",
    caption: "Vancouver AI room — CREATOR energy, purple floor light, decisive gesture.",
  },
  {
    id: "e22",
    url: "/gallery/community/meetup-02.jpg",
    altText: "Woman in red lace speaking on mic with purple stage lights",
    title: "Purple bars",
    caption: "Meetup performance light — red lace against neon, in-the-room depth.",
  },
  {
    id: "e23",
    url: "/gallery/community/meetup-03.jpg",
    altText: "Silhouette of person in VR headset framed by garden arch",
    title: "VR arch",
    caption: "Immersive tech as silhouette — garden through the arch, headset held quiet.",
  },
  {
    id: "e24",
    url: "/gallery/community/meetup-04.jpg",
    altText: "Smiling speaker at Surrey AI Community Meetup",
    title: "Surrey AI night",
    caption: "Surrey AI Community Meetup — joy at the mic, community-rate proof.",
  },
  {
    id: "e25",
    url: "/gallery/community/meetup-05.jpg",
    altText: "Women in the audience under magenta stage light at Vancouver AI",
    title: "In the seats",
    caption: "Audience as subject — engaged faces, magenta wash, the room listening.",
  },
  {
    id: "e26",
    url: "/gallery/community/meetup-06.jpg",
    altText: "Two guests in maximalist fashion posing at a Vancouver AI night",
    title: "Maximalist pair",
    caption: "Leopard and neon yarn — community fashion energy Michelle actually shoots.",
  },
  {
    id: "e27",
    url: "/gallery/community/meetup-07.jpg",
    altText: "Performer with feather headdress and hand drum on stage",
    title: "Drum and feathers",
    caption: "Cultural performance on a community stage — gravity, green practical, oxblood curtain.",
  },
  {
    id: "e28",
    url: "/gallery/community/meetup-08.jpg",
    altText: "Audience phone recording a performer on stage",
    title: "Phone in the dark",
    caption: "Frame-within-frame — how the room documents the night.",
  },
  {
    id: "e-new-1",
    url: "/gallery/events/p50-room-01.jpg",
    altText: "Power 50 awards room atmosphere",
    title: "Power 50 room",
    caption: "Awards-night atmosphere \u2014 the room before the speech.",
  },
  {
    id: "e-new-2",
    url: "/gallery/events/p50-room-02.jpg",
    altText: "Power 50 gathering wide or detail",
    title: "Power 50 wide",
    caption: "High-profile Vancouver evening held as atmosphere.",
  },
  {
    id: "e-new-3",
    url: "/gallery/events/p50-room-03.jpg",
    altText: "Power 50 event select",
    title: "Power 50 finish",
    caption: "Stage or guest craft from Power 50 Kris Kr\u00fcg coverage.",
  },
  {
    id: "e-new-4",
    url: "/gallery/events/yvr-room-01.jpg",
    altText: "YVR Entrepreneurs gathering room",
    title: "YVR room",
    caption: "YVR Entrepreneurs Brittany \u2014 networking room as event craft.",
  },
];

/** Home events strip — gala, hangar, romance, brand, community diversity. */
export const homeEventStrip = [
  {
    src: "/gallery/events/tipalti-02.jpg",
    alt: "Guests in evening wear on a gold velvet settee — Tipalti Holiday Party 2025",
  },
  {
    src: "/gallery/events/hangar-01.jpg",
    alt: "Man in tuxedo with seaplane backdrop at a private hangar",
  },
  {
    src: "/gallery/events/proposal-03.jpg",
    alt: "Couple through candle bokeh after a private proposal",
  },
  {
    src: "/gallery/community/meetup-06.jpg",
    alt: "Two guests in maximalist fashion at a Vancouver AI community night",
  },
  {
    src: "/gallery/events/lambo-01.jpg",
    alt: "Electric blue Lamborghini Revuelto in showroom light",
  },
  {
    src: "/gallery/community/meetup-07.jpg",
    alt: "Performer with feather headdress and hand drum on a community stage",
  },
] as const;

export const eventPrinciples = [
  {
    label: "The room",
    body: "A photograph of the space before the doors open often says more than a photograph of the crowd inside it.",
  },
  {
    label: "The atmosphere",
    body: "Light, candle, glass, brass, linen. The evening you built — held in a frame.",
  },
  {
    label: "Discretion",
    body: "No flash where it doesn't belong. No faces mid-sentence. Guests are people first, subjects second.",
  },
] as const;

/**
 * Culinary wall — Giulia Pasta + Aperol Night plus table craft from gatherings.
 */
export const foodGalleryItems: LightboxItem[] = [
  {
    id: "food-1",
    url: "/gallery/food/food-01.jpg",
    altText: "Fresh pasta mounds and stockpots on a kraft-paper prep table",
    title: "Mise en place",
    caption: "Giulia Pasta + Aperol Night \u2014 artisanal pasta station under arched loft windows.",
  },
  {
    id: "food-2",
    url: "/gallery/food/food-02.jpg",
    altText: "Woman in striped apron lifting fresh pasta strands on a wooden tool",
    title: "Pasta lift",
    caption: "Giulia night — joy mid-craft, flour on the board, brick loft behind.",
  },
  {
    id: "food-3",
    url: "/gallery/food/food-03.jpg",
    altText: "Two hosts in striped aprons celebrating at a flour-dusted pasta table",
    title: "Pasta hosts",
    caption: "Aperol glass, rolling pins, brick loft — the joy of the cook.",
  },
  {
    id: "food-4",
    url: "/gallery/food/food-04.jpg",
    altText: "Saint-Louis Brut bottles chilling in a silver ice bucket with eucalyptus",
    title: "Ice bucket",
    caption: "Sparkling detail — gold foil, crushed ice, eucalyptus on black linen.",
  },
  {
    id: "food-5",
    url: "/gallery/food/food-05.jpg",
    altText: "Aperol bottle with branded Spritz glass and orange slices",
    title: "Aperol still",
    caption: "Aperitivo hero — orange glass, gold foil ice bucket, the night's drink.",
  },
  {
    id: "food-6",
    url: "/gallery/food/food-06.jpg",
    altText: "Guests or cooks mid-prep at a culinary workshop",
    title: "In the kitchen",
    caption: "People and pasta in one frame \u2014 not a sterile food studio.",
  },
  {
    id: "food-7",
    url: "/gallery/food/food-07.jpg",
    altText: "Culinary workshop detail from Giulia Pasta night",
    title: "Hands at work",
    caption: "The twenty minutes before the plate leaves the board.",
  },
  {
    id: "food-8",
    url: "/gallery/food/food-08.jpg",
    altText: "Warm food atmosphere from a pasta and Aperol evening",
    title: "Loft light",
    caption: "Brick, wood, and the room holding the meal.",
  },
  {
    id: "food-9",
    url: "/gallery/food/food-09.jpg",
    altText: "Holiday or table food detail from a gathering",
    title: "Holiday plate",
    caption: "KTL/Tipalti-adjacent table craft \u2014 sage frosting, gold, celebration.",
  },
  {
    id: "food-10",
    url: "/gallery/food/food-10.jpg",
    altText: "Gourmet catering plate from a community gathering",
    title: "Branded plate",
    caption: "Sandwich and fries as atmosphere \u2014 meetup catering held clean.",
  },
];

export const foodPrinciples = [
  {
    label: "The plate",
    body: "Food reads as atmosphere first — glass, flour, linen, colour — before it reads as a menu shot.",
  },
  {
    label: "The cook",
    body: "Hands, aprons, and the people who make the night. Culinary coverage is still portraiture.",
  },
  {
    label: "The room",
    body: "Brick loft, kraft paper, arched windows. The place that held the meal stays in the frame.",
  },
] as const;

/** Home food peek. */
export const homeFoodStrip = [
  { src: "/gallery/food/food-01.jpg", alt: "Fresh pasta prep station under arched loft windows" },
  { src: "/gallery/food/food-03.jpg", alt: "Two hosts celebrating at a flour-dusted pasta table" },
  { src: "/gallery/food/food-05.jpg", alt: "Aperol spritz light at a culinary evening" },
  { src: "/gallery/food/food-04.jpg", alt: "Plated pasta craft from Giulia evening" },
  { src: "/gallery/food/food-09.jpg", alt: "Holiday table food detail" },
  { src: "/gallery/food/food-10.jpg", alt: "Gourmet catering plate from a gathering" },
] as const;

/**
 * Community meetup wall — BC + AI, Vancouver AI, Surrey AI, Creative Mornings.
 */
export const communityGalleryItems: LightboxItem[] = [
  {
    id: "comm-m1",
    url: "/gallery/community/meetup-01.jpg",
    altText: "Bearded speaker pointing toward audience at Vancouver AI meetup",
    title: "Community stage",
    caption: "Vancouver AI \u2014 CREATOR energy, purple floor light, decisive gesture.",
  },
  {
    id: "comm-m2",
    url: "/gallery/community/meetup-02.jpg",
    altText: "Woman in red lace speaking on mic with purple stage lights",
    title: "Purple bars",
    caption: "Red lace against neon \u2014 meetup performance light held deep.",
  },
  {
    id: "comm-m3",
    url: "/gallery/community/meetup-03.jpg",
    altText: "Silhouette of person in VR headset framed by garden arch",
    title: "VR arch",
    caption: "Headset as silhouette \u2014 garden through the arch, quiet tech.",
  },
  {
    id: "comm-m4",
    url: "/gallery/community/meetup-04.jpg",
    altText: "Smiling speaker at Surrey AI Community Meetup",
    title: "Surrey joy",
    caption: "Joy at the mic \u2014 community-rate craft that still reads finished.",
  },
  {
    id: "comm-m5",
    url: "/gallery/community/meetup-05.jpg",
    altText: "Women in the audience under magenta stage light at Vancouver AI",
    title: "In the seats",
    caption: "Audience as subject \u2014 magenta wash, the room listening.",
  },
  {
    id: "comm-m6",
    url: "/gallery/community/meetup-06.jpg",
    altText: "Two guests in maximalist fashion posing at a Vancouver AI night",
    title: "Maximalist pair",
    caption: "Leopard and neon yarn \u2014 community fashion Michelle actually shoots.",
  },
  {
    id: "comm-m7",
    url: "/gallery/community/meetup-07.jpg",
    altText: "Performer with feather headdress and hand drum on stage",
    title: "Drum and feathers",
    caption: "Cultural gravity on a community stage \u2014 green practical, oxblood curtain.",
  },
  {
    id: "comm-m8",
    url: "/gallery/community/meetup-08.jpg",
    altText: "Audience phone recording a performer on stage",
    title: "Phone in the dark",
    caption: "Frame-within-frame \u2014 how the room documents the night.",
  },
  {
    id: "comm-1",
    url: "/gallery/community/comm-cm-01.jpg",
    altText: "Man in VAN-AI shirt and teal glasses in a Creative Mornings crowd",
    title: "VAN-AI tee",
    caption: "Tie-dye VAN-AI shirt, teal frames, beard lit warm above the audience heads.",
  },
  {
    id: "comm-2",
    url: "/gallery/community/comm-cm-02.jpg",
    altText: "Bearded speaker gesturing in a Creative Mornings room",
    title: "Cap-side gesture",
    caption: "Side-profile question from the aisle — cap brim, teal glasses, crowd blur and doorway holding the room.",
  },
  {
    id: "comm-3",
    url: "/gallery/community/comm-cm-03.jpg",
    altText: "Rows of black chairs with Creative Mornings handouts before the talk",
    title: "Handouts on chairs",
    caption: "Black chairs, printed cards, polished wood floor — the room before Creative Mornings starts.",
  },
  {
    id: "comm-4",
    url: "/gallery/community/comm-cm-04.jpg",
    altText: "Speaker at Vancouver Public Library lectern beside CreativeMornings Manifesto slide",
    title: "Manifesto slide",
    caption: "Striped CreativeMornings screen, mic on standby, audience locked in before the first question.",
  },
  {
    id: "comm-5",
    url: "/gallery/community/comm-cm-05.jpg",
    altText: "Host in green suit listening as speaker addresses the Creative Mornings crowd",
    title: "Mic handoff",
    caption: "Green suit at the lectern, tie-dye host in the foreground — the handoff moment rather than the keynote pose.",
  },
  {
    id: "comm-6",
    url: "/gallery/community/comm-cm-06.jpg",
    altText: "Guitarist performing to an applauding Creative Mornings room",
    title: "Applause with guitar",
    caption: "Acoustic set, raised phone rig, coffee cups in hand — a morning crowd caught mid-applause.",
  },
  {
    id: "comm-7",
    url: "/gallery/community/comm-feb-01.jpg",
    altText: "Three women in magenta stage light listening at AI meetup",
    title: "Magenta seats",
    caption: "Feb AI meetup \u2014 purple wash, gold earring, the room locked on.",
  },
  {
    id: "comm-8",
    url: "/gallery/community/comm-feb-02.jpg",
    altText: "Audience member in white tee applauding under magenta stage light",
    title: "Ed in magenta",
    caption: "White tee, name tag, pink wash, hands mid-clap — audience energy held close.",
  },
  {
    id: "comm-9",
    url: "/gallery/community/comm-feb-03.jpg",
    altText: "Audience member in leather jacket listening with hands clasped under magenta light",
    title: "Leather-jacket listen",
    caption: "Hands clasped, jaw set, purple spill on the face — concentration instead of chatter.",
  },
  {
    id: "comm-10",
    url: "/gallery/community/comm-feb-04.jpg",
    altText: "Man in blazer listening in warm amber theatre light",
    title: "Amber attention",
    caption: "Peach collar, knuckles under chin, amber house light — the listening face of the night.",
  },
  {
    id: "comm-11",
    url: "/gallery/community/comm-feb-05.jpg",
    altText: "Rack of Vancouver AI Community Meetup shirts on wooden hangers",
    title: "Meetup merch rail",
    caption: "Black tees on chrome hangers — branded detail that says the room was built, not improvised.",
  },
  {
    id: "comm-12",
    url: "/gallery/community/comm-feb-06.jpg",
    altText: "Two attendees in close conversation during the February meetup",
    title: "Low-light exchange",
    caption: "Knees turned in, hands explaining, amber spill across both faces — networking with actual intimacy.",
  },
  {
    id: "comm-13",
    url: "/gallery/community/comm-nov-01.jpg",
    altText: "Audience member in plaid overshirt speaking into a microphone at a November meetup",
    title: "Plaid question",
    caption: "Plaid overshirt, seated mic, open palm — the question from the middle rows, not the stage.",
  },
  {
    id: "comm-14",
    url: "/gallery/community/comm-nov-02.jpg",
    altText: "Speaker Lionel gesturing from the floor with microphone at the November meetup",
    title: "Lionel on mic",
    caption: "Patterned overshirt, name tag, mic low — speaking from the aisle with the crowd still in frame.",
  },
  {
    id: "comm-15",
    url: "/gallery/community/comm-nov-03.jpg",
    altText: "Lionel reaching toward the audience while speaking into a microphone",
    title: "Open-hand ask",
    caption: "Extended hand, direct ask, no podium — the participatory beat instead of the lecture shot.",
  },
  {
    id: "comm-16",
    url: "/gallery/community/comm-nov-04.jpg",
    altText: "Lionel speaking onstage beside a projected forum slide at the November meetup",
    title: "Forum screen",
    caption: "Red curtain, forum slide, violet spill on the sleeve — enough stage context without losing the face.",
  },
  {
    id: "comm-17",
    url: "/gallery/community/comm-nov-05.jpg",
    altText: "Panelists in conversation beneath a projected Kris Krüg slide at the November meetup",
    title: "Panel side-eye",
    caption: "A look across the panel with Kris Krüg projected behind — conversation, not posed coverage.",
  },
  {
    id: "comm-18",
    url: "/gallery/community/comm-nov-06.jpg",
    altText: "Two attendees chatting against a pink-lit backdrop at the November meetup",
    title: "Pink-backdrop chat",
    caption: "Name tag, phone timer, soft rose backdrop — the night closing in conversation rather than applause.",
  },
  {
    id: "comm-19",
    url: "/gallery/community/comm-oct-01.jpg",
    altText: "Autumn courtyard networking under arched building light",
    title: "Courtyard night",
    caption: "Oct BC AI \u2014 leaves, arches, the outdoor room.",
  },
  {
    id: "comm-20",
    url: "/gallery/community/comm-oct-02.jpg",
    altText: "Two men outdoors at night with camera gimbal and autumn leaves",
    title: "Crew energy",
    caption: "Gimbal, leather vest, autumn leaves \u2014 community craft with teeth.",
  },
  {
    id: "comm-21",
    url: "/gallery/community/comm-oct-03.jpg",
    altText: "Guest in suit gesturing with a canned drink beside a wood-slat wall at a BC AI meetup",
    title: "Wood-wall pitch",
    caption: "Suit jacket, canned drink, wood-slat wall — hallway conversation shot like a quick portrait.",
  },
  {
    id: "comm-22",
    url: "/gallery/community/comm-oct-04.jpg",
    altText: "Two attendees in animated conversation during the October meetup",
    title: "Aisle debate",
    caption: "One hand mid-explain, one can in hand, teal seats behind — the room alive between talks.",
  },
  {
    id: "comm-23",
    url: "/gallery/community/comm-oct-05.jpg",
    altText: "Speaker in black vest onstage under the Vancouver AI Community Meetup screen",
    title: "MacMillan stage",
    caption: "Black vest against the HR MacMillan Space Centre screen — a full-room establishing frame with the bill legible.",
  },
  {
    id: "comm-24",
    url: "/gallery/community/comm-oct-06.jpg",
    altText: "Anthony Joseph speaking in regalia on the Vancouver AI stage",
    title: "Anthony Joseph",
    caption: "Red shirt, beadwork, drum in hand, purple spill from the screen — cultural presence held without flattening it.",
  },
  {
    id: "comm-25",
    url: "/gallery/community/comm-oct-07.jpg",
    altText: "Table spread of Vancouver AI stickers and patches under blue light",
    title: "Sticker table",
    caption: "Glossy patches and neon-edged stickers — merch detail that still feels like nightlife.",
  },
  {
    id: "comm-26",
    url: "/gallery/community/comm-oct-08.jpg",
    altText: "Speaker gesturing into a microphone before a projected portrait slide",
    title: "Projected portrait",
    caption: "Hand shadow on the shirt, projected face behind, mic close — speaker-page energy with the live room intact.",
  },
  {
    id: "comm-27",
    url: "/gallery/community/comm-surrey-01.jpg",
    altText: "Three attendees talking under a large tree at a Surrey AI park meetup",
    title: "Tree-shade huddle",
    caption: "Three-person cluster in late-day park light — Surrey held as summer hangout, not ballroom.",
  },
  {
    id: "comm-28",
    url: "/gallery/community/comm-surrey-02.jpg",
    altText: "Three attendees seated on the grass under a leafy tree at a Surrey AI picnic meetup",
    title: "Grass-circle talk",
    caption: "Three people on the grass, leaf canopy above, conversation unforced.",
  },
  {
    id: "comm-29",
    url: "/gallery/community/comm-surrey-03.jpg",
    altText: "Teen volleying a Spalding volleyball at a Surrey AI park meetup",
    title: "Volleyball serve",
    caption: "Forearms out, ball suspended, late sun in the trees — community night turned summer park scene.",
  },
  {
    id: "comm-30",
    url: "/gallery/community/comm-surrey-04.jpg",
    altText: "Two youths tracking a volleyball in golden-hour Surrey park light",
    title: "Golden-hour volley",
    caption: "Ball hanging above the frame, striped tee looking up — the playful closer instead of another networking plate.",
  },
  {
    id: "comm-31",
    url: "/gallery/community/comm-aug25-01.jpg",
    altText: "Three guests posing under willow branches at BC + AI Community Meetup August 2025",
    title: "Willow trio",
    caption:
      "August BC + AI — garden path portrait with two Ethọ́s Lab tees and a mustard coat holding the centre.",
  },
  {
    id: "comm-32",
    url: "/gallery/community/comm-aug25-02.jpg",
    altText: "Speaker with microphone on stage in front of an AI-themed projection at BC + AI Community Meetup August 2025",
    title: "Job-market stage",
    caption:
      "August BC + AI — side-stage speaker plate with the giant AI letter, red curtain, and hiring slide still in frame.",
  },
  {
    id: "comm-33",
    url: "/gallery/community/comm-sept25-01.jpg",
    altText: "Speaker in patterned vest holding a hand drum beside a bearded host on stage at the BC + AI September meetup",
    title: "Drum on stage",
    caption:
      "September BC + AI — hand drum, patterned vest, and the room holding still for the introduction.",
  },
  {
    id: "comm-34",
    url: "/gallery/community/comm-sept25-02.jpg",
    altText: "Small conversation circle seated and standing in a courtyard at the BC + AI September meetup",
    title: "Courtyard circle",
    caption:
      "September BC + AI — six-person conversation at bench height, the kind of networking frame that feels lived in instead of posed.",
  },
  {
    id: "comm-35",
    url: "/gallery/community/comm-jan26-01.jpg",
    altText: "Two speakers on stage before a BC AI ecosystem projection and audience at AI Meetup January 2026",
    title: "Intelligent Omics night",
    caption:
      "January AI meetup — guest and host at centre stage, DNA projection and full house telling you what the room came for.",
  },
  {
    id: "comm-36",
    url: "/gallery/community/comm-jan26-02.jpg",
    altText: "Formal portrait of a drummer in regalia with a blue bead necklace at AI Meetup January 2026",
    title: "Drummer portrait",
    caption:
      "January AI meetup — direct portrait with drum, beadwork, and wood-panel light held clean.",
  },
  {
    id: "comm-37",
    url: "/gallery/community/comm-feb26-01.jpg",
    altText: "Vanessa Gonzales of Squamish Nation speaking beside a youth presenter on stage at BC + AI Community Meetup February 2026",
    title: "Squamish Nation welcome",
    caption:
      "February BC + AI — Vanessa Gonzales and youth on stage, blanket fringe and drum colour reading all the way to the back row.",
  },
  {
    id: "comm-38",
    url: "/gallery/community/comm-feb26-02.jpg",
    altText: "Community supply station table with stickers, posters, and pinned speaker cards at BC + AI Community Meetup February 2026",
    title: "Supply station",
    caption:
      "February BC + AI — stickers, speaker cards, and the Space Chiefs table proving the community builds its own texture.",
  },
  {
    id: "comm-39",
    url: "/gallery/community/comm-mar26-01.jpg",
    altText: "Speaker presenting a physical AI slide beside a small robot cart at the BC + AI March 2026 meetup",
    title: "Physical AI demo",
    caption:
      "March BC + AI — mic, robot cart, and a physical-AI slide in one frame; real demo-night energy.",
  },
  {
    id: "comm-40",
    url: "/gallery/community/comm-mar26-02.jpg",
    altText: "Three guests posing beneath cherry blossoms at the BC + AI March 2026 meetup",
    title: "Cherry blossom trio",
    caption:
      "March BC + AI — spring portrait under the blossoms, polished without losing the meetup-badge honesty.",
  },
  {
    id: "comm-41",
    url: "/gallery/community/comm-apr26-01.jpg",
    altText: "Photographer holding a camera with a telephoto lens at BC + AI Community Meetup April 2026",
    title: "Michelle at work",
    caption:
      "April BC + AI — Michelle in profile with one body in hand and the long lens at her hip, the community night from the maker's side.",
  },
  {
    id: "comm-42",
    url: "/gallery/community/comm-apr26-02.jpg",
    altText: "Speaker standing before a Comox Valley AI projection at BC + AI Community Meetup April 2026",
    title: "Comox Valley AI",
    caption:
      "April BC + AI — speaker held against the Comox Valley AI mark, shadow and logo doing equal work.",
  },
  {
    id: "comm-43",
    url: "/gallery/community/comm-june26-01.jpg",
    altText: "Crowd mingling in a courtyard under a large tree at AI Community Meetup June 2026",
    title: "Courtyard crowd",
    caption:
      "June AI meetup — the courtyard finally full, orange flowers and white arches carrying the social half of the night.",
  },
  {
    id: "comm-44",
    url: "/gallery/community/comm-june26-02.jpg",
    altText: "Hackathon winners holding a giant cheque with a cheering audience at AI Community Meetup June 2026",
    title: "Cheque and cheers",
    caption:
      "June AI meetup — giant cheque, front-row winners, and the whole room throwing hands up behind them.",
  },
  {
    id: "comm-45",
    url: "/gallery/community/comm-july26-01.jpg",
    altText: "Small group sitting by the beach under tree branches at AI Community Meetup Vancouver July 2026",
    title: "Waterfront pause",
    caption:
      "July Vancouver AI — shoreline hang between conversations, the beach still visible beyond the branches.",
  },
  {
    id: "comm-46",
    url: "/gallery/community/comm-july26-02.jpg",
    altText: "Laughing speaker in a patterned shirt under red curtain light at AI Community Meetup Vancouver July 2026",
    title: "Curtain laugh",
    caption:
      "July Vancouver AI — tropical print, half-laugh, red curtain; the kind of speaker frame that feels easy instead of staged.",
  },
  {
    id: "comm-may26-01",
    url: "/gallery/community/may26-01.jpg",
    altText: "Bearded host grilling skewers outdoors at an AI community meetup",
    title: "At the grill",
    caption: "Live-fire hospitality before the talks - community nights start with the people feeding the room.",
  },
  {
    id: "comm-may26-02",
    url: "/gallery/community/may26-02.jpg",
    altText: "Portrait of a woman against a softly lit AI event backdrop",
    title: "AI glow",
    caption: "Quiet portrait against the stage glow - community portraiture, not just coverage.",
  },
  {
    id: "comm-may26-03",
    url: "/gallery/community/may26-03.jpg",
    altText: "Two attendees posing together outdoors at an AI community gathering",
    title: "Shoulder to shoulder",
    caption: "Two attendees held clean in afternoon light - meetup record as relationship, not crowd.",
  },
  {
    id: "comm-may26-04",
    url: "/gallery/community/may26-04.jpg",
    altText: "Speaker on stage in front of a projection screen and large AI letters",
    title: "The keynote wall",
    caption: "Speaker framed by the big screen and the room's AI letters - thought leadership with atmosphere.",
  },
  {
    id: "comm-may26-05",
    url: "/gallery/community/may26-05.jpg",
    altText: "Recognition moment on stage with colourful projected background",
    title: "Stage recognition",
    caption: "On-stage recognition under full-colour projection - the room seeing one of its own.",
  },
  {
    id: "comm-may26-06",
    url: "/gallery/community/may26-06.jpg",
    altText: "Speaker in a cap gesturing across a projected wall during an AI meetup",
    title: "Point to the wall",
    caption: "Open-mic energy with the whole wall behind him - the meetup as participatory room, not lecture hall.",
  },
  {
    id: "comm-bcai-june26-01",
    url: "/gallery/community/bcai-june26-01.jpg",
    altText: "Science World exterior establishing shot before a BC + AI event",
    title: "Science World arrival",
    caption: "Community night announced before the doors open - the venue itself becomes part of the record.",
  },
  {
    id: "comm-bcai-june26-02",
    url: "/gallery/community/bcai-june26-02.jpg",
    altText: "Close-up of an Ethọ́s Lab badge held in a hand at a BC + AI event",
    title: "Ethọ́s badge",
    caption: "Ethọ́s Lab pass in hand - a partnership detail that roots the evening in the broader community.",
  },
  {
    id: "comm-bcai-june26-03",
    url: "/gallery/community/bcai-june26-03.jpg",
    altText: "Crowd clustered in a courtyard during a BC + AI gathering",
    title: "Courtyard clusters",
    caption: "The outside room doing the work - conversations and small groups before the programme.",
  },
  {
    id: "comm-bcai-june26-04",
    url: "/gallery/community/bcai-june26-04.jpg",
    altText: "Portrait of a woman standing among yellow flowers at a community event",
    title: "Yellow flowers",
    caption: "Portrait in the flowers - one clear face from a larger community evening.",
  },
  {
    id: "comm-bcai-june26-05",
    url: "/gallery/community/bcai-june26-05.jpg",
    altText: "Performers with drums on stage at a BC + AI event",
    title: "Drum line",
    caption: "Cultural performance on the BC + AI stage - rhythm, costume, and projected light in one frame.",
  },
  {
    id: "comm-bcai-june26-06",
    url: "/gallery/community/bcai-june26-06.jpg",
    altText: "Speaker at a microphone in front of a BC + AI event screen",
    title: "Minister at the mic",
    caption: "Public-facing leadership framed clean against the BC + AI screen - community work with civic weight.",
  },
  {
    id: "comm-film-june26-01",
    url: "/gallery/community/filmclub-june26-01.jpg",
    altText: "Presenter opening an AI Film Club talk in front of a slide reading It's not personal",
    title: "It's not personal",
    caption: "Film Club opener with the slide already doing narrative work before the room settles.",
  },
  {
    id: "comm-film-june26-02",
    url: "/gallery/community/filmclub-june26-02.jpg",
    altText: "Portrait of a smiling woman by a bright window at Film Club",
    title: "Window laugh",
    caption: "Bright portrait by the window - one finished face from the Film Club room.",
  },
  {
    id: "comm-film-june26-03",
    url: "/gallery/community/filmclub-june26-03.jpg",
    altText: "Audience facing a BC + AI Film Club banner and stage",
    title: "BC + AI Film Club",
    caption: "Audience, banner, and stage all visible - the programme held as a room, not just a talk.",
  },
  {
    id: "comm-film-june26-04",
    url: "/gallery/community/filmclub-june26-04.jpg",
    altText: "Speaker in a patterned yellow shirt holding a microphone during Film Club",
    title: "Pattern shirt keynote",
    caption: "Close speaker frame with the blackboard quote behind him - lively analysis, not static lecture.",
  },
  {
    id: "comm-film-june26-05",
    url: "/gallery/community/filmclub-june26-05.jpg",
    altText: "Projected quote slide dominating the wall during an AI Film Club talk",
    title: "The quote wall",
    caption: "Projected quote filling the frame - film language turned into a photographed object.",
  },
  {
    id: "comm-film-june26-06",
    url: "/gallery/community/filmclub-june26-06.jpg",
    altText: "Film Club group standing together in front of a colourful mural",
    title: "Front of the mural",
    caption: "Panel and community group held together against the mural - Film Club as gathering, not just presentation.",
  },
];

export const communityPrinciples = [
  {
    label: "The stage",
    body: "Mic, gesture, purple practical — community nights photographed like performance, not snapshots.",
  },
  {
    label: "The courtyard",
    body: "Leaves, arches, networking clusters. The outdoor room is part of the story.",
  },
  {
    label: "The rate",
    body: "Same craft at community price — twenty minutes, ten frames, real coaching for members.",
  },
] as const;

/** Home community peek. */
export const homeCommunityStrip = [
  { src: "/gallery/community/meetup-06.jpg", alt: "Two guests in maximalist fashion at a Vancouver AI night" },
  { src: "/gallery/community/comm-oct-01.jpg", alt: "Autumn courtyard networking at a BC AI meetup" },
  { src: "/gallery/community/meetup-07.jpg", alt: "Performer with feather headdress on a community stage" },
  { src: "/gallery/community/comm-cm-01.jpg", alt: "Tie-dye VAN-AI shirt and teal glasses in a Creative Mornings crowd" },
  { src: "/gallery/community/meetup-04.jpg", alt: "Smiling speaker at Surrey AI Community Meetup" },
  { src: "/gallery/community/comm-nov-01.jpg", alt: "Audience member asking a question into a microphone at a November AI meetup" },
] as const;

/**
 * Luxury & beauty best-of — Mayor's Charity Ball (civic gala), Vancouver Club,
 * Porsche, Sikh Awards, WCW, Giulia, Lamborghini, Tipalti, website harvest.
 * Christmas/holiday path seeded by Tipalti/KTL + website holiday plates.
 */
export const luxuryGalleryItems: LightboxItem[] = [
  {
    id: "lux-mcb1",
    url: "/gallery/luxury/mcb-01.jpg",
    altText: "Red table setting leading to Mayor's Charity Ball stage screen",
    title: "Mayor's Charity Ball",
    caption:
      "Delta Firefighters Mayor's Charity Ball 2025 — gold chargers, red roses, MCB on the wall. Civic black-tie as product — gold chargers, red roses, MCB on the wall.",
  },
  {
    id: "lux-mcb2",
    url: "/gallery/luxury/mcb-02.jpg",
    altText: "Full ballroom with Table 15 set for Mayor's Charity Ball",
    title: "The full house",
    caption: "Table 15 before the room fills — MCB chair backs, REALCO stage, red drapes.",
  },
  {
    id: "lux-mcb3",
    url: "/gallery/luxury/mcb-04.jpg",
    altText: "Man in tuxedo and red bow tie under red gala lighting",
    title: "Civic presence",
    caption: "Black tie in a red room — mayor-level face of the night, held close.",
  },
  {
    id: "lux-mcb4",
    url: "/gallery/luxury/mcb-05.jpg",
    altText: "Speaker smiling at the Mayor's Charity Ball podium",
    title: "At the podium",
    caption: "Joy at the mic — MCB podium, gold orchids, high-profile stage craft.",
  },
  {
    id: "lux-mcb5",
    url: "/gallery/luxury/mcb-06.jpg",
    altText: "Delta Fire honour guard marching through the banquet",
    title: "Honour guard",
    caption: "Ceremony through the banquet — Delta Fire honour guard in a red room.",
  },
  {
    id: "lux-mcb6",
    url: "/gallery/luxury/mcb-08.jpg",
    altText: "Ghost chair with MCB Mayor's Charity Ball branding",
    title: "MCB on the chair",
    caption: "Branded chair against rose-and-candle bokeh — event identity as still life.",
  },
  {
    id: "lux1",
    url: "/gallery/luxury/porsche-07.jpg",
    altText: "Model in metallic red gown and feather headpiece at a Porsche evening",
    title: "Red presence",
    caption: "Porsche Centre night — metallic red, ostrich feathers, the room held as fashion.",
  },
  {
    id: "lux2",
    url: "/gallery/luxury/porsche-01.jpg",
    altText: "Woman in botanical white gown at a red Fazioli grand piano",
    title: "Fazioli red",
    caption: "Custom red Fazioli with Florence mural under the lid — beauty as product and person.",
  },
  {
    id: "lux3",
    url: "/gallery/luxury/uri-01.jpg",
    altText: "Couple in Renaissance costume with artist palette at Vancouver Club",
    title: "Vancouver Club night",
    caption: "Uri’s Birthday Celebration — velvet, pearls, brocade at the Vancouver Club.",
  },
  {
    id: "lux4",
    url: "/gallery/luxury/uri-02.jpg",
    altText: "Woman in purple velvet Renaissance gown with champagne flute",
    title: "Purple velvet",
    caption: "Costume texture and champagne — private celebration, not a crowd plate.",
  },
  {
    id: "lux5",
    url: "/gallery/luxury/uri-03.jpg",
    altText: "Man in navy damask blazer and bow tie in profile at a gala",
    title: "Damask profile",
    caption: "Navy brocade, wing collar, candle bokeh — the client look she already holds.",
  },
  {
    id: "lux6",
    url: "/gallery/luxury/porsche-02.jpg",
    altText: "Penfolds and Amarone bottles with red florals against velvet curtains",
    title: "Cellar still life",
    caption: "Penfolds Bin 150 and Amarone against oxblood velvet — table craft that sells the evening.",
  },
  {
    id: "lux7",
    url: "/gallery/luxury/porsche-06.jpg",
    altText: "Bartender preparing red cocktails at a Porsche Centre Vancouver bar",
    title: "Porsche bar",
    caption: "Porsche Centre Vancouver mixology — glass bar, red silk, silver tools.",
  },
  {
    id: "lux8",
    url: "/gallery/luxury/porsche-08.jpg",
    altText: "Two hands toasting red cocktails with 911 branding in the background",
    title: "911 toast",
    caption: "Coupe glasses, diamond band, mint leaf — brand night as intimate gesture.",
  },
  {
    id: "lux9",
    url: "/gallery/luxury/porsche-05.jpg",
    altText: "Close-up of Porsche GTS seat with red embroidery and leather",
    title: "GTS seat",
    caption: "Alcantara, red GTS stitch, crushed black shadow — automotive beauty as texture.",
  },
  {
    id: "lux10",
    url: "/gallery/luxury/porsche-03.jpg",
    altText: "White Porsche gift bags with crest and red roses at a brand event",
    title: "The One and Always",
    caption: "Porsche gift wall and red roses — brand experience held before the guests arrive.",
  },
  {
    id: "lux11",
    url: "/gallery/luxury/porsche-04.jpg",
    altText: "Four models in white dresses with red pom-poms between Porsche cars",
    title: "911 floor",
    caption: "Showroom energy — white dresses, red poms, headlights on.",
  },
  {
    id: "lux12",
    url: "/gallery/events/lambo-01.jpg",
    altText: "Electric blue Lamborghini Revuelto in showroom light",
    title: "Revuelto alone",
    caption: "Lamborghini product hero — lines and bronze wheels without the crowd.",
  },
  {
    id: "lux13",
    url: "/gallery/events/lambo-03.jpg",
    altText: "Model with gold chrome and Lamborghini branding",
    title: "Gold chrome",
    caption: "Brand night as fashion still — gold, twin bulls, eye contact.",
  },
  {
    id: "lux14",
    url: "/gallery/events/tipalti-02.jpg",
    altText: "Seven guests in evening wear on a gold velvet settee",
    title: "Holiday settee",
    caption: "Tipalti Holiday Party 2025 — glam held as a composed room. Christmas path starts here.",
  },
  {
    id: "lux15",
    url: "/gallery/events/tipalti-01.jpg",
    altText: "Couple on mustard velvet settee at Tipalti Holiday Party",
    title: "Gala romance",
    caption: "Red gown, mustard velvet — holiday beauty Michelle already delivers.",
  },
  {
    id: "lux16",
    url: "/gallery/events/hangar-01.jpg",
    altText: "Man in tuxedo with seaplane backdrop",
    title: "Private hangar",
    caption: "Tuxedo, Kodiak, Canadian flag — occasion without the crowd shot.",
  },
  {
    id: "lux17",
    url: "/gallery/events/proposal-03.jpg",
    altText: "Couple through candle bokeh after proposal",
    title: "Candle depth",
    caption: "Oxblood dress, rose bouquet, taper bokeh — private occasion held clean.",
  },
  {
    id: "lux18",
    url: "/gallery/events/proposal-02.jpg",
    altText: "Marquise diamond ring in rose petals",
    title: "Ring macro",
    caption: "Privacy-safe detail hero — the object without faces.",
  },
  {
    id: "lux19",
    url: "/gallery/luxury/uri-04.jpg",
    altText: "Expressionist paintings on easels with gold drapes at Vancouver Club",
    title: "Art in the room",
    caption: "Uri’s Birthday — easels, gold drapes, patterned carpet. The venue as subject.",
  },
  {
    id: "lux20",
    url: "/gallery/luxury/uri-07.jpg",
    altText: "Abstract expressionist painting on easel at a luxury celebration",
    title: "Impasto face",
    caption: "Art detail from the Vancouver Club night — colour and texture for the beauty edit.",
  },
  {
    id: "lux21",
    url: "/gallery/luxury/uri-05.jpg",
    altText: "Bearded guest in turquoise glasses and pinstripe vest",
    title: "Character light",
    caption: "Styled guest portrait — tattoos, turquoise frames, warm venue bokeh.",
  },
  {
    id: "lux22",
    url: "/gallery/events/lambo-06.jpg",
    altText: "Suited VIP against matte blue Lamborghini",
    title: "Ownership energy",
    caption: "People and product fused — the host look against matte blue.",
  },
  {
    id: "lux23",
    url: "/gallery/events/ktl-01.jpg",
    altText: "Mini cupcakes with sage frosting and gold accents",
    title: "Holiday detail",
    caption: "KTL Holiday Party — table craft that sells December without a crowd shot.",
  },
  {
    id: "lux24",
    url: "/gallery/events/proposal-04.jpg",
    altText: "Joyful laughter with rose bouquet after yes",
    title: "Peak joy",
    caption: "Post-yes laugh and ring flash — celebration held clean.",
  },
  {
    id: "lux25",
    url: "/gallery/luxury/giulia-01.jpg",
    altText: "Host lifting fresh handmade pasta with a bright smile",
    title: "Handmade pasta",
    caption: "Giulia pasta night — flour, brick, striped apron, the craft held high.",
  },
  {
    id: "lux26",
    url: "/gallery/luxury/giulia-02.jpg",
    altText: "Two women at a pasta board with Aperol Spritz glasses",
    title: "Aperol at the board",
    caption: "Pasta-making + Aperol Spritz — workshop as celebration.",
  },
  {
    id: "lux27",
    url: "/gallery/luxury/giulia-03.jpg",
    altText: "Fresh pasta mounds and steel pots under arched windows",
    title: "Arched light",
    caption: "Culinary prep as beauty — daylight, stainless, fresh cut pasta.",
  },
  {
    id: "lux28",
    url: "/gallery/luxury/giulia-04.jpg",
    altText: "Saint-Louis Brut bottles chilling in crushed ice",
    title: "Saint-Louis chill",
    caption: "Hospitality detail — French brut, crushed ice, eucalyptus.",
  },
  {
    id: "lux29",
    url: "/gallery/luxury/wcw-01.jpg",
    altText: "Emerald and ivory bridal gowns on mannequins with Fine Decor neon",
    title: "Fine Decor gowns",
    caption: "WCW Show '25 — sequin emerald and ivory ball gowns under floral towers.",
  },
  {
    id: "lux30",
    url: "/gallery/luxury/wcw-04.jpg",
    altText: "Oxblood paisley blazer and tailored suits on mannequins",
    title: "Oxblood tailoring",
    caption: "Menswear texture from the wedding show — paisley oxblood against navy.",
  },
  {
    id: "lux31",
    url: "/gallery/luxury/wcw-03.jpg",
    altText: "Key Events wedding booth with blush florals and champagne velvet",
    title: "Key Events vignette",
    caption: "Champagne velvet, blush roses, neon — wedding design as still life.",
  },
  {
    id: "lux32",
    url: "/gallery/luxury/wcw-02.jpg",
    altText: "Woman in toile dress under a rose and hydrangea floral arch",
    title: "Under the florals",
    caption: "Expo portrait with perfume display — beauty held without the crowd plate.",
  },
  {
    id: "lux33",
    url: "/gallery/luxury/sikh-01.jpg",
    altText: "Empty Sikh Awards ballroom under crystal chandelier canopy",
    title: "Before the house",
    caption: "Sikh Awards 2025 — crystal canopy, yellow roses, empty tables. The room before the night.",
  },
  {
    id: "lux34",
    url: "/gallery/luxury/sikh-02.jpg",
    altText: "The Sikh Awards stage sign under beaded chandeliers",
    title: "The Sikh Awards",
    caption: "Stage brand mark under beaded chandeliers — prestige held clean.",
  },
  {
    id: "lux35",
    url: "/gallery/luxury/sikh-03.jpg",
    altText: "Three guests in black-and-gold formalwear at the Sikh Awards",
    title: "Red carpet fashion",
    caption: "Black-and-gold formalwear with designer bags — beauty at a prestige gala.",
  },
  {
    id: "lux36",
    url: "/gallery/luxury/sikh-04.jpg",
    altText: "Three women in purple silk and burgundy velvet formalwear",
    title: "Purple and burgundy",
    caption: "Fusion formalwear — purple silk, burgundy velvet, gold embroidery.",
  },
  {
    id: "lux-web1",
    url: "/gallery/luxury/web-01.jpg",
    altText: "Couple laughing at a candlelit grand piano with white florals",
    title: "Piano minis",
    caption: "From Michelle's public site — candlelight, white roses, joy at the piano.",
  },
  {
    id: "lux-web2",
    url: "/gallery/luxury/web-02.jpg",
    altText: "Black-and-white couple kissing under umbrella in backlit rain",
    title: "Rain and umbrella",
    caption: "Holiday-session craft — backlit rain, B&W romance. Christmas path seed.",
  },
  {
    id: "lux-web3",
    url: "/gallery/luxury/web-03.jpg",
    altText: "Couple laughing in a snowy forest with a rose bouquet",
    title: "Valentine snow",
    caption: "Seasonal beauty from the storefront — snow, fur, roses.",
  },
  {
    id: "lux-web4",
    url: "/gallery/luxury/web-05.jpg",
    altText: "Maternity couple in mint satin gown at golden hour",
    title: "Maternity in the woods",
    caption: "Editorial family beauty — mint satin, golden-hour kiss.",
  },
  {
    id: "lux-web5",
    url: "/gallery/luxury/web-04.jpg",
    altText: "Bride and groom in black-and-white by a vintage outdoor sofa",
    title: "Wedding sneak peek",
    caption: "Timeless B&W from the public site — the wedding plate she already chose.",
  },
  {
    id: "lux-somefavs-01",
    url: "/gallery/luxury/somefavs-01.jpg",
    altText: "Woman in a dramatic red gown on a chandelier-lit staircase",
    title: "Red stair",
    caption: "Crimson gown under chandelier light - the room dressed as much as the subject.",
  },
  {
    id: "lux-somefavs-02",
    url: "/gallery/luxury/somefavs-02.jpg",
    altText: "Couple standing beside a red helicopter on a snowy alpine field",
    title: "Alpine arrival",
    caption: "Red helicopter on the snowfield - arrival staged as luxury theatre.",
  },
  {
    id: "lux-somefavs-03",
    url: "/gallery/luxury/somefavs-03.jpg",
    altText: "Couple posing beside a white luxury car at night",
    title: "White-car finish",
    caption: "Evening couple portrait by the white car - gala polish without the stiff pose.",
  },
  {
    id: "lux-somefavs-04",
    url: "/gallery/luxury/somefavs-04.jpg",
    altText: "Woman smiling in evening wear against warm golden bokeh lights",
    title: "Gold curtain",
    caption: "Beauty portrait against warm string-light bokeh - the night held as glamour.",
  },
  {
    id: "lux-somefavs-05",
    url: "/gallery/luxury/somefavs-05.jpg",
    altText: "Elegant portrait of a woman in a blue-lit gala room",
    title: "Blue-room finish",
    caption: "Cool-toned portrait in the blue room - Michelle's luxury edit stays human, not just decor.",
  },
  {
    id: "lux-somefavs-06",
    url: "/gallery/luxury/somefavs-06.jpg",
    altText: "Couple in red ceremonial dress embracing in a soft portrait",
    title: "Ceremony hold",
    caption: "Red ceremony portrait held close - tenderness inside formal dress.",
  },
];

export const luxuryPrinciples = [
  {
    label: "The client look",
    body: "Mayor's Charity Ball, Vancouver Club, Porsche Centre, Sikh Awards — civic and private rooms photographed for the people who paid for them.",
  },
  {
    label: "Beauty as texture",
    body: "Velvet, brocade, Alcantara, coupe glass, red florals. Luxury reads in materials before it reads in logos.",
  },
  {
    label: "Holiday rooms",
    body: "Tipalti and KTL already hold December in this edit — candle, velvet, and the quiet before the toast.",
  },
] as const;

/** Home luxury peek — strongest brand/beauty plates. */
export const homeLuxuryStrip = [
  {
    src: "/gallery/luxury/mcb-01.jpg",
    alt: "Mayor's Charity Ball table leading to the MCB stage screen",
  },
  {
    src: "/gallery/luxury/mcb-04.jpg",
    alt: "Civic VIP in tuxedo and red bow tie at Mayor's Charity Ball",
  },
  {
    src: "/gallery/luxury/porsche-01.jpg",
    alt: "Woman in floral gown at a red Fazioli piano at a Porsche evening",
  },
  {
    src: "/gallery/luxury/sikh-01.jpg",
    alt: "Sikh Awards ballroom under crystal chandeliers",
  },
  {
    src: "/gallery/luxury/web-01.jpg",
    alt: "Couple laughing at a candlelit piano",
  },
  {
    src: "/gallery/luxury/uri-04.jpg",
    alt: "Expressionist paintings on easels at a Vancouver Club celebration",
  },
] as const;

/**
 * Christmas / holiday chapter — limited to verified December-adjacent plates already
 * curated on site. No invented family-session gallery until those assets exist.
 */
export const christmasGalleryItems: LightboxItem[] = [
  {
    id: "christmas-1",
    url: "/gallery/events/tipalti-02.jpg",
    altText: "Seven guests in evening wear on a gold velvet settee",
    title: "Holiday settee",
    caption:
      "Tipalti Holiday Party 2025 — a composed room, velvet, and guests who already trust the camera.",
  },
  {
    id: "christmas-2",
    url: "/gallery/events/tipalti-01.jpg",
    altText: "Couple on mustard velvet settee at Tipalti Holiday Party",
    title: "Mustard velvet",
    caption:
      "Tipalti Holiday Party 2025 — couple portrait craft in a December room Michelle already covers.",
  },
  {
    id: "christmas-3",
    url: "/gallery/luxury/web-01.jpg",
    altText: "Couple laughing at a candlelit grand piano with white florals",
    title: "Piano minis",
    caption:
      "From Michelle's public site — candlelight, white florals, and a holiday frame built around joy.",
  },
  {
    id: "christmas-4",
    url: "/gallery/luxury/web-02.jpg",
    altText: "Black-and-white couple kissing under umbrella in backlit rain",
    title: "Rain and umbrella",
    caption:
      "From Michelle's public site — a black-and-white holiday plate where weather becomes the whole atmosphere.",
  },
  {
    id: "christmas-5",
    url: "/gallery/events/ktl-01.jpg",
    altText: "Mini cupcakes with sage frosting and gold accents",
    title: "Cupcakes and gold",
    caption:
      "KTL Holiday Party — sage frosting, gold detail, and the kind of December still life that sells the room.",
  },
];

export const christmasPrinciples = [
  {
    label: "The room",
    body: "This chapter holds what is already real: holiday rooms, candlelight, velvet, and public-site seasonal plates.",
  },
  {
    label: "The weather",
    body: "Rain, window light, and winter interiors matter as much as faces. December atmosphere is part of the portrait.",
  },
  {
    label: "The window",
    body: "The booking pattern is the product: strong November dates go first, and the journal guide says exactly how that fill works.",
  },
] as const;

export const homeChristmasStrip = [
  {
    src: "/gallery/events/tipalti-02.jpg",
    alt: "Seven guests in evening wear on a gold velvet settee at Tipalti Holiday Party 2025",
  },
  {
    src: "/gallery/luxury/web-01.jpg",
    alt: "Couple laughing at a candlelit piano in a holiday setting",
  },
  {
    src: "/gallery/luxury/web-02.jpg",
    alt: "Black-and-white holiday umbrella portrait in backlit rain",
  },
  {
    src: "/gallery/events/ktl-01.jpg",
    alt: "Mini cupcakes with sage frosting and gold accents from a holiday party",
  },
] as const;

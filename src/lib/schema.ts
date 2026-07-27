import { siteCopy } from "@/lib/portfolio-data";

const SITE_URL = siteCopy.siteUrl;

type Schema = Record<string, unknown>;

export function schemaScript(data: Schema | Schema[]) {
  return JSON.stringify(data);
}

export const localBusiness: Schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: siteCopy.fullBrand,
  alternateName: siteCopy.brand,
  description: siteCopy.tagline,
  url: SITE_URL,
  email: siteCopy.email,
  image: `${SITE_URL}/gallery/opera/03.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Richmond",
    addressRegion: "BC",
    addressCountry: "CA",
    streetAddress: "Nook Coworking",
  },
  areaServed: [
    { "@type": "City", name: "Vancouver" },
    { "@type": "City", name: "Surrey" },
    { "@type": "City", name: "Richmond" },
    { "@type": "AdministrativeArea", name: "Metro Vancouver" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/about#michelle`,
    name: siteCopy.photographer,
    jobTitle: "Photographer",
    sameAs: [siteCopy.instagram],
  },
  sameAs: [siteCopy.instagram, siteCopy.pixiesetHome],
  priceRange: "CAD$$–$$$$",
  slogan: siteCopy.headline,
};

export const michellePerson: Schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#michelle`,
  name: siteCopy.photographer,
  jobTitle: "Photographer",
  description: siteCopy.tagline,
  url: `${SITE_URL}/about`,
  sameAs: [siteCopy.instagram, siteCopy.pixiesetHome],
  worksFor: { "@id": `${SITE_URL}/#business` },
  knowsAbout: [
    "Portrait photography",
    "Event photography",
    "Performance photography",
    "Personal branding photography",
    "AI-augmented post-production",
  ],
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

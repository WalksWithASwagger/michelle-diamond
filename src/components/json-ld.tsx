type Schema = Record<string, unknown>;

/** Inline JSON-LD for crawlers. */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

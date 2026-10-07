#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const configuredBase = (process.env.MICHELLE_DIAMOND_PUBLIC_BASE ?? "")
  .trim()
  .replace(/^\/+|\/+$/g, "");
const publicBase = configuredBase ? `/${configuredBase}/` : "/";
const galleryPrefix = `${publicBase}gallery/`;
const pages = (await readdir(publicDir, { recursive: true })).filter((file) =>
  file.endsWith(".html"),
);
assert(pages.includes("about/index.html"), "Prerender public pages before checking gallery assets");
let checked = 0;
const failures = [];

for (const page of pages) {
  const html = await readFile(path.join(publicDir, page), "utf8");
  const images = html.matchAll(/<(?:img|meta)\b[^>]*?\b(?:src|content)="([^"]*\/gallery\/[^"]+)"/g);
  for (const [, image] of images) {
    const url = new URL(image, "http://localhost");
    if (url.origin !== "http://localhost") continue;
    checked++;
    try {
      assert(url.pathname.startsWith(galleryPrefix), `${page}: ${image} escapes ${publicBase}`);
      const asset = path.join(publicDir, url.pathname.slice(publicBase.length));
      assert((await stat(asset)).isFile(), `${page}: missing gallery file ${image}`);
    } catch (error) {
      failures.push(error.message);
    }
  }
}

assert(checked > 0, "Expected rendered gallery images");
assert.equal(failures.length, 0, failures.join("\n"));
console.log(
  `Verified ${checked} gallery references across ${pages.length} rendered pages at ${publicBase}`,
);

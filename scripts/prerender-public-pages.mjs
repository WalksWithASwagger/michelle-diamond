#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PUBLIC_PAGES = [
  "/",
  "/about",
  "/book",
  "/clients",
  "/commission",
  "/community",
  "/contact",
  "/events",
  "/food",
  "/journal",
  "/luxury",
  "/opera",
  "/opera/leave-behind",
  "/portraits",
  "/services",
  "/services/community-rate",
  "/session-prep",
  "/the-experience",
];

function normalizePublicBase(value) {
  if (!value || value.trim() === "" || value.trim() === "/") {
    return "/";
  }

  return `/${value.trim().replace(/^\/+|\/+$/g, "")}/`;
}

function normalizeRoutePath(value) {
  const [pathname] = value.split(/[?#]/, 1);
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/g, "");
}

function routeRequestUrl(routePath, publicBase) {
  if (routePath === "/") {
    return new URL(publicBase, "http://localhost");
  }

  return new URL(routePath.replace(/^\/+/, ""), new URL(publicBase, "http://localhost"));
}

function outputFilePath(routePath, publicDir) {
  if (routePath === "/") {
    return path.join(publicDir, "index.html");
  }

  return path.join(publicDir, routePath.replace(/^\/+/, ""), "index.html");
}

async function fetchWithRedirects(serverBuild, requestUrl, remaining = 5) {
  const response = await serverBuild.fetch(new Request(requestUrl));

  if (
    response.status >= 300 &&
    response.status < 400 &&
    remaining > 0
  ) {
    const location = response.headers.get("location");
    if (location) {
      return fetchWithRedirects(serverBuild, new URL(location, requestUrl), remaining - 1);
    }
  }

  return response;
}

async function main() {
  const publicBase = normalizePublicBase(process.env.MICHELLE_DIAMOND_PUBLIC_BASE);
  const appRoot = process.cwd();
  const publicDir = path.join(appRoot, ".output", "public");
  const serverBuildPath = path.join(
    appRoot,
    "node_modules",
    ".nitro",
    "vite",
    "services",
    "ssr",
    "index.js",
  );
  const serverBuildModule = await import(pathToFileURL(serverBuildPath).toString());
  const serverBuild = serverBuildModule.default;

  if (!serverBuild || typeof serverBuild.fetch !== "function") {
    throw new Error(`SSR build at ${serverBuildPath} does not export a fetch handler`);
  }

  const queue = [...PUBLIC_PAGES];
  const seen = new Set();
  let homeHtml = null;

  while (queue.length > 0) {
    const routePath = normalizeRoutePath(queue.shift());
    if (seen.has(routePath)) {
      continue;
    }
    seen.add(routePath);

    const requestUrl = routeRequestUrl(routePath, publicBase).toString();
    const response = await fetchWithRedirects(serverBuild, requestUrl);
    if (!response.ok) {
      throw new Error(`Failed to prerender ${routePath}: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) {
      throw new Error(`Expected HTML for ${routePath}, got ${contentType || "unknown content type"}`);
    }

    const html = await response.text();
    const htmlPath = outputFilePath(routePath, publicDir);
    await mkdir(path.dirname(htmlPath), { recursive: true });
    await writeFile(htmlPath, html, "utf8");
    console.log(`prerendered ${routePath} -> ${path.relative(appRoot, htmlPath)}`);

    if (routePath === "/") {
      homeHtml = html;
    }

  }

  if (homeHtml) {
    await writeFile(path.join(publicDir, "404.html"), homeHtml, "utf8");
    console.log("wrote .output/public/404.html");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

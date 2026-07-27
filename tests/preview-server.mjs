import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

import worker from "../.output/server/index.mjs";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 4173);
const publicDir = resolve(".output/public");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePublicPath(pathname) {
  const candidate = resolve(publicDir, `.${decodeURIComponent(pathname)}`);
  return candidate.startsWith(publicDir) ? candidate : null;
}

async function serveAsset(request) {
  const url = new URL(request.url);
  const filePath = resolvePublicPath(url.pathname);

  if (!filePath) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(filePath);
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

const env = { ASSETS: { fetch: serveAsset } };
const context = {
  passThroughOnException() {},
  waitUntil() {},
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? `${host}:${port}`}`);
    /** @type {RequestInit & { duplex?: "half" }} */
    const init = {
      method: req.method,
      headers: req.headers,
    };

    if (req.method && !["GET", "HEAD"].includes(req.method)) {
      init.body = Readable.toWeb(req);
      init.duplex = "half";
    }

    const response = await worker.fetch(new Request(url, init), env, context);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (!response.body) {
      res.end();
      return;
    }

    await pipeline(Readable.fromWeb(response.body), res);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end(error instanceof Error ? (error.stack ?? error.message) : String(error));
  }
});

server.listen(port, host, () => {
  console.log(`Smoke preview server listening on http://${host}:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

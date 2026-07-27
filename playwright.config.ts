import { existsSync } from "node:fs";

import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";
const executablePath = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  "/usr/local/bin/google-chrome",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((candidate): candidate is string => Boolean(candidate) && existsSync(candidate));

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  reporter: [["list"]],
  use: {
    baseURL,
    headless: true,
    launchOptions: {
      ...(executablePath ? { executablePath } : {}),
      ...(process.platform === "linux" ? { args: ["--no-sandbox"] } : {}),
    },
  },
  webServer: {
    command: "node tests/preview-server.mjs",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

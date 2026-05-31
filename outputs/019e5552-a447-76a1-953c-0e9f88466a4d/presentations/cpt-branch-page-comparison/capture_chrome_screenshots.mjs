import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const workspace =
  "/Users/aakashsingh/code/Cpt/outputs/019e5552-a447-76a1-953c-0e9f88466a4d/presentations/cpt-branch-page-comparison";
const screenshotsDir = path.join(workspace, "screenshots");

const routes = [
  { path: "/", label: "Home", slug: "home" },
  { path: "/about", label: "About", slug: "about" },
  { path: "/about/company", label: "About Company", slug: "about-company" },
  {
    path: "/about/credentials-safety",
    label: "Credentials Safety",
    slug: "about-credentials-safety",
  },
  { path: "/about/team", label: "About Team", slug: "about-team" },
  { path: "/company", label: "Company", slug: "company" },
  { path: "/contact", label: "Contact", slug: "contact" },
  { path: "/industries", label: "Industries", slug: "industries" },
  {
    path: "/industries/commercial-institutional",
    label: "Commercial Institutional",
    slug: "industries-commercial-institutional",
  },
  {
    path: "/industries/hospitality",
    label: "Hospitality",
    slug: "industries-hospitality",
  },
  {
    path: "/industries/long-term-care-healthcare",
    label: "Long Term Care Healthcare",
    slug: "industries-long-term-care-healthcare",
  },
  {
    path: "/industries/multi-residential",
    label: "Multi Residential",
    slug: "industries-multi-residential",
  },
  { path: "/landing", label: "Landing", slug: "landing" },
  { path: "/portfolio", label: "Portfolio", slug: "portfolio" },
  { path: "/services", label: "Services", slug: "services" },
  { path: "/subcontractor", label: "Subcontractor", slug: "subcontractor" },
  { path: "/test", label: "Test", slug: "test" },
];

const variants = [
  {
    key: "cpt-new-design",
    title: "codex/cpt-new-design",
    base: "http://localhost:3002",
  },
  {
    key: "cpt-redesign-copy",
    title: "codex/cpt-redesign-copy",
    base: "http://localhost:3001",
  },
];

function jpegDimensions(bytes) {
  let offset = 2;
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) break;
    const marker = bytes[offset + 1];
    const length = bytes.readUInt16BE(offset + 2);
    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);
    if (isStartOfFrame) {
      return {
        width: bytes.readUInt16BE(offset + 7),
        height: bytes.readUInt16BE(offset + 5),
      };
    }
    offset += 2 + length;
  }
  throw new Error("Expected a JPEG image with a start-of-frame marker.");
}

async function warmLazyMedia(page) {
  await page.evaluate(async () => {
    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
      img.loading = "eager";
    });
    const maxY = Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0,
    );
    const step = Math.max(600, Math.floor(window.innerHeight * 0.85));
    for (let y = 0; y <= maxY; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
}

async function main() {
  await fs.mkdir(screenshotsDir, { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
  });

  const records = [];
  for (const route of routes) {
    for (const variant of variants) {
      const url = variant.base + route.path;
      const file = path.join(
        screenshotsDir,
        `${route.slug}__${variant.key}.jpg`,
      );
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForLoadState("load", { timeout: 15000 }).catch(() => {});
      await page
        .waitForLoadState("networkidle", { timeout: 5000 })
        .catch(() => {});
      await warmLazyMedia(page);
      await page.waitForTimeout(1200);
      await page.screenshot({
        path: file,
        fullPage: true,
        type: "jpeg",
        quality: 90,
        animations: "disabled",
      });
      const bytes = await fs.readFile(file);
      records.push({
        route: route.path,
        label: route.label,
        slug: route.slug,
        variant: variant.key,
        variantTitle: variant.title,
        url,
        file,
        ...jpegDimensions(bytes),
        bytes: bytes.byteLength,
      });
      console.log(
        `${variant.key} ${route.path} ${records.at(-1).width}x${records.at(-1).height}`,
      );
    }
  }

  await browser.close();
  await fs.writeFile(
    path.join(screenshotsDir, "manifest.json"),
    `${JSON.stringify({ capturedAt: new Date().toISOString(), records }, null, 2)}\n`,
  );
  console.log(`Captured ${records.length} screenshots`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

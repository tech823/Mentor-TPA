const { default: lighthouse } = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const http = require("http");
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(__dirname, "build");
const PORT = 4500;

const MIME = {
  ".html": "text/html", ".js": "application/javascript",
  ".css": "text/css",   ".png": "image/png",
  ".ico": "image/x-icon", ".json": "application/json",
  ".map": "application/json", ".svg": "image/svg+xml",
  ".woff2": "font/woff2", ".woff": "font/woff",
};

// Gzip-compressed static server
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(BUILD_DIR, req.url.split("?")[0]);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(BUILD_DIR, "index.html");
      }
      const ext = path.extname(filePath);
      const acceptsGzip = (req.headers["accept-encoding"] || "").includes("gzip");
      const compressible = [".js", ".css", ".html", ".json", ".svg"].includes(ext);

      res.setHeader("Content-Type", MIME[ext] || "text/plain");
      res.setHeader("Cache-Control", ext === ".html" ? "no-cache" : "public,max-age=31536000,immutable");

      if (acceptsGzip && compressible) {
        res.setHeader("Content-Encoding", "gzip");
        fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
      } else {
        fs.createReadStream(filePath).pipe(res);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

const BASE = `http://localhost:${PORT}`;
const PAGES = [
  { name: "Home",             url: `${BASE}/` },
  { name: "About",            url: `${BASE}/about` },
  { name: "Solutions",        url: `${BASE}/solutions` },
  { name: "Self-Funded",      url: `${BASE}/solutions/self-funded` },
  { name: "Insurance",        url: `${BASE}/solutions/insurance` },
  { name: "Providers",        url: `${BASE}/solutions/providers` },
  { name: "Services",         url: `${BASE}/services` },
  { name: "Technology",       url: `${BASE}/technology` },
  { name: "Provider Network", url: `${BASE}/provider-network` },
  { name: "Hospital Panel",   url: `${BASE}/hospital-panel` },
  { name: "Book Demo",        url: `${BASE}/book-demo` },
  { name: "Request Proposal", url: `${BASE}/request-proposal` },
  { name: "Contact",          url: `${BASE}/contact` },
  { name: "Privacy",          url: `${BASE}/privacy` },
  { name: "Terms",            url: `${BASE}/terms` },
];

const PROFILE = path.join(__dirname, ".chrome-audit-profile");
if (!fs.existsSync(PROFILE)) fs.mkdirSync(PROFILE, { recursive: true });

function badge(val) {
  const n = Math.round((val || 0) * 100);
  const icon = n >= 90 ? "✅" : n >= 70 ? "⚠️ " : "❌";
  return `${icon} ${String(n).padStart(3)}%`;
}
function ms(val) { return val ? `${(val/1000).toFixed(1)}s` : "n/a"; }

(async () => {
  process.stdout.write("Starting gzip production server...");
  const server = await startServer();
  console.log(` ready on :${PORT}\n`);

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
    userDataDir: PROFILE,
  });

  console.log("═══════════════════════════════════════════════════════════════════════");
  console.log("  MENTOR TPA — FULL SITE AUDIT  (Production + Gzip)");
  console.log("═══════════════════════════════════════════════════════════════════════");
  console.log(`  ${"PAGE".padEnd(20)} PERF    FCP     LCP     TBT`);
  console.log("───────────────────────────────────────────────────────────────────────");

  const results = [];

  for (const page of PAGES) {
    process.stdout.write(`  Auditing ${page.name}...`);
    try {
      const { lhr } = await lighthouse(page.url, {
        port: chrome.port,
        onlyCategories: ["performance"],
        formFactor: "desktop",
        screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
        throttlingMethod: "provided",
        throttling: { rttMs: 0, throughputKbps: 0, cpuSlowdownMultiplier: 1 },
        logLevel: "silent",
      });
      const p   = lhr.categories.performance?.score;
      const fcp = lhr.audits["first-contentful-paint"]?.numericValue;
      const lcp = lhr.audits["largest-contentful-paint"]?.numericValue;
      const tbt = lhr.audits["total-blocking-time"]?.numericValue;
      const cls = lhr.audits["cumulative-layout-shift"]?.numericValue;
      results.push({ name: page.name, p, fcp, lcp, tbt, cls });
      process.stdout.write(`\r  ${page.name.padEnd(20)} ${badge(p)}  ${ms(fcp).padEnd(6)}  ${ms(lcp).padEnd(6)}  ${Math.round(tbt||0)}ms\n`);
    } catch (e) {
      process.stdout.write(`\r  ${page.name.padEnd(20)} ❌ ERROR: ${e.message.slice(0, 40)}\n`);
      results.push({ name: page.name, p: 0, fcp: 0, lcp: 0, tbt: 0, cls: 0 });
    }
  }

  console.log("───────────────────────────────────────────────────────────────────────");
  const avg = (k) => results.reduce((s, r) => s + (r[k] || 0), 0) / results.length;
  const pa = Math.round(avg("p") * 100);
  console.log(`  ${"AVERAGE".padEnd(20)} ${pa >= 90 ? "✅" : pa >= 70 ? "⚠️ " : "❌"} ${pa}%  ${ms(avg("fcp")).padEnd(6)}  ${ms(avg("lcp")).padEnd(6)}  ${Math.round(avg("tbt"))}ms`);
  console.log("═══════════════════════════════════════════════════════════════════════\n");

  // Diagnose bottlenecks
  console.log("🔍 Top issues by metric (avg):");
  console.log(`   FCP  ${ms(avg("fcp"))}  (target < 1.8s)`);
  console.log(`   LCP  ${ms(avg("lcp"))}  (target < 2.5s)`);
  console.log(`   TBT  ${Math.round(avg("tbt"))}ms  (target < 200ms)`);
  console.log(`   CLS  ${avg("cls").toFixed(3)}  (target < 0.1)\n`);

  try { chrome.kill(); } catch (_) {}
  server.close();
})();

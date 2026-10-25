import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';

// Audit built output on a temporary loopback port; never contact the public site.
const reservation = createServer();
await new Promise((resolve) => reservation.listen(0, '127.0.0.1', resolve));
const port = reservation.address().port;
await new Promise((resolve) => reservation.close(resolve));
const origin = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    'node_modules/astro/bin/astro.mjs',
    'preview',
    '--host',
    '127.0.0.1',
    '--port',
    String(port),
    '--ignore-lock',
  ],
  { stdio: 'ignore' },
);
let chrome;
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null)
      throw new Error('Preview exited before audit');
    try {
      if ((await fetch(origin, { signal: AbortSignal.timeout(200) })).ok) {
        ready = true;
        break;
      }
    } catch {
      /* Still starting. */
    }
    await delay(100);
  }
  if (!ready) throw new Error('Preview did not become ready');
  chrome = await launch({
    chromePath: chromium.executablePath(),
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
  });
  await mkdir('artifacts/performance', { recursive: true });
  const summary = [];
  for (const [locale, path] of [
    ['en', '/'],
    ['ko', '/ko/'],
  ])
    for (let run = 1; run <= 3; run++) {
      const result = await lighthouse(`${origin}${path}`, {
        port: chrome.port,
        logLevel: 'error',
        output: ['html', 'json'],
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 800,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttlingMethod: 'simulate',
      });
      if (!result || result.lhr.runtimeError)
        throw new Error(
          JSON.stringify(result?.lhr.runtimeError ?? 'No Lighthouse report'),
        );
      const { lhr } = result;
      const row = {
        locale,
        run,
        url: lhr.finalDisplayedUrl,
        lighthouse: lhr.lighthouseVersion,
        userAgent: lhr.environment.hostUserAgent,
        throttling: lhr.configSettings.throttling,
        throttlingMethod: lhr.configSettings.throttlingMethod,
        performance: Math.round(lhr.categories.performance.score * 100),
        accessibility: Math.round(lhr.categories.accessibility.score * 100),
        bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
        seo: Math.round(lhr.categories.seo.score * 100),
        cls: lhr.audits['cumulative-layout-shift'].numericValue,
        lcpMs: lhr.audits['largest-contentful-paint'].numericValue,
        warnings: lhr.runWarnings,
      };
      summary.push(row);
      await writeFile(
        `artifacts/performance/${locale}-${run}.html`,
        result.report[0],
      );
      await writeFile(
        `artifacts/performance/${locale}-${run}.json`,
        result.report[1],
      );
      await writeFile(
        'artifacts/performance/summary.json',
        JSON.stringify(summary, null, 2) + '\n',
      );
      console.log(
        `${locale} run ${run}: Performance ${row.performance}, CLS ${row.cls}, LCP ${Math.round(row.lcpMs)}ms; A11y ${row.accessibility}, BP ${row.bestPractices}, SEO ${row.seo}`,
      );
    }
  if (summary.some((row) => row.performance < 90 || row.cls > 0.1))
    process.exitCode = 1;
} finally {
  if (chrome) chrome.kill();
  server.kill('SIGTERM');
}

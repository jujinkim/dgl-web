import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

for (const scenario of [
  'positive',
  'zero',
  'http-error',
  'network-error',
  'invalid-json',
  'invalid-count',
  'timeout',
]) {
  const output = `artifacts/star-builds/${scenario}`;
  const result = spawnSync(
    process.execPath,
    [
      '--import',
      './tests/fixtures/github-fetch.mjs',
      './node_modules/astro/bin/astro.mjs',
      'build',
      '--outDir',
      output,
    ],
    {
      env: { ...process.env, DGL_TEST_STARS_CASE: scenario },
      encoding: 'utf8',
      timeout: 30000,
    },
  );
  assert.equal(
    result.status,
    0,
    `${scenario} must finish building: ${result.stderr}\n${result.stdout}`,
  );
  for (const path of ['index.html', 'ko/index.html']) {
    const html = await readFile(`${output}/${path}`, 'utf8');
    assert.ok(
      html.includes('class="github-link"'),
      `${scenario}: GitHub link must survive`,
    );
    const count = html.match(
      /<a\b[^>]*class="star-count"[^>]*>[\s\S]*?<\/a>/,
    )?.[0];
    if (scenario === 'positive' || scenario === 'zero') {
      assert.ok(count, `${scenario}: star link required`);
      assert.match(
        count.replace(/<[^>]+>/g, ''),
        scenario === 'zero' ? /☆\s*0/ : /☆\s*123/,
      );
    } else assert.equal(count, undefined, `${scenario}: omit only count link`);
  }
  console.log(`PASS ${scenario}: build complete, EN/KO output correct`);
}

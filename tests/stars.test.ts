import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchGitHubStars } from '../src/lib/stars.ts';
import { downloads, site } from '../src/data/site.ts';

const reply =
  (data: unknown, status = 200): typeof fetch =>
  async () =>
    new Response(JSON.stringify(data), { status });

test('downloads retain destinations while every platform is unavailable', () => {
  assert.equal(downloads.length, 3);
  assert.ok(downloads.every((download) => !download.available));
  assert.equal(
    downloads.find((download) => download.id === 'apple')?.destination,
    null,
  );
  assert.equal(
    downloads.find((download) => download.id === 'desktop')?.destination,
    `${site.repository}/releases`,
  );
  assert.equal(
    downloads.find((download) => download.id === 'google')?.destination,
    `https://play.google.com/store/apps/details?id=${site.packageId}`,
  );
});

for (const count of [0, 1, 12345])
  test(`stars preserve valid count ${count}`, async () => {
    assert.equal(
      await fetchGitHubStars({ fetcher: reply({ stargazers_count: count }) }),
      count,
    );
  });

for (const count of [-1, 1.5, '12', null, Number.MAX_SAFE_INTEGER + 1])
  test(`stars reject invalid count ${count}`, async () => {
    assert.equal(
      await fetchGitHubStars({ fetcher: reply({ stargazers_count: count }) }),
      null,
    );
  });

test('HTTP/rate limit and missing data omit stars', async () => {
  assert.equal(await fetchGitHubStars({ fetcher: reply({}, 403) }), null);
  assert.equal(await fetchGitHubStars({ fetcher: reply({}) }), null);
});
test('network and malformed JSON omit stars', async () => {
  assert.equal(
    await fetchGitHubStars({
      fetcher: async () => {
        throw new Error('network');
      },
    }),
    null,
  );
  assert.equal(
    await fetchGitHubStars({ fetcher: async () => new Response('not json') }),
    null,
  );
});
test('timeout bounds fetch even when transport ignores abort', async () => {
  const start = performance.now();
  assert.equal(
    await fetchGitHubStars({
      fetcher: () => new Promise(() => {}),
      timeoutMs: 20,
    }),
    null,
  );
  assert.ok(performance.now() - start < 1000);
});
test('timeout also covers response body parsing', async () => {
  const fetcher: typeof fetch = async () =>
    new Response(new ReadableStream({ start() {} }));
  assert.equal(await fetchGitHubStars({ fetcher, timeoutMs: 20 }), null);
});

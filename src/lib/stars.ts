type StarOptions = { fetcher?: typeof fetch; timeoutMs?: number };

/** Build-time only. No token, browser request, or fatal build dependency. */
export async function fetchGitHubStars({ fetcher = fetch, timeoutMs = 1800 }: StarOptions = {}): Promise<number | null> {
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<null>((resolve) => {
    timer = setTimeout(() => { controller.abort(); resolve(null); }, timeoutMs);
  });
  const request = (async () => {
    try {
      const response = await fetcher('https://api.github.com/repos/jujinkim/dgl-client', {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'DaGaLi-Web-static-build' },
        signal: controller.signal,
      });
      if (!response.ok) return null;
      const data: unknown = await response.json();
      const count = data && typeof data === 'object' && 'stargazers_count' in data ? data.stargazers_count : null;
      return typeof count === 'number' && Number.isSafeInteger(count) && count >= 0 ? count : null;
    } catch { return null; }
  })();
  try { return await Promise.race([request, timeout]); }
  finally { clearTimeout(timer); }
}

let snapshot: Promise<number | null> | undefined;
export const getStarSnapshot = () => snapshot ??= fetchGitHubStars();

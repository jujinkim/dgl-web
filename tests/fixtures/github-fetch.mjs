// Test-process preload only. Production code has no fixture environment switch.
const realFetch = globalThis.fetch;
globalThis.fetch = (input, init) => {
  if (String(input) !== 'https://api.github.com/repos/jujinkim/dgl-client')
    return realFetch(input, init);
  switch (process.env.DGL_TEST_STARS_CASE) {
    case 'positive':
      return Promise.resolve(Response.json({ stargazers_count: 123 }));
    case 'zero':
      return Promise.resolve(Response.json({ stargazers_count: 0 }));
    case 'http-error':
      return Promise.resolve(new Response('', { status: 403 }));
    case 'network-error':
      return Promise.reject(new Error('fixture network failure'));
    case 'invalid-json':
      return Promise.resolve(new Response('not json'));
    case 'invalid-count':
      return Promise.resolve(Response.json({ stargazers_count: -1 }));
    case 'timeout':
      return new Promise(() => {});
    default:
      throw new Error('Unknown star fixture');
  }
};

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const [language, path] of [
  ['en', '/'],
  ['ko', '/ko/'],
] as const) {
  test(`${language}: content, sources, metadata and header destinations`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page.locator('h1')).toContainText('DaGaLi Client');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('.name-expansion')).toHaveText('dDal gGak Life');
    await expect(page.locator('.preview figcaption')).toContainText(
      language === 'en' ? 'DaGaLi Client desktop app' : '데스크톱 앱 화면',
    );
    await expect(page.locator('.connection-flow li')).toHaveCount(4);
    await expect(page.locator('.feature-card')).toHaveCount(5);
    await expect(page.locator('.faq-list details')).toHaveCount(5);
    const links = await page
      .locator('.header-resources a')
      .evaluateAll((els) => els.map((el) => el.getAttribute('href')));
    expect(links.filter((href) => !href?.endsWith('/stargazers'))).toEqual([
      'https://github.com/jujinkim/dgl-client',
      'https://ggak.life',
      'https://cozelsil.com',
    ]);
    if (links.length === 4)
      expect(links[1]).toBe(
        'https://github.com/jujinkim/dgl-client/stargazers',
      );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://ddal.ggak.life${path}`,
    );
    await expect(page.locator('link[hreflang]')).toHaveCount(3);
    const image = await page
      .locator('meta[property="og:image"]')
      .getAttribute('content');
    expect(image).toBe('https://ddal.ggak.life/social-card.png');
    expect((await page.request.get('/social-card.png')).status()).toBe(200);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /DaGaLi Client/,
    );
    expect(errors).toEqual([]);
  });

  test(`${language}: downloads block pointer, programmatic clicks and keyboard focus`, async ({
    page,
  }) => {
    await page.goto(`${path}#get-app`);
    const buttons = page.locator('[data-download]');
    await expect(buttons).toHaveCount(3);
    const before = page.url();
    const external: string[] = [];
    page.on('request', (request) => {
      if (!request.url().startsWith('http://127.0.0.1:4178'))
        external.push(request.url());
    });
    for (const button of await buttons.all()) {
      await expect(button).toBeDisabled();
      expect(
        await button.evaluate((el) => Number(getComputedStyle(el).opacity)),
      ).toBeLessThan(0.7);
      await button.click({ force: true });
      await button.evaluate((el: HTMLButtonElement) => {
        el.click();
        el.focus();
      });
      await expect(button).not.toBeFocused();
      await page.keyboard.press('Enter');
      await page.keyboard.press('Space');
      expect(page.url()).toBe(before);
    }
    expect(external).toEqual([]);
    await page.locator('.hero-actions a[href="#get-app"]').focus();
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      expect(
        await page.evaluate(() =>
          document.activeElement?.matches('[data-download]'),
        ),
      ).toBe(false);
    }
  });

  test(`${language}: language switch preserves direct section and manual reading position`, async ({
    page,
  }) => {
    const target = language === 'en' ? '/ko/' : '/';
    await page.goto(`${path}#features`);
    const languageLink = page.locator('[data-language-switch]');
    await expect(languageLink).toHaveAttribute('href', `${target}#features`);
    await languageLink.click();
    await expect(page).toHaveURL(
      new RegExp(`${target.replaceAll('/', '\\/')}#features$`),
    );
    await expect(page.locator('#features')).toBeInViewport();
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.querySelector('#get-app')!.scrollIntoView();
    });
    await expect(page.locator('[data-language-switch]')).toHaveAttribute(
      'href',
      `${path}#get-app`,
    );
    await page.locator('[data-language-switch]').click();
    await expect(page).toHaveURL(
      new RegExp(`${path.replaceAll('/', '\\/')}#get-app$`),
    );
  });

  test(`${language}: keyboard skip link, visible focus and native FAQ`, async ({
    page,
  }) => {
    await page.goto(path);
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    expect(
      await page
        .locator('.skip-link')
        .evaluate((el) => getComputedStyle(el).outlineStyle),
    ).toBe('solid');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
    const first = page.locator('summary').first();
    await first.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details').first()).toHaveAttribute('open', '');
    await page.keyboard.press('Space');
    await expect(page.locator('details').first()).not.toHaveAttribute('open');
  });

  test(`${language}: bottom FAQ and short-screen keyboard language switch`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await page.goto(`${path}#faq`);
    const other = language === 'en' ? '/ko/' : '/';
    const switchLink = page.locator('[data-language-switch]');
    await expect(switchLink).toHaveAttribute('href', `${other}#faq`);
    await switchLink.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(
      new RegExp(`${other.replaceAll('/', '\\/')}#faq$`),
    );
    await expect(page.locator('[data-language-switch]')).toHaveAttribute(
      'href',
      `${path}#faq`,
    );
    const first = page.locator('summary').first();
    await first.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details').first()).toHaveAttribute('open', '');
    const headerBottom = await page
      .locator('.site-header')
      .evaluate((el) => el.getBoundingClientRect().bottom);
    expect(
      await first.evaluate((el) => el.getBoundingClientRect().top),
    ).toBeGreaterThanOrEqual(headerBottom);
  });

  test(`${language}: no JavaScript retains core content, links, FAQ and disabled state`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 360, height: 800 },
    });
    const page = await context.newPage();
    await page.goto(path);
    await expect(page.locator('h1')).toContainText('DaGaLi Client');
    await page.locator('.hero-actions a[href="#get-app"]').click();
    await expect(page).toHaveURL(/#get-app$/);
    for (const button of await page.locator('[data-download]').all())
      await expect(button).toBeDisabled();
    await page.locator('summary').first().click();
    await expect(page.locator('details').first()).toHaveAttribute('open', '');
    await page.locator('[data-language-switch]').click();
    await expect(page.locator('html')).toHaveAttribute(
      'lang',
      language === 'en' ? 'ko' : 'en',
    );
    await context.close();
  });

  test(`${language}: reduced motion is static; normal motion runs once`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    for (const selector of ['.flow-icon', '.app-screenshot']) {
      expect(
        await page
          .locator(selector)
          .first()
          .evaluate((el) => getComputedStyle(el).animationName),
      ).toBe('none');
    }
    expect(
      await page
        .locator('html')
        .evaluate((el) => getComputedStyle(el).scrollBehavior),
    ).toBe('auto');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    expect(
      await page
        .locator('.flow-icon')
        .first()
        .evaluate((el) => getComputedStyle(el).animationIterationCount),
    ).toBe('1');
  });

  test(`${language}: no third-party browser requests or storage`, async ({
    page,
  }) => {
    const external: string[] = [];
    page.on('request', (request) => {
      if (new URL(request.url()).origin !== 'http://127.0.0.1:4178')
        external.push(request.url());
    });
    await page.goto(path);
    await page.locator('summary').first().click();
    expect(external).toEqual([]);
    expect(
      await page.evaluate(() => ({
        local: localStorage.length,
        session: sessionStorage.length,
        cookies: document.cookie,
      })),
    ).toEqual({ local: 0, session: 0, cookies: '' });
  });

  for (const width of [360, 768, 1440])
    test(`${language}: axe WCAG 2.2 AA at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      await page
        .locator('details')
        .evaluateAll((els) => els.forEach((el) => el.setAttribute('open', '')));
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(result.violations).toEqual([]);
    });

  for (const [width, height] of [
    [320, 740],
    [360, 800],
    [768, 1024],
    [1440, 900],
    [844, 390],
  ])
    test(`${language}: reflow ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto(path);
      await page
        .locator('details')
        .evaluateAll((els) => els.forEach((el) => el.setAttribute('open', '')));
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
      const outside = await page
        .locator('a, button, summary, h1, h2, .feature-card, .app-screenshot')
        .evaluateAll((els) =>
          els
            .filter((el) => {
              const box = el.getBoundingClientRect();
              return (
                box.width &&
                !el.classList.contains('skip-link') &&
                (box.left < -1 || box.right > innerWidth + 1)
              );
            })
            .map((el) => el.outerHTML.slice(0, 120)),
        );
      expect(outside).toEqual([]);
      await page.locator('footer').scrollIntoViewIfNeeded();
      await expect(page.locator('.back-to-top')).toBeInViewport();
    });

  test(`${language}: 200% enlarged text stays readable without clipping`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 768, height: 600 });
    await page.goto(path);
    await page.evaluate(() => {
      const elements = [...document.querySelectorAll<HTMLElement>('body *')];
      const sizes = elements.map((el) =>
        parseFloat(getComputedStyle(el).fontSize),
      );
      elements.forEach((el, i) => {
        el.style.fontSize = `${sizes[i] * 2}px`;
      });
    });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(768);
    const clipped = await page
      .locator('h1,h2,h3,p,summary,button,.brand')
      .evaluateAll((els) =>
        els
          .filter((el) => el.scrollWidth > el.clientWidth + 2)
          .map((el) => el.outerHTML.slice(0, 100)),
      );
    expect(clipped).toEqual([]);
  });
}

test('sitemap, robots and unknown routes', async ({ page, request }) => {
  const xml = await request.get('/sitemap.xml');
  expect(xml.status()).toBe(200);
  expect(await xml.text()).toContain('<loc>https://ddal.ggak.life/ko/</loc>');
  expect(await (await request.get('/robots.txt')).text()).toContain(
    'Sitemap: https://ddal.ggak.life/sitemap.xml',
  );
  const response = await page.goto('/missing-route/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toContainText('Nothing at this address.');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex',
  );
  await expect(page.locator('a[href="/ko/"]')).toBeVisible();
});

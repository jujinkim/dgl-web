# Local verification — 2026-10-25

## Scope and environment

Approved R1–R6 implemented on `/` and `/ko/`. Checks use **Node 22.23.4**, npm 11.6.2, Astro 7.4.2, Playwright 1.64.1, Chromium 156 (Playwright revision 1248), Linux x86_64, Lighthouse 13.5.0. Host Node 22.20.0 was not replaced; commands used a temporary npm-provided Node runtime. No remote repository, Pages, domain or DNS was changed.

## Results

| Check                      | Actual result                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Astro/TypeScript           | 0 errors, warnings or hints after cleanup                                                                             |
| Prettier                   | Formatting check passed                                                                                               |
| Static build               | English, Korean, 404; sitemap endpoint and public assets generated                                                    |
| Unit tests                 | 13/13 passed: download configuration, positive/zero/invalid counts, HTTP/network/JSON errors, transport/body timeouts |
| Actual-build star fixtures | 7/7 builds passed; both locale outputs inspected for every case                                                       |
| Browser acceptance         | 35/35 Chromium tests passed                                                                                           |
| axe, WCAG 2.2 AA tags      | 0 violations, both locales at 360/768/1440px, all FAQ answers open                                                    |
| Mobile Lighthouse          | Performance 100 and CLS 0 on all 6 runs                                                                               |
| npm dependency audit       | 0 vulnerabilities after upgrade to Astro 7                                                                            |
| Whitespace and repository  | `git diff --check` passed; local unit commits only                                                                    |

### Browser coverage

- Correct language, single h1, exact app/brand expansion, explicitly illustrative terminal, four-step flow, five feature cards and five FAQs.
- Header destination order: Client GitHub, optional stargazers link, ggak.life, cozelsil.com. Canonical/hreflang/description/share image and HTTP assets checked.
- All three native disabled buttons reject pointer and programmatic clicks, cannot receive focus, are skipped by keyboard navigation, and cause no navigation or external requests. Dim style verified. Future Desktop Releases destination retained in configuration; Apple ID null.
- EN ↔ KO switch preserves direct fragment and updated reading section using real pointer/keyboard actions. Sticky-header offset and bottom FAQ detection are checked, including keyboard focus remaining visible at 844×390. Core page links and language routes work with JavaScript disabled; dynamic reading-section preservation is progressive enhancement and is unavailable without JS.
- Keyboard skip link, visible focus and native FAQ Enter/Space toggling. Native FAQ content remains available without JS.
- Reduced-motion media setting disables animations and smooth scrolling; normal CSS effects have one iteration.
- Zero third-party browser requests or local/session storage/cookies while loading and opening FAQ.
- Reflow at 320×740, 360×800, 768×1024, 1440×900 and short 844×390 viewport; no horizontal overflow or offscreen controls. All FAQ answers opened for reflow checks. 200% text enlargement at 768×600 checked for overflow/clipping. This is viewport/text-resize coverage, not physical-device or OS/browser zoom certification.
- Sitemap/robots and unknown-path HTTP 404 with noindex and return links.
- Full-page EN/KO desktop/mobile screenshots visually inspected. Generated artifacts are ignored by Git.

### GitHub failures

`npm run test:build` preloads a fetch stub in isolated test build processes. It does not add a production environment switch or replace production content. Seven full Astro builds write separate ignored artifact folders:

| API case                 | EN and KO output                                 |
| ------------------------ | ------------------------------------------------ |
| Positive `123`           | Star link displays `123`                         |
| Zero `0`                 | Star link displays `0`                           |
| HTTP 403                 | Only numeric link omitted, GitHub remains        |
| Network rejection        | Same graceful fallback                           |
| Malformed JSON           | Same graceful fallback                           |
| Invalid negative count   | Same graceful fallback                           |
| Transport never resolves | 1.8-second bound, build completes, same fallback |

Unit tests separately verify unsafe/fractional/string/null counts and timeout during response-body parsing. Normal builds queried public GitHub and displayed `0` at verification time. No browser GitHub API request occurs. Counts remain build-time snapshots and can become stale between builds.

### Mobile Lighthouse measurement

Built output served by local Astro preview at `http://127.0.0.1:37521/` and `/ko/` on a temporary loopback port. Measurements taken sequentially, three fresh Lighthouse navigation runs per locale. Mobile emulation **360×800**, device scale 1, simulated throttling: **150ms RTT, 1638.4 Kbps throughput, 4× CPU slowdown**. No field traffic or public CDN/network measured.

| Locale | Run | Performance | CLS | LCP   | Accessibility | Best practices | SEO |
| ------ | --- | ----------- | --- | ----- | ------------- | -------------- | --- |
| EN     | 1   | 100         | 0   | 904ms | 100           | 100            | 100 |
| EN     | 2   | 100         | 0   | 903ms | 100           | 100            | 100 |
| EN     | 3   | 100         | 0   | 902ms | 100           | 100            | 100 |
| KO     | 1   | 100         | 0   | 902ms | 100           | 100            | 100 |
| KO     | 2   | 100         | 0   | 902ms | 100           | 100            | 100 |
| KO     | 3   | 100         | 0   | 902ms | 100           | 100            | 100 |

Lighthouse reported no run warnings. Local goals Performance >=90 and CLS <=0.1 met. HTML/JSON reports and environment details are in ignored `artifacts/performance/`; `npm run perf` reproduces the audit on a new temporary port. Scores do not demonstrate real-user performance or complete accessibility conformance.

## Issues resolved during setup

- Initial check ran before installation completed (`astro: not found`); rerun passed after install.
- Astro 6 initially matched host Node but dependency audit reported critical/high advisories. Upgraded to Astro 7.4.2, used Node >=22.23.4, audit now 0. No Astro 6 code was committed.
- Existing Chromium cache was from another Playwright revision. Installed matching Chromium before browser tests.
- Port 4321 belonged to another local service. Initial preview selected 4322; tests use an isolated port and performance chooses a temporary free port. No existing service was stopped.
- Final navigation review added a sticky language header, measured anchor offset and bottom FAQ detection; 35 browser tests passed after this change.
- A TypeScript hint on awaiting synchronous browser cleanup was removed. Final formatting/check gate rerun after cleanup.

## Unverified boundaries

Initial implementation checks above were local. Public Actions/HTTPS/routes/assets were subsequently verified as recorded below. Domain registrar ownership, physical-device tests, Firefox/WebKit, screen readers, a full WCAG audit and field performance remain unverified. App platform/hook results are attributed to Client documentation reviewed on 2026-10-25; no Client build, SSH connection or app release was performed here. The user subsequently authorized public release; operating procedures remain in `docs/operations.md`.

## Public release recovery and verification — 2026-10-25

The user approved GitHub Actions deployment and automatic main-push publication after the initial local-only scope. Existing custom domain `ddal.ggak.life` was preserved. Pages Source was already `workflow` when release work began; its approved TLS certificate was checked and HTTPS enforcement enabled. No DNS records were changed.

### Corrected release path

- Legacy branch/Jekyll run [40183423408](https://github.com/jujinkim/dgl-web/actions/runs/40183423408) failed on Astro frontmatter. It is not a suitable source build for this project.
- Manual Astro run [40186173722](https://github.com/jujinkim/dgl-web/actions/runs/40186173722) failed because setup-node major 22 selected cached Node **22.23.3**, below Astro's minimum **22.23.4**.
- CI now uses **Node 24**, runs on `main` pushes and retains manual dispatch. Local Node **24.22.1** check/format/build and 13 unit tests passed. The successful hosted build used **Node 24.21.0**.
- Source commit **`7c3c48f07797ef031dc1fb453b34e612b4835bf0`** automatically started only the repository's Astro publishing workflow. Build/check/unit/upload and deployment succeeded in [run 40186442185](https://github.com/jujinkim/dgl-web/actions/runs/40186442185); deployment completed **2026-10-25 10:51:32 UTC**.
- GitHub also lists a built-in dynamic `pages-build-deployment` entry. The API rejects manually disabling that built-in workflow (HTTP 422). It remains in history, while `build_type: workflow` uses the repository's one Astro YAML; no new legacy/Jekyll run was created for the successful release push. Historical runs were preserved.

### Live checks

Read-only HTTPS/browser verification completed **2026-10-25 10:53:17 UTC** at [ddal.ggak.life](https://ddal.ggak.life/), using Chromium 156. This is independent of the Actions result.

| Area                  | Live result                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| HTTP                  | HTTP 301 redirects to HTTPS; TLS validation succeeds                                                 |
| `/` and `/ko/`        | HTTP 200, correct languages, app name, exact brand expansion and canonical URLs                      |
| Downloads             | All three native buttons remain disabled; pointer attempts do not navigate                           |
| Navigation            | Header GitHub/ggak.life/cozelsil.com destinations match; actual locale clicks retain `#features`     |
| FAQ and mobile        | Keyboard Enter opens native FAQ; 360px layouts have no horizontal overflow                           |
| No JavaScript         | Both languages retain introduction, disabled controls and working native FAQ                         |
| Assets                | Favicon, share PNG and generated CSS return HTTP 200; bytes/SHA-256 match local `dist` assets        |
| Scripts and network   | Inline locale script works through real navigation; 0 page errors and 0 third-party browser requests |
| Discovery/error paths | Sitemap and robots HTTP 200; unknown URL HTTP 404 with custom page and noindex                       |

Ignored evidence files: `artifacts/live/verification.json`, `artifacts/live/en-360.png`, `artifacts/live/ko-360.png`. The subsequent documentation commit records this successful release and, under the approved main-push policy, runs the same publishing workflow again. Final run status and remote SHA are checked before handoff; its product source is unchanged.

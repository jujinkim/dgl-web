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

## Landing revision verification — 2026-10-25

User-approved revision puts Get App immediately below the header, increases small text, and emphasizes SSH + tmux + AI coding agents in both languages. The single h1 is now the Get App product heading. The hero remains the same visual size as an h2, section IDs remain valid, Get App leads navigation/actions, and top links target main. tmux navigation is the first feature. Existing disabled downloads, release caveats, external destinations and architecture are preserved.

Verified with temporary Node **24.22.1** and the existing Chromium 156 tooling:

| Check                           | Actual result                                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Astro/TypeScript and formatting | 0 errors/warnings/hints; Prettier passed                                                                                                                   |
| Build and unit tests            | Static EN/KO/404 and assets built; 13/13 unit tests passed                                                                                                 |
| Existing browser acceptance     | 35/35 passed, including no-JS, reduced motion, keyboard, locale fragments, short screens, reflow and 200% enlarged text                                    |
| axe WCAG 2.2 AA tags            | 0 violations at 360/768/1440px in both locales                                                                                                             |
| Computed type sizes             | Body 16px, hero lead 17px, supporting text 14px, terminal 12px at every inspected breakpoint; rem-based sizes retain user scaling                          |
| Large hero titles               | EN 58px desktop/43px mobile; KO 50px desktop/36px mobile, unchanged                                                                                        |
| Additional rendered review      | Both locales at 320×740, 360×800, 768×1024, 1440×900 and 844×390: first Get App, core combination, prioritized links, tmux feature, no horizontal overflow |
| Navigation and downloads        | Actual language and top-link clicks passed; both locales retain native disabled controls and usable FAQ without JS                                         |
| Local assets/network            | CSS/favicon/share PNG bytes match dist; no page errors or third-party browser requests; generated CNAME is correct                                         |
| Mobile Lighthouse               | EN/KO three runs each: Performance 100, accessibility 100, best practices 100, SEO 100, CLS 0; LCP 902–904ms, no run warnings                              |

Local Lighthouse used 360×800 emulation, simulated 150ms RTT/1638.4 Kbps throughput/4× CPU throttling at `http://127.0.0.1:35181/` and `/ko/`. Reports are in ignored `artifacts/performance/`. Revision browser evidence and EN/KO desktop/mobile captures are in ignored `artifacts/revision/local/`.

These results precede the authorized push. The existing Pages workflow and public HTTPS/browser delivery are checked separately afterward, with deployed SHA/run URL in ignored `artifacts/revision/release.json` and actual live evidence in `artifacts/revision/live/verification.json`. Local results do not prove public delivery, real-device usability, other browsers, screen-reader conformance or field performance. No Client application release or platform-state change is included.

## Get App and hero integration — 2026-10-25

The approved follow-up keeps Get App first and removes its numbered eyebrow, outer panel, duplicate introduction, visible package ID and extra repository link. Its product heading, single SSH + tmux + AI coding agents line, development badge and disabled platform buttons share the hero's left alignment and background, with 32px connecting padding. The repeated product label and workflow line were removed from the hero. Release timing and Apple-platform caveats now live in the download FAQ. All existing IDs, including `download-notice`, are retained; disabled buttons still reference that notice. Explanation sections now run 01 → 02 → 03 in both languages. Download configuration, public API usage and deployment architecture are unchanged.

Verification used temporary Node **24.22.1** and Chromium **156**:

- Astro/TypeScript: 0 errors, warnings or hints; formatting and static build passed. Existing unit tests **13/13**, existing browser acceptance **35/35**.
- Existing browser checks cover disabled pointer/programmatic/keyboard actions, no JavaScript, language fragments, short screens, reduced motion, 200% enlarged text and reflow. Axe reported **0 violations** at 360/768/1440px in both locales.
- Additional rendered review covered EN/KO at 320×740, 360×800, 768×1024, 1440×900 and 844×390. Product and hero alignment match; the panel and duplicate core line are absent; all section anchors and the FAQ notice remain. No horizontal overflow, page errors or third-party browser requests. Desktop/mobile captures were visually inspected.
- Existing rem-based sizes remain: body 16px, hero lead 17px, supporting text 14px, terminal 12px. Large hero titles remain EN 58/43px and KO 50/36px at desktop/mobile breakpoints.
- Local mobile Lighthouse, three runs per language: **100** for Performance, Accessibility, Best Practices and SEO; **CLS 0**, LCP **902–904ms**, no warnings. Audit origin `http://127.0.0.1:46775`, simulated 150ms RTT/1638.4 Kbps/4× CPU, 360×800 emulation. Reports remain in ignored `artifacts/performance/`.

Local evidence is in ignored `artifacts/hero-integration/local/`. Publication uses the existing main-push Pages workflow. Deployment SHA/run evidence and the subsequent independent live HTTPS/browser checks are recorded in ignored `artifacts/hero-integration/release.json` and `artifacts/hero-integration/live/verification.json`. Physical devices, other browsers, screen-reader conformance and field performance remain unverified; no Client release is included.

## tmux positioning and instructional workflow — 2026-10-25

The user clarified DGL's role as a tmux wrapper, session reconnector and manager, with SSH as an additional remote-access capability. Section 01 now teaches start tmux → run agents → manage with DGL → reconnect, without assuming an existing setup. Both locales, hero, core line, features, FAQ, metadata, share card and current project records reflect that role. tmux supplies session persistence, and the same standard sessions remain directly accessible from a local terminal. The terminal illustration is explicitly a remote example. This copy does not assert a new local-terminal backend in DGL. Get App order, type sizes, IDs, disabled downloads, API behavior and platform verification claims remain unchanged.

The current Client README was read through the GitHub connector on 2026-10-25 (blob `b6f7f3cc76216d575c81fbd5bf08464500f75d9d`). Its standard tmux commands and session behavior support direct terminal access. Product framing follows the user's latest clarification.

- Temporary Node 24.22.1: Astro/TypeScript 0 errors/warnings/hints, formatting and static build passed, unit tests **13/13**, existing Chromium browser checks **35/35**. Axe found **0 violations** at 360/768/1440px in both languages; no-JS, locale anchors, disabled controls, reduced motion, short viewports, reflow and 200% enlarged text passed.
- Additional EN/KO checks at 320/360/768/1440/844px confirmed the instructional steps, local-terminal wording, wrapper role, preserved sizes/anchors and no horizontal overflow. No page errors or third-party browser requests. Desktop/mobile workflow and hero captures were visually inspected. The updated SVG was exported to the existing **1200×630** PNG; the card was visually inspected, and served assets matched the build.
- Local Lighthouse at `http://127.0.0.1:39971/` and `/ko/`, 360×800 mobile emulation, simulated 150ms RTT/1638.4 Kbps/4× CPU: three runs per language, all four categories **100**, **CLS 0**, LCP **902–903ms**, no warnings. These are local measurements.

Evidence: ignored `artifacts/tmux-positioning/local/` and `artifacts/performance/`. Deployment and independent live browser/HTTPS evidence use `artifacts/tmux-positioning/release.json` and `artifacts/tmux-positioning/live/verification.json`. Physical devices, other browsers, screen readers, field performance and Client application verification remain outside these checks.

## Approved hero reconnection copy — 2026-10-25

Replaced only the EN/KO hero body with the user's approved SSH reconnection and tmux reattachment message. The exact English copy is "Let DGL handle SSH reconnection and tmux reattachment, so you can pick up where you left off." The Korean copy is "SSH가 끊겨도, 재접속부터 tmux 세션 복귀까지 DGL에 맡기세요. 하던 작업을 그대로 이어가세요."

Node 24.22.1 check/format/build passed with 0 errors/warnings/hints; existing unit tests **13/13** and Chromium browser checks **35/35** passed, including axe, no-JS, disabled downloads, locale anchors, reflow and 200% text. Additional EN/KO rendered checks at 360×800 and 1440×900 confirmed exact hero text, preserved sizes, no overflow or page errors and served assets matching the build. Mobile/desktop hero captures were visually inspected. Lighthouse was not rerun for this text-only change.

Evidence uses ignored `artifacts/hero-copy/local/`, `artifacts/hero-copy/release.json` and `artifacts/hero-copy/live/verification.json`; live checks follow the existing authorized main-push Pages deployment independently from local results.

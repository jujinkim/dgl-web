# DaGaLi Web implementation

## Goal and authorization

Implement approved bilingual DaGaLi Client introduction in existing `dgl-web` repository. Scope R1–R6 and checklist in `docs/project-checklist.md`. User explicitly requested implementation; local installation, checks and commits authorized. Original implementation scope excluded remote actions. The user subsequently authorized push, then GitHub Actions publication with a main-push trigger. Unrelated DNS changes remain excluded.

## Work units

- [x] 1. Approved records, Astro foundation, locale routes and local check/build.
- [x] 2. Reviewed content, terminal/flow, header, features, downloads and FAQ; browser verification.
- [x] 3. Accessibility/responsive/no-JS/failure/performance verification, operating guide, final local commit.

## Decisions

- User-confirmed: branding/case, EN+KO routes, terminal illustration/design, all downloads disabled, Astro+GitHub Pages, Git/main/existing remote, no paid services/analytics/backend, no extra workflow skills.
- Internal: Astro 7 with Node >=22.23.4, shared typed content and components, CSS effects, small language-switch script, native details and disabled buttons; Node tests and Playwright/axe/Lighthouse for meaningful acceptance checks.
- Guidance v1 revision 8 and assistant rules read live. Client README and agent-status scope read live 2026-10-25. Source audit in plan; app itself not tested here.

## Verification log

- Initial repository: clean `main`, only README, base `09258ea`; origin `git@github.com:jujinkim/dgl-web.git`.
- Node 22.20.0 / npm 11.6.2; existing Chromium cache available.
- Initial setup check ran before installation finished (`astro: not found`); rerun passed after installation. Astro 6 trial installed successfully but audit found 3 dependency advisories including critical/high; upgraded to Astro 7 before foundation commit. Host Node remains unchanged; verification uses temporary Node 22.23.4.
- Foundation: Astro 7.4.2 check: 0 errors/warnings/hints; static build: 3 pages plus sitemap; npm audit: 0 vulnerabilities. Playwright Chromium route smoke: `/` 200/en and `/ko/` 200/ko. Matching browser installed after cache revision mismatch. Generated 1200×630 PNG share card from repository SVG.

## Remaining / resume

Implementation and local acceptance are complete. Authorized release recovery completed: compatible CI Node, Actions publication, main-push trigger, HTTPS and live EN/KO/assets/links verified. See release evidence below and docs/operations.md. The documentation push triggers the same approved pipeline, whose final result is checked before handoff.

### Unit 2 — 2026-10-25

- Implemented R1–R6 using typed shared EN/KO content, common components and CSS; build-time stars render valid zero. Preview explicitly illustrative. Header resources match approved order. All three download controls use native disabled state; future URLs remain in site configuration.
- Check: 18 files, 0 errors/warnings/hints. Static build: 3 pages plus sitemap. Unit tests 13/13. Playwright Chromium tests 33/33 (9.1s): both locales, destinations/hash preservation, blocked download pointer/programmatic/keyboard actions, keyboard/FAQ, no-JS, no external requests/storage, motion, metadata/assets/404, responsive 320/360/768/1440 and 844×390, 200% enlarged text.
- Axe WCAG 2.2 AA tags: 0 violations with FAQs open at 360/768/1440 in both languages. This is a local automated check, not full conformance proof. Full-page EN/KO desktop/mobile screenshots visually inspected.
- Foundation commit: `31cd6bf`. Unit 2 saved as `434264f`. Performance and actual-build timeout/failure fixtures continued in unit 3.

### Unit 3 — 2026-10-25

- Added reproducible actual-build GitHub fixtures: positive, zero, HTTP error, network rejection, malformed JSON, invalid count, never-resolving transport. Seven isolated builds pass; both locale outputs preserve GitHub and omit only unavailable counts.
- Added Prettier formatting and readable component/CSS/content source. `npm ci` reproduces installation from lockfile; dependency audit remains 0.
- Added README setup/commands, operations and recovery guide, actual verification report, manual-only Pages preparation and explicit remote boundary.
- Final navigation review: sticky header keeps locale control reachable; measured scroll padding prevents covered anchors/focus. Bottom detection retains FAQ section. Tests now use actual clicks; added short-screen keyboard/FAQ regression cases.
- Final check: 21 files, 0 errors/warnings/hints; formatting/build passed. Unit tests 13/13, Chromium browser tests 35/35 (12.5s), axe 0 violations. No-JS/reduced-motion, short viewport, 200% text and metadata/404/privacy checks included.
- Mobile Lighthouse: EN and KO three runs each, Performance 100 / CLS 0 / accessibility 100 / best practices 100 / SEO 100; repeated against final navigation adjustment with all goals still met; detailed actual measurements recorded in docs/verification.md.
- Local commits already saved: `31cd6bf` foundation; `434264f` bilingual landing. The final verification commit includes these records; inspect `git log -1` for its SHA.
- Unverified scope: public deployment/Actions/DNS/domain/HTTPS, physical devices, Firefox/WebKit, screen readers/full WCAG audit and field performance. No app build/SSH/client release performed. No push or remote writes.

- Final review: all checklist items checked with local evidence. Clean lockfile installation and audit passed. Sticky header and final built output passed 35 browser checks; final Lighthouse six runs all 100 / CLS 0. No known implementation blockers.

## Release recovery — 2026-10-25

- User authorized push and then accepted switching from branch/Jekyll to GitHub Actions, running deployment and adding automatic main-push releases.
- Original source release pushed as merge commit `05b04b9`, preserving the user's root CNAME commit. Local and remote SHA matched, worktree clean.
- Legacy branch/Jekyll run `40183423408` failed reading Astro frontmatter. User-selected Pages Source is now `workflow`; existing `ddal.ggak.life` mapping and approved TLS certificate confirmed read-only.
- Manual Astro run `40186173722` failed at check: setup-node major 22 selected unsupported Node 22.23.3. Changed CI to Node 24 and added main-push trigger; retained manual dispatch.
- Local Node 24.22.1 verification: check/Prettier 0 errors/warnings/hints, static build 3 pages, unit tests 13/13. Product UI unchanged; public browser verification follows deployment.
- Workflows: one repository-controlled Astro YAML and one GitHub-generated legacy entry. GitHub rejects manual disabling of its dynamic built-in entry with HTTP 422. Source `workflow` replaces its branch/Jekyll trigger; old history is preserved. Verify that the new push starts only the Astro workflow.
- Release fix commit `7c3c48f` pushed. Auto-triggered Astro run `40186442185` completed build and deploy successfully; hosted Node 24.21.0 confirmed in build logs. No new legacy/Jekyll run appeared for that push.
- HTTPS enforcement enabled against the existing approved certificate; no DNS change. Live verification at 10:53:17 UTC: `/` and `/ko/` HTTP 200, HTTP→HTTPS 301, locale/hash/FAQ/mobile/no-JS behavior and disabled downloads passed. Favicon/PNG/generated CSS match local built bytes; sitemap/robots 200, custom missing route 404; zero page errors or third-party requests.
- Evidence saved in `docs/verification.md` and ignored `artifacts/live/`. Final documentation commit records success and uses the same main-push pipeline; verify that final run and synchronized remote SHA before reporting completion.

## Landing revision — 2026-10-25

- User approved implementation and push: raise small font sizes, put Get App immediately below the header and before the hero, emphasize SSH + tmux + AI coding agents for existing tmux users.
- Implemented in EN/KO: first Get App with the sole product h1; hero retains original large type as h2; Get App leads navigation/actions; footer top links target main. Shared rem-based sizes resolve to 16px body, 17px lead, 14px supporting text and 12px terminal. Removed mobile font reductions; wrapping accommodates larger text. tmux navigation is the first feature.
- Node 24.22.1 check: 0 errors/warnings/hints; Prettier and build passed; unit tests 13/13, existing Chromium E2E 35/35. Axe found 0 violations at 360/768/1440 in both locales. Reflow, short 844×390 viewport and 200% text checks passed.
- Additional rendered inspection covers both locales at 320/360/768/1440/844px: first-section order, prioritized links, visible core combination, exact computed sizes and unchanged hero title sizes, enabled language/FAQ/top navigation, native disabled downloads and no-JS behavior. CSS/favicon/share PNG match local build bytes; no page errors or third-party requests. Evidence: ignored `artifacts/revision/local/verification.json` and screenshots.
- Mobile Lighthouse: both locales, three runs each; Performance/accessibility/best practices/SEO 100, CLS 0, LCP 902–904ms. Local measurements only; physical devices, other browsers, screen readers and field performance remain separate gates.
- Release step: push the checked commit through the existing main-triggered Pages workflow; record deployed SHA, run URL and live verification in ignored `artifacts/revision/release.json` and `artifacts/revision/live/verification.json`, then report remote synchronization and live status.

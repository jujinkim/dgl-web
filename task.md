# DaGaLi Web implementation

## Goal and authorization

Implement approved bilingual DaGaLi Client introduction in existing `dgl-web` repository. Scope R1–R6 and checklist in `docs/project-checklist.md`. User explicitly requested implementation; local installation, checks and commits authorized. Remote writes, push, Pages activation, DNS and deployment excluded.

## Work units

- [x] 1. Approved records, Astro foundation, locale routes and local check/build.
- [x] 2. Reviewed content, terminal/flow, header, features, downloads and FAQ; browser verification.
- [ ] 3. Accessibility/responsive/no-JS/failure/performance verification, operating guide, final local commit.

## Decisions

- User-confirmed: branding/case, EN+KO routes, terminal illustration/design, all downloads disabled, Astro+GitHub Pages, Git/main/existing remote, no paid services/analytics/backend, no extra workflow skills.
- Internal: Astro 7 with Node >=22.23.4, shared typed content and components, CSS effects, small language-switch script, native details and disabled buttons; Node tests and Playwright/axe/Lighthouse for meaningful acceptance checks.
- Guidance v1 revision 8 and assistant rules read live. Client README and agent-status scope read live 2026-10-25. Source audit in plan; app itself not tested here.

## Verification log

- Initial repository: clean `main`, only README, base `09258ea`; origin `git@github.com:jujinkim/dgl-web.git`.
- Node 22.20.0 / npm 11.6.2; existing Chromium cache available.
- Initial setup check ran before installation finished (`astro: not found`); rerun required. Astro 6 trial installed successfully but audit found 3 dependency advisories including critical/high; upgraded to Astro 7 before foundation commit. Host Node remains unchanged; verification uses temporary Node 22.23.4.
- Foundation: Astro 7.4.2 check: 0 errors/warnings/hints; static build: 3 pages plus sitemap; npm audit: 0 vulnerabilities. Playwright Chromium route smoke: `/` 200/en and `/ko/` 200/ko. Matching browser installed after cache revision mismatch. Generated 1200×630 PNG share card from repository SVG.

## Remaining / resume

Units 1–2 implemented and locally verified. Next: actual-build star failure fixtures, mobile Lighthouse, maintenance/release/recovery guide, final records and local commit. Future live deployment remains separate authorization.

### Unit 2 — 2026-10-25

- Implemented R1–R6 using typed shared EN/KO content, common components and CSS; build-time stars render valid zero. Preview explicitly illustrative. Header resources match approved order. All three download controls use native disabled state; future URLs remain in site configuration.
- Check: 18 files, 0 errors/warnings/hints. Static build: 3 pages plus sitemap. Unit tests 13/13. Playwright Chromium tests 33/33 (9.1s): both locales, destinations/hash preservation, blocked download pointer/programmatic/keyboard actions, keyboard/FAQ, no-JS, no external requests/storage, motion, metadata/assets/404, responsive 320/360/768/1440 and 844×390, 200% enlarged text.
- Axe WCAG 2.2 AA tags: 0 violations with FAQs open at 360/768/1440 in both languages. This is a local automated check, not full conformance proof. Full-page EN/KO desktop/mobile screenshots visually inspected.
- Foundation commit: `31cd6bf`. Unit 2 ready for local commit. Performance and actual-build timeout/failure fixtures remain for unit 3.

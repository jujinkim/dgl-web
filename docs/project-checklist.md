# Project checklist

Read affected criteria before changes; recheck against actual artifacts afterward. Evidence and limitations live in `task.md` and `docs/verification.md`. Local checks and public deployment checks are recorded separately.

- [x] **Brand / R1:** DaGaLi Web, DaGaLi Client, DGL and exact `dDal gGak Life` in both locales. Check rendered text and metadata.
- [x] **Content / R2–R3, R6:** DGL is a tmux wrapper for session reconnection and management; SSH provides remote access, and standard tmux sessions remain directly usable from a local terminal. Section 01 teaches usage without assuming an existing setup. Compare Client README/agent documentation; distinguish implementation, reported verification and release. No implied iOS release or ordinary-shell persistence.
- [x] **Downloads / R4:** One configuration owns three dim native disabled buttons and future destinations; Apple numeric ID null, package `kim.jujin.dglc`, Desktop Releases URL preserved. Exercise pointer and keyboard; no navigation with JS disabled.
- [x] **Navigation / R1, R5:** Header resource order/destinations, explicit `/` ↔ `/ko/` switch near brand, matching section hash, anchors, direct routes and 404. No automatic language redirect.
- [x] **Stars / R5:** Build-only public API; valid positive/zero counts render. HTTP/JSON/invalid data/network/timeout omit count, preserve GitHub, finish build. Browser makes no API requests.
- [x] **Architecture:** Astro static output; localized shared shape, layout/components/styles split, no backend/DB/login/credential collection/analytics. Check/build and inspect output/dependencies.
- [x] **Accessibility:** Keyboard/visible focus/heading order/text alternatives/contrast, FAQ and landmarks; WCAG 2.2 AA target. Automated axe and manual browser checks; no unverified compliance claim.
- [x] **Motion:** Connection effects run once; the app screenshot stays static and reduced-motion disables animation. Inspect computed animation, hash scroll and hover/focus behavior.
- [x] **Responsive:** 360px mobile, tablet, desktop, short viewport and enlarged text/zoom. Check horizontal overflow, text/control clipping and vertical scroll.
- [x] **No JavaScript:** Core copy, links, locale routes, FAQ and disabled downloads work without JS. Hash-preserving switch is progressive enhancement; explicit section links remain available.
- [x] **Metadata:** Per-locale title/description/canonical/hreflang, self-hosted share image, sitemap/robots and 404. Validate built output and HTTP assets.
- [x] **Performance:** Local mobile Lighthouse Performance >=90, CLS <=0.1 target. Record browser/version, throttling, URL, run count and actual results; local result is not field proof.
- [x] **Save and operation:** Relevant check → build → unit/browser checks, then local unit commits with task record. Record failures/unrun gates. User subsequently approved push, Actions deployment and automatic main-push releases. Keep one Astro publishing workflow with Node 24, static `dist` artifact and manual fallback. Document release, maintenance and rollback; no unrelated DNS changes.
- [x] **Public deployment:** Pages source is GitHub Actions, legacy Jekyll branch build does not run for the release, main push triggers the Astro workflow, CI Node satisfies Astro, build/deploy succeeds, and HTTPS/live EN/KO/routes/assets/links/download states are verified. Record run URL, deployed SHA and limitations separately from local results.

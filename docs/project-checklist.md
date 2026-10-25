# Project checklist

Read affected criteria before changes; recheck against actual artifacts afterward. Evidence and limitations live in `task.md` and `docs/verification.md`. Checked items represent local scope only.

- [ ] **Brand / R1:** DaGaLi Web, DaGaLi Client, DGL and exact `dDal gGak Life` in both locales. Check rendered text and metadata.
- [ ] **Content / R2–R3, R6:** Compare Client README/agent documentation; distinguish implementation, reported verification and release. No implied iOS release or ordinary-shell persistence.
- [ ] **Downloads / R4:** One configuration owns three dim native disabled buttons and future destinations; Apple numeric ID null, package `kim.jujin.dglc`, Desktop Releases URL preserved. Exercise pointer and keyboard; no navigation with JS disabled.
- [ ] **Navigation / R1, R5:** Header resource order/destinations, explicit `/` ↔ `/ko/` switch near brand, matching section hash, anchors, direct routes and 404. No automatic language redirect.
- [ ] **Stars / R5:** Build-only public API; valid positive/zero counts render. HTTP/JSON/invalid data/network/timeout omit count, preserve GitHub, finish build. Browser makes no API requests.
- [ ] **Architecture:** Astro static output; localized shared shape, layout/components/styles split, no backend/DB/login/credential collection/analytics. Check/build and inspect output/dependencies.
- [ ] **Accessibility:** Keyboard/visible focus/heading order/text alternatives/contrast, FAQ and landmarks; WCAG 2.2 AA target. Automated axe and manual browser checks; no unverified compliance claim.
- [ ] **Motion:** Connection and pane effects run once; reduced-motion static. Inspect computed animation, hash scroll and hover/focus behavior.
- [ ] **Responsive:** 360px mobile, tablet, desktop, short viewport and enlarged text/zoom. Check horizontal overflow, text/control clipping and vertical scroll.
- [ ] **No JavaScript:** Core copy, links, locale routes, FAQ and disabled downloads work without JS. Hash-preserving switch is progressive enhancement; explicit section links remain available.
- [ ] **Metadata:** Per-locale title/description/canonical/hreflang, self-hosted share image, sitemap/robots and 404. Validate built output and HTTP assets.
- [ ] **Performance:** Local mobile Lighthouse Performance >=90, CLS <=0.1 target. Record browser/version, throttling, URL, run count and actual results; local result is not field proof.
- [ ] **Save and operation:** Relevant check → build → unit/browser checks, then local unit commits with task record. Record failures/unrun gates. Manual-only Pages preparation, no push/activation/DNS/deployment. Document release, maintenance and rollback.

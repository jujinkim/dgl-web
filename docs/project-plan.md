# DaGaLi Web — approved project plan

Approved implementation source: the user's DaGaLi Web plan, supplied with an explicit implementation request on 2026-10-25. Development and local commits are authorized. Pushes, Pages activation, DNS changes, and public deployment are excluded.

## Purpose and ownership

Introduce **DaGaLi Client (DGL)** to people using AI coding agents through SSH and tmux on personal servers. Explain purpose, features, development evidence, GitHub, and unavailable downloads. Site name: **DaGaLi Web**. Name expansion: **`dDal gGak Life`**, preserving exact case. Target domain: `https://ddal.ggak.life`.

The user owns and approved branding, English/Korean routes, restrained terminal design, content scope, disabled downloads, Git/main/existing GitHub repository, Astro/GitHub Pages, no extra workflow skills, and operating boundaries. The assistant chooses internal component boundaries, CSS, types, test tools, and build procedures within that scope. One operator, no fixed deadline, no paid services, payments, advertising, or visitor analytics.

## Requirements and acceptance

| ID | Approved behavior | Evidence |
| --- | --- | --- |
| R1 | App name, exact name expansion, value, explicitly illustrative terminal; GitHub and Get App anchors | Both languages, browser and no-JS checks |
| R2 | Personal server → SSH → tmux → AI agent diagram; return to surviving server-side sessions | Source review and static diagram |
| R3 | Host management, session/window/pane navigation, desktop splits, Android input helpers, optional agent status integration | Reviewed Client README and agent-status documentation |
| R4 | Three dim, native disabled Apple App Store / Google Play / Desktop buttons; development notice | Pointer, keyboard, no-JS; shared configuration |
| R5 | Header right side in order: GitHub, star count when available, back to ggak.life, back to cozelsil.com | DOM order and navigation checks |
| R6 | FAQ: server prerequisites, tmux role, downloads, platform development/verification status | Both languages; native details elements |

English `/`, Korean `/ko/`, explicit language switch near branding, same section hash on switch, no automatic language redirect. Header resources wrap on small screens. Desktop destination remains `https://github.com/jujinkim/dgl-client/releases` in configuration while disabled. Planned package ID `kim.jujin.dglc`; numeric Apple App Store ID undecided, never guessed.

No sign-up, web SSH terminal, app distribution backend, DB, login, credentials collection, or hosted AI service. Do not imply iOS support/release, universal platform acceptance, ordinary SSH-shell persistence, or verified agent success from event badges.

## Design and architecture

Charcoal background, mint accent, restrained amber status, fine borders and generous spacing. System monospace for terminal; system sans-serif for Korean/body. Desktop hero pairs copy and preview; mobile stacks them. Preview is illustrative, not an app screenshot or live connection. CSS connection sequence and brief pane transition run once; reduced motion is static. Focus/hover use subtle light without heavy animation dependencies.

Astro static output with shared localized content structure, common layouts/components, separate CSS and minimal TypeScript for language hashes. Download state and destinations have one configuration owner. Source text is reviewed and saved, never copied from upstream at each build. Locale metadata, canonical/hreflang, share image, sitemap, robots and 404 included.

GitHub stars are fetched from public API at build time, with bounded timeout and validated count. Zero displays. Errors/timeouts omit only count link. GitHub remains. Explain that count is a build-time snapshot. No visitor-side GitHub requests.

Astro reduces localization/UI duplication at the cost of build dependencies. Use Astro 7 and Node >=22.23.4. Initial Astro 6 compatibility trial surfaced critical/high dependency advisories; upgraded before committing the foundation. Local verification uses a temporary npm-provided Node 22.23.4 runtime without changing host Node. Pin dependencies through lockfile. Keep existing `main` and `jujinkim/dgl-web`.

## Workflow comparison and decisions

No added workflow skills selected: single landing page and one operator can reuse this plan, checklist and task record. Spec Kit deferred: useful for requirement/design/task traceability, but adds setup and maintenance. OpenSpec deferred: useful for repeated change proposals, but limited gain here. Reconsider when collaboration or repeated shared app/web requirements grow. No installation/activation needed.

## Work units and release boundary

1. Save approved plan/checklist/task record; scaffold Astro and common locale routes. Check/build and local commit.
2. Implement reviewed content, terminal, flow, features, header, FAQ and Get App. Check/build/browser validation and local commit.
3. Exercise accessibility, responsive/no-JS behavior, stars/failure cases and mobile Lighthouse; write actual results and operating/rollback steps; local commit.
4. Future, separately authorized release: push, configure Pages/domain/DNS, inspect Actions and verify live HTTPS, locale paths, assets and links. Never equate push/build with live proof.

Store a manual-dispatch Pages workflow for review; do not activate or run it. Custom-domain configuration is local preparation, not evidence of domain control. Operator owns DNS/domain and release/recovery. Rollback uses previous verified commit, rebuild and separately authorized redeployment.

## Sources read

- [Startup guidelines v1, revision 8](https://kickoff.jujin.dev/ai/startup/latest.md), read 2026-10-25.
- [Assistant instructions](https://kickoff.jujin.dev/ai/instructions.md), read 2026-10-25. No catalog articles used.
- [Client README](https://github.com/jujinkim/dgl-client/blob/main/README.md), read 2026-10-25.
- [Client agent-status scope](https://github.com/jujinkim/dgl-client/blob/main/docs/AGENT_STATUS.md), read 2026-10-25.
- [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/), read 2026-10-25.

Source status: development candidate. Android 14–16 emulator validation; physical devices/network changes remain unverified. macOS ARM64 build/core SSH/tmux checked, actual GUI/Keychain acceptance pending. Windows x64 build/packaging path exists, native build/device acceptance pending. Linux future target; iOS not confirmed. tmux Control Mode range 3.3–3.7, actual 3.3a/3.7c server checks. Optional hooks have service/event-specific evidence, not general success guarantees. These are upstream-reported results, not app tests performed by this website task.

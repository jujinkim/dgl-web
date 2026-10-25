# DaGaLi Web — approved project plan

Approved implementation source: the user's DaGaLi Web plan, supplied with an explicit implementation request on 2026-10-25. Initial scope covered development and local commits. Subsequent user instructions authorized push, then GitHub Actions publication and main-push automatic releases. Unrelated DNS changes remain excluded. These later instructions supersede the original manual-only release boundary.

## Purpose and ownership

Introduce **DaGaLi Client (DGL)** as a tmux wrapper for session reconnection and management. Explain how to run AI coding agents in standard tmux sessions, manage them with DGL, and attach directly from a local terminal when needed. Built-in SSH provides remote access. tmux supplies the underlying session and persistence behavior. Explain features, development evidence, GitHub, and unavailable downloads. Site name: **DaGaLi Web**. Name expansion: **`dDal gGak Life`**, preserving exact case. Target domain: `https://ddal.ggak.life`.

The user owns and approved branding, English/Korean routes, restrained terminal design, content scope, disabled downloads, Git/main/existing GitHub repository, Astro/GitHub Pages, no extra workflow skills, and operating boundaries. The assistant chooses internal component boundaries, CSS, types, test tools, and build procedures within that scope. One operator, no fixed deadline, no paid services, payments, advertising, or visitor analytics.

## Requirements and acceptance

| ID  | Approved behavior                                                                                                             | Evidence                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| R1  | App name, exact name expansion, value, explicitly illustrative terminal; GitHub and Get App anchors                           | Both languages, browser and no-JS checks              |
| R2  | Start tmux → run agents → manage with DGL → reconnect; standard tmux also usable from a local terminal; SSH for remote access | User clarification, source review and static diagram  |
| R3  | Host management, session/window/pane navigation, desktop splits, Android input helpers, optional agent status integration     | Reviewed Client README and agent-status documentation |
| R4  | Three dim, native disabled Apple App Store / Google Play / Desktop buttons; development notice                                | Pointer, keyboard, no-JS; shared configuration        |
| R5  | Header right side in order: GitHub, star count when available, back to ggak.life, back to cozelsil.com                        | DOM order and navigation checks                       |
| R6  | FAQ: local/remote access, tmux and DGL roles, downloads, platform development/verification status                             | Both languages; native details elements               |

English `/`, Korean `/ko/`, explicit language switch near branding, same section hash on switch, no automatic language redirect. Header resources wrap on small screens. Desktop destination remains `https://github.com/jujinkim/dgl-client/releases` in configuration while disabled. Planned package ID `kim.jujin.dglc`; numeric Apple App Store ID undecided, never guessed.

No sign-up, web SSH terminal, app distribution backend, DB, login, credentials collection, or hosted AI service. Do not imply iOS support/release, universal platform acceptance, ordinary SSH-shell persistence, or verified agent success from event badges.

## Design and architecture

Charcoal background, mint accent, restrained amber status, fine borders and generous spacing. System monospace for terminal; system sans-serif for Korean/body. Desktop hero pairs copy and preview; mobile stacks them. Preview is illustrative, not an app screenshot or live connection. CSS connection sequence and brief pane transition run once; reduced motion is static. A sticky header keeps the locale switch reachable while reading, and measured scroll padding prevents anchor/focus targets from being covered. Bottom-of-page detection retains the FAQ section even when it cannot align with the viewport top. Focus/hover use subtle light without heavy animation dependencies.

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

Initially prepared a manual-dispatch Pages workflow. The user subsequently approved deploying through Actions and adding main-push releases. Keep `workflow_dispatch` for recovery and publish only Astro's generated `dist` artifact; replace legacy Jekyll branch deployment with workflow-based Pages. The built-in legacy workflow entry may remain visible in Actions history; it is not a second Astro publisher. Use Node 24 in CI: `node-version: '22'` resolved to unsupported 22.23.3 despite Astro requiring >=22.23.4. Custom-domain configuration alone is not evidence of live publication. Operator owns DNS/domain and release/recovery. Rollback uses a previous verified commit, rebuild and authorized redeployment.

## Sources read

- [Startup guidelines v1, revision 8](https://kickoff.jujin.dev/ai/startup/latest.md), read 2026-10-25.
- [Assistant instructions](https://kickoff.jujin.dev/ai/instructions.md), read 2026-10-25. No catalog articles used.
- [Client README](https://github.com/jujinkim/dgl-client/blob/main/README.md), read 2026-10-25.
- [Client agent-status scope](https://github.com/jujinkim/dgl-client/blob/main/docs/AGENT_STATUS.md), read 2026-10-25.
- [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/), read 2026-10-25.

Source status: development candidate. Android 14–16 emulator validation; physical devices/network changes remain unverified. macOS ARM64 build/core SSH/tmux checked, actual GUI/Keychain acceptance pending. Windows x64 build/packaging path exists, native build/device acceptance pending. Linux future target; iOS not confirmed. tmux Control Mode range 3.3–3.7, actual 3.3a/3.7c server checks. Optional hooks have service/event-specific evidence, not general success guarantees. These are upstream-reported results, not app tests performed by this website task.

## Approved landing revision — 2026-10-25

The user confirmed the deployed site and requested larger small text, Get App first, stronger SSH + tmux + AI coding agents positioning, and push after verification. In planning, the user selected Get App immediately after the header, before the hero, then approved implementation.

- Order: header → Get App → hero → workflow → features → FAQ. Get App leads section navigation and hero actions. Its product heading is the single h1; the hero becomes h2 with its existing visual size. Existing section IDs and locale routes remain valid; footer top links return to main.
- Shared rem-based sizes: 16px body, 17px lead, 14px controls/supporting text, 12px illustrative terminal at the default 16px root. Mobile retains these sizes; existing large heading sizes remain unchanged.
- Both locales prominently name SSH + tmux + AI coding agents. Copy addresses users already running agents in tmux; tmux navigation becomes the first feature. Download availability and platform claims remain unchanged.
- Verify check/build/unit/browser, responsive and enlarged text, heading order, navigation/no-JS and mobile performance. Push the verified commit to existing main, confirm remote synchronization, observe the existing Pages workflow, and inspect live EN/KO delivery separately.

## Product clarification and instructional workflow — 2026-10-25

The user's latest clarification supersedes the earlier SSH-first description and assumption that visitors already use tmux. DGL is a **tmux wrapper, session reconnector and manager**. SSH is an additional remote-access capability; standard tmux sessions can also be used directly from a local terminal. Attribute session persistence to tmux and navigation/reconnection/management to DGL. This does not add a new DGL local-terminal backend or change platform verification claims.

- Section 01 teaches a concrete sequence: start tmux, run AI agents inside it, use DGL to navigate sessions/windows/panes, reconnect with DGL or attach directly from a local terminal.
- Apply the same roles to both locales, hero, core line, features, FAQ, metadata and share card. The terminal illustration depicts a remote example, explicitly labeled as such.
- Preserve Get App ordering, type sizes, section IDs, disabled downloads, public API behavior and publication architecture. Verify the final copy in built and rendered EN/KO pages, then use the existing authorized main-push release and live checks.

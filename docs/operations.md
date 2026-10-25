# Maintenance, release and recovery

## Ownership and current boundary

The user operates the site and owns the domain, DNS, GitHub repository, deployment decisions and recovery. Initial authorization covered local implementation and commits. The user subsequently authorized push, GitHub Actions deployment and automatic main-push publication. Current work includes configuring and running that release path, plus live verification. Unrelated DNS changes remain outside scope. `astro.config.mjs`, `public/CNAME` and metadata prepare `https://ddal.ggak.life`; they do not prove domain control or live publication.

The repository remains `jujinkim/dgl-web`, branch `main`. `.github/workflows/pages.yml` runs on main pushes and manual dispatch. CI uses Node 24; selecting major 22 previously installed 22.23.3, below Astro's minimum 22.23.4. Pages Source must be GitHub Actions (`build_type: workflow`), publishing only `dist`. The GitHub-generated `pages-build-deployment` entry can remain visible in Actions history; GitHub rejects manually disabling that built-in workflow. With workflow-based Pages, legacy Jekyll builds are no longer the publication path. Do not create a second Astro deployment workflow. No paid service, backend, DB or secret is required. The build uses GitHub's public repository API without authentication. GitHub API outages/rate limits omit only the star count.

## Routine changes

1. Read affected items in `docs/project-checklist.md` and compare `task.md` with actual files.
2. Review current Client README and relevant feature documents. Update EN and KO together in `src/data/content.ts`; preserve distinctions between implementation, upstream-reported checks and public release. Record the review date in `src/data/site.ts`. Do not copy upstream text automatically during builds.
3. Keep brand expansion exactly `dDal gGak Life`, routes `/` and `/ko/`, matching section IDs, and existing external destinations.
4. Update `public/social-card.svg` and its 1200×630 PNG if branding changes. The PNG is a raster export of the repository SVG; no remote font or image dependency is used by visitors.
5. Use Node >=22.23.4. Run `npm ci`, then check → build → unit → relevant browser/build-state checks. Run `npm run perf` after layout/assets/font/motion changes affecting performance. All commands and browser setup are in README.
6. Record results and limitations, update checklist/task record, and commit the verified unit locally. Keep `artifacts/`, `dist/`, `test-results/` and dependencies untracked. Remote actions remain separately authorized.

Dependencies are lockfile-pinned. Review upgrades and `npm audit`; avoid forced major upgrades without reviewing compatibility. Astro 6 was rejected during initial setup because of reported critical/high dependency advisories. Astro 7 requires Node >=22.23.4; a temporary `npx --package=node@22.23.4` runtime can verify locally without replacing host Node.

## Downloads and release status

`src/data/site.ts` owns download availability and future destinations:

| Control         | Current state | Preserved destination                                                |
| --------------- | ------------- | -------------------------------------------------------------------- |
| Apple App Store | Disabled      | `null`; numeric store ID undecided                                   |
| Google Play     | Disabled      | Planned package `kim.jujin.dglc` in Play URL; not proof of a listing |
| Desktop         | Disabled      | `https://github.com/jujinkim/dgl-client/releases`                    |

Before enabling anything, confirm public release artifacts/listings and actual supported platforms with the operator. Update configuration, localized status copy, platform FAQ, review date, rendered control behavior and related tests together. An available download should render a link with the verified destination. Existing disabled-control tests intentionally fail when availability changes; update them to test the approved release behavior. Never infer iOS support or invent an Apple ID. Never claim that ordinary SSH shells preserve running work after disconnect.

## Deployment and subsequent releases

1. Verify repository remote/branch, clean local worktree, reviewed commit, and all applicable local checks. Inspect current Pages and DNS state read-only before changes. Confirm operator controls `ddal.ggak.life` and parent-domain DNS.
2. When authorized, push the verified commit. Confirm local SHA, remote branch SHA and repository synchronization. Push alone is not deployment proof.
3. When authorized, select GitHub Actions as the Pages source and configure the custom domain. Verify DNS against current GitHub Pages documentation; never guess record targets or replace unrelated records. The custom domain uses root routes, so Astro has no `/dgl-web` base prefix.
4. Push the reviewed `main` commit to trigger **Deploy DaGaLi Web to GitHub Pages**, or manually run that same workflow for recovery. It checks, tests, builds, uploads `dist` and deploys through GitHub Pages. It does not run browser or Lighthouse gates; those must have been checked locally for the release. The user approved the main-push trigger; a push to main now initiates publication. Avoid manually dispatching a duplicate run for a push that already triggered one.
5. Verify successful Actions **deployment**, Pages domain mapping and certificate. Then inspect live HTTPS responses and browser behavior at `/`, `/ko/`, a missing route, CSS/JS/favicon/share image/sitemap/robots, language and section links, disabled or newly approved download behavior, and external destinations. Verify `CNAME` output. Do not equate local measurements with field performance or WCAG conformance.
6. Record deployed SHA, Actions URL, time, live results and remaining gaps. Domain/HTTPS failures remain operator work until actual evidence confirms resolution.

## Rollback

1. Identify the last verified commit using `git log --oneline` and release records. Inspect its diff and applicable Node/dependency requirements.
2. For local investigation, create a separate worktree at that commit, install its lockfile, and rebuild/test there; preserve current work. Do not use destructive resets on a shared or dirty checkout.
3. For an approved public rollback, either deploy the last verified revision through an appropriately reviewed workflow run or create a normal revert commit on `main`, validate, push and redeploy within granted authority. Prefer an auditable revert when restoring mainline behavior; do not rewrite shared history.
4. Repeat live HTTPS/routes/assets/link checks and record restored SHA. GitHub Pages rollback does not repair DNS or certificate errors; investigate those separately with the operator.

## Verification limits

Local Chromium, axe and Lighthouse cover the recorded environment. Physical Android/iOS/macOS/Windows devices, assistive-technology review, all browsers, field traffic, domain ownership, DNS and public delivery remain separate evidence. This task introduces a website; it does not verify or release the Client application.

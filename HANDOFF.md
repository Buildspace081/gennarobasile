# Gennaro Basile website handoff

Last updated: 2026-09-17 — Visual identity switched from the dark cutting-mat theme to a bright, uniform-white theme with the Inter typeface; the header now shows fully decomposed navigation plus email/GitHub/LinkedIn/Substack icons; Experience was rebuilt with real, CV-confirmed roles ordered chronologically from the mechanical-engineering degree to the current Data Science master's (default-selected tab is now the most recent one) and its homepage block is now centred with margins on both sides; the homepage's separate "About" section was removed entirely (folded into Intro, which now links to `/about`); Byte.ml was removed from the site at the user's request.

## Current state

The repository contains a working static personal-brand MVP for `gennarobasile.com`. The npm package and local project directory are named `gennarobasile`. `npm run check` and `npm run build` pass; 11 pages and the Pagefind index are generated. The local development server runs at `http://127.0.0.1:4321/`. The Notion source of truth is “Personal Brand Website Product & Design Brief — v2”.

## Completed

- Lightweight personal-brand homepage with story, selectable experience, software, hardware and Buildspace081.
- Projects index and content-driven project case-study route.
- Study Library, Text Mining course page and individual resource route.
- About page covering the mechanical-engineering-to-Data-Science path and Buildspace081.
- Pagefind search page, sitemap, canonical metadata and basic Open Graph metadata.
- Responsive design tokens and reusable layout/card/navigation components.
- Typed MDX collections for projects and study resources.
- Honest seed content: one in-progress RAG case study, two labelled future projects, one course, one note and one draft notebook.
- Simplified homepage with one promise, two direct actions, three clearly labelled destinations and one featured project.
- Projects and Study indexes stripped of non-functional filters and reorganised around clear choices.
- Homepage sections now follow Intro, About, Experience, Software, Hardware and Buildspace081.
- Study content has been removed from the homepage and primary navigation; its routes remain available as a non-primary English technical archive.
- Desktop navigation uses section anchors; mobile navigation uses an accessible disclosure menu.
- Buildspace081 replaces the reference site's Art section and is prepared for future event photography and incubated founder projects.
- Gennaro Basile is now the site, SEO and portfolio identity; the footer and About narrative reflect this.
- English remains the language for site UI, study resources, notebooks and recruiter-facing documentation.
- Experience uses accessible keyboard-operable tabs, now covering five real, CV-confirmed chapters ordered chronologically: BSc Mechanical Engineering, Ecoindustria, Maserati, Stellantis, MSc Data Science (current, shown last).
- Buildspace081 is a concise homepage mention, positioned as the last section before the footer.
- Canonical site metadata targets `https://gennarobasile.com`.
- The first viewport reserves the left column for Gennaro's future portrait and starts the About introduction on the right; mobile stacks the portrait first.
- The header shows navigation beside the name and confirmed GitHub/contact actions on the right. Unconfirmed personal social links were removed rather than publishing generic destinations.
- The header now uses confirmed LinkedIn, Substack and email links plus a GitHub placeholder, as icon-only buttons at the far right; primary navigation stays fully inline (no dropdown) down to the `lg` (1024px) breakpoint — lowered from `xl` (1280px) so it does not collapse at common laptop widths.
- The site moved from the dark cutting-mat theme to a uniform white background with no grid texture, using Inter as the single site-wide typeface (headings, body, buttons and navigation). The accent palette is now: deep teal (`--color-blue`), warm amber/rust (`--color-orange`) and muted terracotta/clay (`--color-purple`, no violet). All colour and font changes are centralised in `global.css`; components consume them through Tailwind theme tokens, so no per-component colour edits were needed except fixing a few hardcoded dark-theme hex values (`ExperienceTabs` selected-tab background, footer background, `theme-color` meta).
- `ExperienceTabs` was rebuilt around real CV data (provided directly by Gennaro): MSc in Data Science (Federico II, 2025–Present), Stellantis via Teoresi Inc (Powertrain Validation Engineer Jan–Sep 2025, plus a prior OBD Calibration Engineer role Aug 2023–Dec 2024), Maserati via Teoresi SpA (Design Release Engineer, Electronic Brake Module, Mar 2022–Aug 2023), Ecoindustria Srl (Commissioning Engineer, Freight Cars, May–Nov 2021), and BSc in Mechanical Engineering (Federico II, 2012–2020). The tab list is ordered most-recent-first (reverse chronological), with the top/first tab (MSc in Data Science) selected by default. Each tab shows role/degree title, organisation, dates and location, plus real bullet points from the CV; a company with multiple roles (Stellantis) stacks them as separate dated blocks under one tab. Buildspace081 was removed from Experience (kept only as its own homepage section) at the user's request, "for now".
- The homepage Intro and About sections both carried an "/ About me" eyebrow and covered overlapping ground. Rather than just relabel them, the separate homepage "About" section (`#about`) was removed outright: Intro now carries the short bio plus the automotive-to-Data-Science summary line, ending in a "Read the full story →" link to `/about`. The header's "About" nav item was repointed from the (now gone) `/#about` anchor straight to the `/about` page. The `/about` page itself is unchanged and still holds the full, unabridged story.
- Added real dates (from the CV) into the homepage Intro and the `/about` page narrative: mechanical engineering 2012–2020, automotive validation 2021–2025 (Italy/Michigan), Data Science MSc since 2025.
- The Experience section's heading and tabs are now wrapped in a `mx-auto max-w-4xl` column instead of spanning the full 1180px shell, so the block reads as centred on the page with visible whitespace on both sides; the heading text is centred, the tab list/panel below it are not.
- Byte.ml was removed completely from the live site at the user's request: no homepage section, no primary-nav entry, no About page mention. The brand concept is documented as paused in `AGENTS.md` in case it returns later.

## Decisions and rationale

- Astro static output keeps a content-heavy portfolio fast and deployable without a database.
- Tailwind 4 handles composition while global CSS owns brand tokens and editorial typography.
- Projects and study use separate collections because their statuses and metadata differ.
- Pagefind avoids a search backend or CMS.
- Low information density is now a permanent UX rule: one primary message per viewport and no decorative or inactive controls.
- Project cards and interactive panels use one consistent translucent surface rather than section-sized colour blocks.
- Deeper exam/project work may link directly to GitHub for now; a separate minimal navigation site can be considered later.

## Implemented routes

`/`, `/projects`, `/projects/[slug]`, `/study`, `/study/text-mining`, `/study/text-mining/[resource]`, `/about`, `/search`.

## Principal files

`src/content.config.ts`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/components/**`, `src/pages/**`, `src/content/**`, `AGENTS.md`, `README.md`, `astro.config.mjs`, and `package.json`.

## Known issues and temporary assumptions

- The header GitHub link is still a placeholder (`github.com/Buildspace081`); the footer also still points at that placeholder GitHub URL. Confirm Gennaro's real personal GitHub URL before launch.
- Current courses and academic-year labels are assumptions from the brief.
- Project filters are visually specified but not interactive; search works after a production build.
- The production URL is `https://gennarobasile.com`; whether it should resolve with `www` remains open.
- Project posters use the brand system and numbering rather than final illustrations.
- No deployment configuration or analytics exists yet.
- Astro currently reports non-blocking Zod deprecation hints in `src/content.config.ts`; the production build also reports MDX directive warnings from generated Astro content modules.

## Open decisions

- Confirm the real personal GitHub URL and whether the canonical domain includes `www`.
- Decide if/when Byte.ml should return to the site, and in what form.
- Choose the first real repository URL and evidence for RAG Field Notes.
- Confirm current courses, semester labels and first publishable notebook.
- Decide whether final posters use photography, diagrams or bespoke illustrations.
- Provide Buildspace081 event photography and incubated founder projects.

## Priorities and next steps

1. Replace generic social destinations with confirmed URLs.
2. Confirm course names and replace assumptions with current study data.
3. Add the first real project repository, screenshots and evaluation evidence.
4. Perform dedicated 360/768/1280 px QA once final content and imagery are present.
5. Configure Vercel after the domain and Git remote are confirmed.

## Run and verify

```sh
npm install
npm run check
npm run build
npm run dev
```

Verify keyboard navigation, reduced motion, 360/768/1280 px layouts, generated routes, Pagefind results, external destinations and that no unverified claim appears as fact.

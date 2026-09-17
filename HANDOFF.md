# Gennaro Basile website handoff

Last updated: 2026-09-17 — Visual identity switched from the dark cutting-mat theme to a bright, uniform-white theme with the Inter typeface, and the header now shows fully decomposed navigation plus email/GitHub/LinkedIn/Substack icons.

## Current state

The repository contains a working static personal-brand MVP for `gennarobasile.com`. The npm package and local project directory are named `gennarobasile`. `npm run check` and `npm run build` pass; 11 pages and the Pagefind index are generated. The local development server runs at `http://127.0.0.1:4321/`. The Notion source of truth is “Personal Brand Website Product & Design Brief — v2”.

## Completed

- Lightweight personal-brand homepage with story, selectable experience, software, hardware, Byte.ml and Buildspace081.
- Projects index and content-driven project case-study route.
- Study Library, Text Mining course page and individual resource route.
- About page with explicit Byte.ml/Buildspace081 separation.
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
- Byte.ml has a dedicated homepage section as an Italian-language, Instagram-first AI education project.
- English remains the language for site UI, study resources, notebooks and recruiter-facing documentation.
- The full site uses one continuous, softly animated cutting-mat grid. Large alternating background blocks were removed; spacing, headings, gradient rules and scroll-entry fades create separation.
- Experience now uses accessible keyboard-operable tabs for Data Science, automotive engineering and Buildspace081.
- Byte.ml and Buildspace081 are concise, balanced homepage mentions. Byte.ml links to Instagram; selected video posters may be added later.
- Canonical site metadata targets `https://gennarobasile.com`.
- The first viewport reserves the left column for Gennaro's future portrait and starts the About introduction on the right; mobile stacks the portrait first.
- The header shows navigation beside the name and confirmed GitHub/contact actions on the right. Unconfirmed personal social links were removed rather than publishing generic destinations.
- The header now uses confirmed LinkedIn, Substack and email links plus a GitHub placeholder, as icon-only buttons at the far right; primary navigation stays fully inline (no dropdown) down to the `xl` breakpoint.
- The site moved from the dark cutting-mat theme to a uniform white background with no grid texture, using Inter as the single site-wide typeface (headings, body, buttons and navigation). The accent palette is now: deep teal (`--color-blue`), warm amber/rust (`--color-orange`) and muted terracotta/clay (`--color-purple`, no violet). All colour and font changes are centralised in `global.css`; components consume them through Tailwind theme tokens, so no per-component colour edits were needed except fixing a few hardcoded dark-theme hex values (`ExperienceTabs` selected-tab background, footer background, `theme-color` meta).

## Decisions and rationale

- Astro static output keeps a content-heavy portfolio fast and deployable without a database.
- Tailwind 4 handles composition while global CSS owns brand tokens and editorial typography.
- Projects and study use separate collections because their statuses and metadata differ.
- Pagefind avoids a search backend or CMS.
- Low information density is now a permanent UX rule: one primary message per viewport and no decorative or inactive controls.
- Project cards and interactive panels use one consistent translucent surface rather than section-sized colour blocks.
- Byte.ml content and documentation do not live inside this portfolio. Deeper exam/project work may link directly to GitHub now; a separate minimal navigation site can be considered later.

## Implemented routes

`/`, `/projects`, `/projects/[slug]`, `/study`, `/study/text-mining`, `/study/text-mining/[resource]`, `/about`, `/search`.

## Principal files

`src/content.config.ts`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `src/components/**`, `src/pages/**`, `src/content/**`, `AGENTS.md`, `README.md`, `astro.config.mjs`, and `package.json`.

## Known issues and temporary assumptions

- Exact GitHub, LinkedIn and personal Instagram URLs are not confirmed; footer links use top-level destinations.
- Byte.ml currently links to `https://www.instagram.com/byte.ml/`; confirm the handle before launch.
- Current courses and academic-year labels are assumptions from the brief.
- Project filters are visually specified but not interactive; search works after a production build.
- The production URL is `https://gennarobasile.com`; whether it should resolve with `www` remains open.
- Project posters use the brand system and numbering rather than final illustrations.
- No deployment configuration or analytics exists yet.
- Astro currently reports non-blocking Zod deprecation hints in `src/content.config.ts`; the production build also reports MDX directive warnings from generated Astro content modules.

## Open decisions

- Confirm social/profile links, the Byte.ml Instagram handle and whether the canonical domain includes `www`.
- Choose the first real repository URL and evidence for RAG Field Notes.
- Confirm current courses, semester labels and first publishable notebook.
- Decide whether final posters use photography, diagrams or bespoke illustrations.
- Confirm employer names, role dates and publishable experience details before replacing the general experience copy.
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

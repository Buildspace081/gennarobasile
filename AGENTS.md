# gennarobasile.com repository instructions

Read this file and `HANDOFF.md` before changing the project. The latest explicit user instruction takes precedence; this file defines permanent rules; `HANDOFF.md` records current operational state.

## Product and voice

This repository is the source for `gennarobasile.com`, Gennaro Basile's English-language personal website and professional portfolio. It connects his mechanical-engineering and automotive-validation background with Data Science, AI, software, future robotics and Buildspace081. The primary audience is recruiters, hiring managers, AI/ML professionals, builders and international collaborators. Write in direct, precise, human English. Be ambitious without claiming expertise, results or credentials that are not evidenced.

Gennaro Basile is the parent brand. Buildspace081 is a separate Naples builder community and receives a concise homepage treatment as the final section before the footer. Keep the two identities distinct.

Byte.ml (Gennaro's Italian-language, Instagram-first AI education project) has been removed from the site for now at the user's request — no homepage section, navigation entry or About page mention. Do not reintroduce it without an explicit new instruction.

## Stack and architecture

- Astro 7, TypeScript strict mode, static output.
- Tailwind CSS 4 through `@tailwindcss/vite`; global tokens and prose rules live in `src/styles/global.css`.
- MDX and Astro Content Collections with Zod schemas in `src/content.config.ts`.
- Pagefind indexes the production build; sitemap uses `@astrojs/sitemap`.
- `src/pages`: route entry points. Dynamic project and study routes are generated from content.
- `src/layouts/BaseLayout.astro`: canonical metadata, shared header/footer and document shell.
- `src/components`: reusable UI. Prefer extending these over duplicating card or navigation markup.
- `src/content/projects`: project MDX. `src/content/study`: courses, notes, notebooks, papers and related projects.
- `public`: static assets only. `dist` and `.astro` are generated and must not be hand-edited.

## Naming and content rules

Use PascalCase for Astro components, kebab-case for routes, content filenames and URL slugs, and camelCase for TypeScript variables. Every content entry must validate against its collection schema. Dates use ISO `YYYY-MM-DD`. Never fabricate project outcomes, metrics, GitHub URLs, demos, employers or credentials. Future work must be visibly labelled `coming soon` or `draft`. New content must be possible through MDX without editing page components.

## Design rules

The visual concept is a clean, bright personal engineering portfolio: readability and recruiter scannability come first. The background is one continuous, uniform white (`--color-paper`); do not add grid patterns, textures or alternating section background blocks. Separate sections with generous vertical space, explicit headings, subtle gradient rules and restrained scroll-entry fades. Use consistent light neutral surfaces only for contained content such as project cards. The site is currently monochrome by explicit user instruction: `--color-purple`, `--color-blue` and `--color-orange` all resolve to the same near-black as `--color-ink` in `global.css`, so `text-blue`/`text-orange`/`text-purple`/`border-*`/`bg-*` utility classes still work but render black — do not reintroduce distinct accent colors (teal, amber, terracotta or otherwise) without an explicit new instruction. Use bold weight (not colour) to create emphasis and hierarchy. Body and UI text use Inter, a friendly, highly legible sans-serif; do not reintroduce a serif or mixed-font system.

Keep information density deliberately low. Each viewport should have one primary message or action. The homepage sequence is Intro, Experience (a short teaser only), Software, Hardware and Buildspace081 (last, before the footer); there is no separate homepage "About" section — the Intro carries the short bio plus a "Read the full story" link to `/about`, and the header's "About" nav item links directly to `/about`. The homepage Experience section is intentionally minimal by the user's own choice: since his past experience (mechanical engineering, automotive validation) is not the work he is now pursuing (Data Science/AI), the homepage only shows a short teaser paragraph plus a "See the full path →" link to `/about#experience`; the full `ExperienceTabs` breakdown (real, CV-confirmed roles, most-recent-first, education and roles interleaved, current Data Science master's selected by default) lives on the `/about` page, not the homepage. Any homepage or shared-component content that is centred in a narrower column (such as this teaser, or a future full block) should read as its own centred block with visible margins on both sides rather than stretched edge to edge. The first viewport uses a two-column personal introduction on desktop: a reserved portrait area on the left and the opening bio on the right. The header keeps the name and primary navigation fully decomposed inline on the left (never collapsed into a dropdown on desktop) and social/contact icons (email, GitHub, LinkedIn, Substack) at the far right; on mobile the portrait stacks above the introduction and the nav collapses into a disclosure menu only below the `lg` breakpoint. Study resources must not appear on the homepage or primary navigation; existing study routes remain a non-primary technical archive. Do not display controls, filters or metadata unless they are useful and functional.

Do not add generic purple-blue gradients, glassmorphism, glowing globes, stock robots, fake terminals, decorative circuit boards, excessive neural-network graphics, SaaS card walls, colour accents ("AI slop" colour) or motion that delays navigation. The personal name is primary. Reuse `BaseLayout`, `Header`, `ExperienceTabs`, `ProjectCard` and `ResourceCard`.

## Accessibility, responsive design, SEO and performance

Use semantic landmarks and heading order, visible keyboard focus, descriptive labels and links, and never rely on colour alone. Maintain WCAG AA contrast. All interactions must work with keyboard and reduced motion. Design mobile-first; test around 360, 768 and 1280 px. Every public page needs a unique title and description through `BaseLayout`. Images require meaningful alt text, dimensions and optimized formats. Avoid client-side frameworks unless real interaction needs an island.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Type/content check: `npm run check`
- Production build + search index: `npm run build`
- Preview: `npm run preview`

## Git and protected content

Before pushing, run `git status`, `git remote -v`, `git branch --show-current`, `git config user.name`, `git config user.email`, `gh auth status` when available, and `git push --dry-run`. Use repository-local identity; never change global Git identity. Never commit secrets, `.env` files, private data or unlicensed datasets.

Do not modify or remove user-authored content, brand assets, `AGENTS.md`, `HANDOFF.md`, content schemas, or deployment configuration without checking the request and preserving intent. Never overwrite existing MDX merely to make examples consistent. `package-lock.json` changes must correspond to deliberate dependency changes.

## Definition of done

A change is complete only when relevant routes render, `npm run check` and `npm run build` pass, keyboard and mobile behavior have been considered, visible copy contains no fabricated claims or broken placeholder links, content schemas remain documented, and `HANDOFF.md` is updated. Update this file when permanent architecture, commands or conventions change.

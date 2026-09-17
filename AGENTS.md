# gennarobasile.com repository instructions

Read this file and `HANDOFF.md` before changing the project. The latest explicit user instruction takes precedence; this file defines permanent rules; `HANDOFF.md` records current operational state.

## Product and voice

This repository is the source for `gennarobasile.com`, Gennaro Basile's English-language personal website and professional portfolio. It connects his mechanical-engineering and automotive-validation background with Data Science, AI, software, future robotics, Byte.ml and Buildspace081. The primary audience is recruiters, hiring managers, AI/ML professionals, builders and international collaborators. Write in direct, precise, human English. Be ambitious without claiming expertise, results or credentials that are not evidenced.

Gennaro Basile is the parent brand. Byte.ml is his Italian-language, Instagram-first AI education project and appears only as a concise homepage mention with an Instagram link and, later, selected video posters. Do not build a Byte.ml content archive inside this portfolio. A separate minimal documentation site may be considered later; until then, deeper exam/project material may link directly to GitHub. Buildspace081 is a separate Naples builder community and receives the same concise homepage treatment. Keep all three identities distinct.

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

The visual concept is “personal engineering studio on a maker's cutting mat.” The background must remain one continuous, homogeneous soft green technical grid across the full page: never alternate large section background blocks. Separate sections with generous vertical space, explicit headings, subtle gradient rules and restrained scroll-entry fades. Use consistent translucent surfaces only for contained content such as project cards. Use the Ink, Paper, Purple, Blue, Orange, Line and Muted tokens defined in `global.css`.

Keep information density deliberately low. Each viewport should have one primary message or action. The homepage sequence is Intro, About, Experience, Software, Hardware, Byte.ml and Buildspace081. The first viewport uses a two-column personal introduction on desktop: a reserved portrait area on the left and the opening About narrative on the right. The header places primary navigation beside the name and confirmed contact links at the far right; on mobile the portrait stacks above the introduction. Study resources must not appear on the homepage or primary navigation; existing study routes remain a non-primary technical archive. Experience uses accessible selectable panels. Do not display controls, filters or metadata unless they are useful and functional.

Do not add generic purple-blue gradients, glassmorphism, glowing globes, stock robots, fake terminals, decorative circuit boards, excessive neural-network graphics, SaaS card walls or motion that delays navigation. The personal name is primary; Byte.ml branding belongs only to its project context. Reuse `BaseLayout`, `Header`, `ExperienceTabs`, `ProjectCard` and `ResourceCard`.

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

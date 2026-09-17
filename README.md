# Gennaro Basile — personal website

Gennaro Basile's personal portfolio: experience, software and AI projects, future hardware/robotics work, Byte.ml and Buildspace081. Technical documentation and study resources are published in English; Byte.ml is the Italian-language AI education project.

## Setup

```sh
npm install
npm run dev
```

Use `npm run check` for Astro/content validation and `npm run build` for the production site plus Pagefind search index.

## Content workflow

Projects live in `src/content/projects`; courses, notes and notebooks live in `src/content/study`. Each Markdown or MDX file starts with frontmatter validated by `src/content.config.ts`.

To add a project, copy an existing project file, choose a unique kebab-case filename, complete every required field and write the case study below the frontmatter. Never claim results that are not evidenced. Use `coming soon` for a future idea.

To add a study resource, copy an existing study file. Use the exact course title consistently so related resources group correctly. Choose `course`, `note`, `notebook`, `paper` or `project` for `type`, then add topics, academic year, semester, status and dates. New content generates routes at build time; page components should not need editing.

See `AGENTS.md` for permanent repository rules and `HANDOFF.md` for current status and next steps.

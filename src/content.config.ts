import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), summary: z.string(), status: z.enum(['experiment','university project','in progress','shipped','coming soon']),
    year: z.number(), topics: z.array(z.string()), stack: z.array(z.string()), featured: z.boolean().default(false),
    accent: z.enum(['purple','blue','orange']).default('purple'), githubUrl: z.string().url().optional(), demoUrl: z.string().url().optional(),
    relatedCourse: z.string().optional(), order: z.number().default(99), publishedDate: z.coerce.date(), updatedDate: z.coerce.date(),
  }),
});

const study = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/study' }),
  schema: z.object({
    title: z.string(), summary: z.string(), type: z.enum(['course','note','notebook','paper','project']), course: z.string(),
    module: z.string().optional(), topics: z.array(z.string()), academicYear: z.string(), semester: z.string(),
    status: z.enum(['draft','ready','published']), difficulty: z.enum(['introductory','intermediate','advanced']).default('intermediate'),
    order: z.number().default(99), publishedDate: z.coerce.date(), updatedDate: z.coerce.date(), githubUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, study };

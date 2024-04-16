import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default("Anonymous"),
    language: z.enum(['vi', 'en']),
    date: z.string().transform((str) => new Date(str)),
  })
});

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['vi', 'en']),
    date: z.string().transform((str) => new Date(str)),
  })
});

export const collections = {
  'blog': blogCollection,
  'legal': legalCollection,
}

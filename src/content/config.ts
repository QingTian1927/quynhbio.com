import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().default("Anonymous"),
    language: z.enum(['vi', 'en']),
    date: z.string().transform((str) => new Date(str)).default((new Date()).toISOString()),

    bannerImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),

    tags: z.array(z.string()),
    relatedPosts: z.array(reference('blog')).optional(),
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

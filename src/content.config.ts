import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts: one Markdown file per post in src/content/blog/. Files starting with _ are ignored.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    side: z.enum(['law', 'games']),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

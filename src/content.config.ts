import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Koleksi data proyek coding (Markdown)
const coding = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/coding" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Web App', 'Desktop', 'Mobile Game', '3D Animation']),
    techStack: z.array(z.string()),
    thumbnail: z.string(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.string(),
  }),
});

// Koleksi data video editing (JSON)
const editing = defineCollection({
  loader: file("src/content/editing/shorts.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    platform: z.enum(['YouTube Shorts', 'TikTok', 'Instagram Reels']),
    videoEmbedUrl: z.string().url(),
    thumbnail: z.string(),
    toolsUsed: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = { coding, editing };
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    link_demo: z.string().url(),
    tecnologias: z.array(z.string()),
  }),
});

export const collections = { projects };

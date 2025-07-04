import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string(),
    imgs: z.object({
      main: z.string(),
      others: z.array(z.string()).optional(),
    }),
    link_demo: z.string().url(),
    tecnologias: z.array(z.string()),
    esPersonal: z.boolean(),
    approach: z.string().optional(),
    order: z.number(),
    active: z.boolean(),
    deliverables: z.array(z.object({
      title: z.string(),
      description: z.string(),
      img: z.string().optional(),
    })).min(1),
  }),
});

export const collections = { projects };

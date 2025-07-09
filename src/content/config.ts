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
    links: z.object({
      demo: z.string().url().optional(),
      github: z.string().url().optional(),
    }),
    tecnologias: z.array(z.string()),
    esPersonal: z.boolean(),
    approach: z.string().optional(),
    order: z.number(),
    active: z.boolean(),
    deliverables: z.array(z.object({
      title: z.string(),
      description: z.string(),
      img: z.string().optional(),
      features: z.array(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        })
      ).optional(),
      technologies: z.array(z.string()).optional(),
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
        icon: z.string().optional(),
      })).optional(),
    })).min(1).max(3),
  }),
});

export const collections = { projects };

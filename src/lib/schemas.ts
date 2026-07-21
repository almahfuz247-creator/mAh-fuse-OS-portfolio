import { z } from "zod";

export const ProjectStatus = z.enum(["shipped", "wip", "idea", "archived"]);

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  status: ProjectStatus,
  role: z.string(),
  tools: z.array(z.string()),
  year: z.number(),
  summary: z.string(),
  goal: z.string(),
  modules: z.array(z.object({ name: z.string(), detail: z.string() })),
  diagnostics: z.array(z.string()),
  outputs: z.array(z.string()),
  signalRouting: z.array(z.string()),
  cover: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ContactSchema = z.object({
  name: z.string().min(2, "name required (min 2 chars)").max(80),
  email: z.string().email("invalid email"),
  message: z
    .string()
    .min(10, "message too short (min 10 chars)")
    .max(2000, "message too long (max 2000 chars)"),
  company: z.string().max(0).optional(), // honeypot
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const ResumeGateSchema = z.object({
  email: z.string().email("invalid email"),
  company: z.string().max(0).optional(),
});

export type ResumeGateInput = z.infer<typeof ResumeGateSchema>;
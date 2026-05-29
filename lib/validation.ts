import { z } from "zod";
import { services } from "./services";

// Build a non-empty tuple of allowed service slugs (z.enum requires the literal
// tuple type, not a plain string[]).
const serviceSlugs = [
  ...services.map((s) => s.slug),
  "other",
] as unknown as [string, ...string[]];

// Server-side schema is the source of truth. The client form mirrors these rules
// and shows inline errors; the server re-validates before doing anything real.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  region: z
    .string()
    .trim()
    .max(200, "Please keep this under 200 characters.")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceSlugs, {
    errorMap: () => ({ message: "Please choose a service." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few sentences about your situation.")
    .max(4000, "Message is too long. Please keep it under 4000 characters."),
  // Honeypot — bots fill every field; humans never see this one.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

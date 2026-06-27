import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Tell me your name (at least 2 characters)."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Add a short subject line."),
  message: z.string().min(10, "Write a little more — at least 10 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

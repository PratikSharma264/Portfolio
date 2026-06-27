"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";
import { contactSchema, type ContactInput } from "@/lib/schemas";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="contact"
          title="Let's talk about an internship, role, or project."
          description="Whether it's an internship, a research collaboration, or a freelance build — I read every message myself."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 hover:border-amber/50"
              >
                <Mail className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="text-sm text-text-hi">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 hover:border-amber/50"
              >
                <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="text-sm text-text-hi">{profile.phone}</span>
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
                <MapPin className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="text-sm text-text-hi">{profile.location}</span>
              </div>
              <div className="rounded-lg border border-moss/30 bg-moss-soft p-4">
                <p className="flex items-center gap-2 font-mono text-xs text-moss">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                  {profile.availability}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-text-hi">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name && (
                    <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-text-hi">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-text-hi">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Internship opportunity / project idea / ..."
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-danger">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-text-hi">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="What are you working on?"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-danger">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send message"}
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5 text-sm text-moss"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Message sent.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5 text-sm text-danger"
                  >
                    <AlertCircle className="h-4 w-4" aria-hidden="true" /> Something went
                    wrong — email me directly instead.
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

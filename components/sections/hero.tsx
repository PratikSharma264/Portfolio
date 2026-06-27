"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2, FileDown, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { useTypewriter } from "@/lib/use-typewriter";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PipelineTrace } from "@/components/ui/pipeline-trace";
import { cn } from "@/lib/utils";

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="topo-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
              </span>
              <Eyebrow>{profile.availability}</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-hi text-balance sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-3 h-8 font-mono text-lg text-amber sm:text-xl"
            >
              {role}
              <span className="ml-0.5 animate-pulse">_</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-lo sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-5 flex items-center gap-1.5 font-mono text-xs text-text-lo"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className={cn(buttonVariants({ variant: "accent", size: "lg" }), "group")}
              >
                View projects
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={profile.resumeUrl}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                [Resume]
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="text-text-lo hover:text-amber"
              >
                <Code2 className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="text-text-lo hover:text-amber"
              >
                <Briefcase className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl border border-border p-8">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-amber/40 bg-amber-soft font-display text-3xl font-semibold text-amber">
                {profile.initials}
              </div>
              <p className="mt-5 text-center font-mono text-xs text-text-lo">
                research focus
              </p>
              <p className="mt-1 text-center font-display text-lg text-text-hi">
                Retrieval-Augmented Generation
              </p>
              <div className="mt-6 flex justify-center">
                <PipelineTrace />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

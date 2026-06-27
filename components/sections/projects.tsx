"use client";

import { useState } from "react";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const filters: { id: "all" | Project["category"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web" },
];

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  research: "Research",
};

const accentVariant: Record<Project["accent"], "amber" | "glacier" | "moss"> = {
  amber: "amber",
  glacier: "glacier",
  moss: "moss",
};

export function Projects() {
  const [active, setActive] = useState<"all" | Project["category"]>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="projects"
            title="Things I've built."
            description="From a research-grade RAG diagnostic system to a full-stack marketplace — each one chosen because it forced a different kind of hard problem."
          />
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex shrink-0 flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={cn(
                  "rounded-md border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors",
                  active === f.id
                    ? "border-amber text-amber"
                    : "border-border text-text-lo hover:text-amber",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface transition-colors hover:border-amber/50">
                <div
                  className={cn(
                    "flex h-28 items-center justify-between rounded-t-xl border-b border-border px-5",
                    project.accent === "amber" && "bg-amber-soft",
                    project.accent === "glacier" && "bg-glacier-soft",
                    project.accent === "moss" && "bg-moss-soft",
                  )}
                >
                  <span className="font-mono text-[11px] text-text-lo">
                    proj/{project.slug.split("-")[0]}
                  </span>
                  <Badge variant={accentVariant[project.accent]}>
                    {statusLabel[project.status]}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-text-hi">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-lo">{project.tagline}</p>

                  <p className="mt-4 text-sm leading-relaxed text-text-hi">
                    {project.description}
                  </p>

                  {project.pipeline && (
                    <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-text-lo">
                      {project.pipeline.map((step, idx) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded border border-border px-1.5 py-0.5">
                            {step}
                          </span>
                          {idx < project.pipeline!.length - 1 && (
                            <span aria-hidden="true">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="eyebrow">features</p>
                    <ul className="mt-2 space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm leading-snug text-text-hi">
                          <span className="text-amber">·</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="neutral">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-text-lo">
                      <span className="font-medium text-text-hi">Challenge — </span>
                      {project.challenges}
                    </p>
                    <p className="text-text-lo">
                      <span className="font-medium text-text-hi">Impact — </span>
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
                      >
                        <Code2 className="h-3.5 w-3.5" aria-hidden="true" /> Code
                      </a>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 font-mono text-xs text-text-lo/60">
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> Demo coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

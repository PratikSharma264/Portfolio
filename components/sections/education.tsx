import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="education" title="Academic background." />

        <div className="mt-10 space-y-6">
          {education.map((entry) => (
            <Reveal key={entry.degree}>
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber/40 bg-amber-soft text-amber">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text-hi">
                        {entry.degree}
                      </h3>
                      <p className="text-sm text-text-lo">
                        {entry.institution} · {entry.location}
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-text-lo">
                    {entry.start} — {entry.end}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="eyebrow">relevant coursework</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {entry.coursework.map((c) => (
                      <Badge key={c} variant="neutral">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

const typeLabel = {
  internship: "Internship",
  freelance: "Freelance",
  volunteer: "Volunteer",
  research: "Research",
};

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="experience"
          title="Internships, research roles, and freelance work."
        />

        <div className="mt-10 space-y-0">
          {experience.map((entry, i) => (
            <Reveal key={entry.role + i} delay={i * 0.05}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 shrink-0 rounded-full border-2 border-amber bg-surface" />
                  {i < experience.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-semibold text-text-hi">
                      {entry.role}
                    </h3>
                    <Badge variant="amber">{typeLabel[entry.type]}</Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-text-lo">
                    {entry.org} · {entry.location}
                  </p>
                  <p className="font-mono text-xs text-text-lo">
                    {entry.start} — {entry.end}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.points.map((point) => (
                      <li key={point} className="text-sm text-text-hi">
                        <span className="text-amber">·</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

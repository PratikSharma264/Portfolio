import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications, achievements } from "@/lib/data";

export function CredentialsAndAchievements() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="certifications & achievements"
          title="Credentials and milestones."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div id="achievements">
            <p className="eyebrow flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> certifications
            </p>
            <div className="mt-4 space-y-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name + i} delay={i * 0.05}>
                  <a
                    href={cert.link}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-4 transition-colors hover:border-amber/50"
                  >
                    <div>
                      <p className="text-sm font-medium text-text-hi">{cert.name}</p>
                      <p className="text-xs text-text-lo">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-text-lo" aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow flex items-center gap-2">
              <Award className="h-3.5 w-3.5" aria-hidden="true" /> achievements
            </p>
            <div className="mt-4 space-y-3">
              {achievements.map((item, i) => (
                <Reveal key={item.title + i} delay={i * 0.05}>
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-text-hi">{item.title}</p>
                      <p className="shrink-0 font-mono text-[11px] text-text-lo">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-xs text-text-lo">{item.org}</p>
                    <p className="mt-1.5 text-sm text-text-hi">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

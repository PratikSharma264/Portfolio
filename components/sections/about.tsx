import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { profile, education } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const primaryEducation = education[0];

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <Eyebrow>about</Eyebrow>
        <div className="mt-3 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-hi sm:text-4xl">
              Applied AI, end to end — not just the model.
            </h2>
            <div className="mt-6 space-y-4">
              {profile.bio.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-text-lo">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-8 rounded-lg border border-border bg-surface p-5">
              <p className="eyebrow">goals</p>
              <p className="mt-2 text-sm leading-relaxed text-text-hi">
                {profile.goals}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="eyebrow">currently</p>
              <p className="mt-2 font-display text-lg text-text-hi">
                {primaryEducation.degree}
              </p>
              <p className="text-sm text-text-lo">{primaryEducation.institution}</p>
              <p className="mt-1 font-mono text-xs text-text-lo">
                {primaryEducation.start} – {primaryEducation.end}
              </p>

              <div className="hairline my-5" />

              <p className="eyebrow">strengths</p>
              <ul className="mt-3 space-y-2.5">
                {profile.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-text-hi">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber"
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

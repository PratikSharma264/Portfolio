import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="testimonials" title="What people I've worked with say." />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.06}>
              <figure className="h-full rounded-xl border border-border bg-surface p-6">
                <Quote className="h-5 w-5 text-amber" aria-hidden="true" />
                <blockquote className="mt-3 text-sm leading-relaxed text-text-hi">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs text-text-lo">
                  {t.name} — {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

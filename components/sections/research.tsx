import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { researchInterests, publications } from "@/lib/data";

const statusVariant = {
  published: "moss",
  "under-review": "glacier",
  "in-progress": "amber",
} as const;

const statusLabel = {
  published: "Published",
  "under-review": "Under review",
  "in-progress": "In progress",
};

export function Research() {
  return (
    <section id="research" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="research"
          title="Where I want to spend the next few years."
          description="Centered on making retrieval-based AI systems reliable enough to trust in domains where a wrong answer actually costs something."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-amber">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-text-hi">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-lo">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="eyebrow">publications &amp; ongoing work</p>
          <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-base text-text-hi">{pub.title}</p>
                  <p className="text-sm text-text-lo">
                    {pub.venue} · {pub.date}
                  </p>
                </div>
                <Badge variant={statusVariant[pub.status]}>{statusLabel[pub.status]}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

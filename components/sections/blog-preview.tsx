import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/data";
import { formatMonthYear, readingTime } from "@/lib/utils";

export function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="writing"
            title="Notes from building this stuff."
            description="Short write-ups on RAG, big data, and the full-stack work that surrounds applied ML."
          />
          <Link
            href="/blog"
            className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
          >
            All posts <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-amber/50"
              >
                <Badge variant="glacier" className="self-start">
                  {post.category}
                </Badge>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-hi group-hover:text-amber">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-lo">
                  {post.excerpt}
                </p>
                <p className="mt-4 font-mono text-[11px] text-text-lo">
                  {formatMonthYear(post.date)} · {readingTime(post.content.join(" ").split(" ").length)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

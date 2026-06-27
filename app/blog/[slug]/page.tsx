import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { formatMonthYear, readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const prev = blogPosts[index - 1];
  const next = blogPosts[index + 1];

  return (
    <article className="pt-16">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <Link
          href="/blog"
          className="flex items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> All posts
        </Link>

        <div className="mt-6 flex items-center gap-2">
          <Badge variant="glacier">{post.category}</Badge>
          <span className="font-mono text-[11px] text-text-lo">
            {formatMonthYear(post.date)} ·{" "}
            {readingTime(post.content.join(" ").split(" ").length)}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-hi sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base text-text-lo">{post.excerpt}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <Badge key={t} variant="neutral">
              #{t}
            </Badge>
          ))}
        </div>

        <div className="hairline my-8" />

        <div className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-hi">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="hairline my-10" />

        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="flex items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="flex items-center gap-1.5 text-right font-mono text-xs text-text-lo hover:text-amber"
            >
              {next.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

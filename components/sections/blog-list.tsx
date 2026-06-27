"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts, blogCategories, blogTags } from "@/lib/data";
import { formatMonthYear, readingTime, cn } from "@/lib/utils";

const PAGE_SIZE = 4;

export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery = `${post.title} ${post.excerpt}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = !category || post.category === category;
      const matchesTag = !tag || post.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [query, category, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetToPageOne<T>(setter: (v: T) => void) {
    return (v: T) => {
      setter(v);
      setPage(1);
    };
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-lo"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(e) => resetToPageOne(setQuery)(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search posts"
            className="pl-9"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => resetToPageOne(setCategory)(null)}
          className={cn(
            "rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide",
            !category ? "border-amber text-amber" : "border-border text-text-lo hover:text-amber",
          )}
        >
          All categories
        </button>
        {blogCategories.map((c) => (
          <button
            key={c}
            onClick={() => resetToPageOne(setCategory)(category === c ? null : c)}
            className={cn(
              "rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide",
              category === c
                ? "border-amber text-amber"
                : "border-border text-text-lo hover:text-amber",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {blogTags.map((t) => (
          <button
            key={t}
            onClick={() => resetToPageOne(setTag)(tag === t ? null : t)}
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px]",
              tag === t
                ? "border-glacier text-glacier"
                : "border-border text-text-lo hover:text-glacier",
            )}
          >
            #{t}
          </button>
        ))}
      </div>

      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-surface">
        {paged.length === 0 && (
          <p className="p-8 text-center text-sm text-text-lo">
            No posts match your filters yet.
          </p>
        )}
        {paged.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.04}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 p-6 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="glacier">{post.category}</Badge>
                  <span className="font-mono text-[11px] text-text-lo">
                    {formatMonthYear(post.date)}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold text-text-hi group-hover:text-amber">
                  {post.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-text-lo">{post.excerpt}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-text-lo">
                {readingTime(post.content.join(" ").split(" ").length)}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-current={page === p}
              className={cn(
                "h-8 w-8 rounded-md font-mono text-xs",
                page === p
                  ? "bg-amber text-bg"
                  : "border border-border text-text-lo hover:text-amber",
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

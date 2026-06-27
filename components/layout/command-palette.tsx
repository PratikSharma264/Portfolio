"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Command } from "lucide-react";
import { navLinks, projects, blogPosts } from "@/lib/data";

type Item = {
  label: string;
  sub?: string;
  action: () => void;
  group: "Navigate" | "Projects" | "Blog";
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items: Item[] = useMemo(() => {
    const nav: Item[] = navLinks.map((l) => ({
      label: l.label,
      group: "Navigate",
      action: () => {
        if (l.href.startsWith("/")) router.push(l.href);
        else window.location.href = l.href;
      },
    }));
    const proj: Item[] = projects.map((p) => ({
      label: p.title,
      sub: p.tagline,
      group: "Projects",
      action: () => router.push(`/#projects`),
    }));
    const posts: Item[] = blogPosts.map((p) => ({
      label: p.title,
      sub: p.category,
      group: "Blog",
      action: () => router.push(`/blog/${p.slug}`),
    }));
    return [...nav, ...proj, ...posts];
  }, [router]);

  const filtered = items.filter((item) =>
    `${item.label} ${item.sub ?? ""}`.toLowerCase().includes(query.toLowerCase()),
  );

  const groups: Item["group"][] = ["Navigate", "Projects", "Blog"];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs text-text-lo transition-colors hover:border-amber hover:text-amber md:flex"
      >
        <Search className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="font-mono">Search</span>
        <span className="ml-2 flex items-center gap-0.5 rounded border border-border px-1 font-mono text-[10px]">
          <Command className="h-2.5 w-2.5" aria-hidden="true" />K
        </span>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[90] bg-black/40"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-describedby={undefined}>
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="glass fixed left-1/2 top-[18%] z-[91] w-[90vw] max-w-lg -translate-x-1/2 rounded-xl border border-border shadow-2xl"
                >
                  <Dialog.Title className="sr-only">
                    Search the site
                  </Dialog.Title>
                  <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                    <Search className="h-4 w-4 text-text-lo" aria-hidden="true" />
                    <input
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Jump to a section, project, or post…"
                      className="w-full bg-transparent text-sm text-text-hi placeholder:text-text-lo focus:outline-none"
                    />
                    <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-text-lo">
                      esc
                    </kbd>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-2">
                    {filtered.length === 0 && (
                      <p className="px-3 py-6 text-center text-sm text-text-lo">
                        Nothing matches “{query}”.
                      </p>
                    )}
                    {groups.map((group) => {
                      const groupItems = filtered.filter((i) => i.group === group);
                      if (groupItems.length === 0) return null;
                      return (
                        <div key={group} className="mb-1">
                          <p className="px-3 pt-2 pb-1 font-mono text-[10px] uppercase tracking-wide text-text-lo">
                            {group}
                          </p>
                          {groupItems.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => {
                                item.action();
                                setOpen(false);
                                setQuery("");
                              }}
                              className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm text-text-hi hover:bg-surface-2"
                            >
                              <span>
                                {item.label}
                                {item.sub && (
                                  <span className="ml-2 text-xs text-text-lo">
                                    {item.sub}
                                  </span>
                                )}
                              </span>
                              <ArrowRight
                                className="h-3.5 w-3.5 text-text-lo"
                                aria-hidden="true"
                              />
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}

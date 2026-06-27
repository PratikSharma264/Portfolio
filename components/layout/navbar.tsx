"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { CommandPalette } from "./command-palette";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-text-hi"
        >
          {profile.initials}
          <span className="text-amber">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-text-lo transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <CommandPalette />
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-hi md:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild forceMount>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[90] bg-black/40 md:hidden"
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount aria-describedby={undefined}>
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                      className="fixed inset-y-0 right-0 z-[91] flex w-[78vw] max-w-xs flex-col bg-surface p-6 md:hidden"
                    >
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="font-mono text-xs uppercase tracking-wide text-text-lo">
                          Menu
                        </Dialog.Title>
                        <Dialog.Close asChild>
                          <button
                            aria-label="Close menu"
                            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-hi"
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </Dialog.Close>
                      </div>
                      <div className="mt-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="font-display text-xl text-text-hi hover:text-amber"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}

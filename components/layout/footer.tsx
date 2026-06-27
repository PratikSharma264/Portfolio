import Link from "next/link";
import { Briefcase, Code2, Mail, FileDown } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-hi">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-text-lo">
              {profile.title} based in {profile.location}, building applied
              AI and full-stack systems.
            </p>
          </div>

          <div>
            <p className="eyebrow">{"// navigate"}</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-lo hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">{"// connect"}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-sm text-text-lo hover:text-amber"
                >
                  <Code2 className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-sm text-text-lo hover:text-amber"
                >
                  <Briefcase className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-text-lo hover:text-amber"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  className="flex items-center gap-2 text-sm text-text-lo hover:text-amber"
                >
                  <FileDown className="h-3.5 w-3.5" aria-hidden="true" /> [Resume]
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-text-lo">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-lo">
            built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

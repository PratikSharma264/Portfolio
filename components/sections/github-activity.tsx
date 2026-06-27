import { Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function GithubActivity() {
  return (
    <section id="github" className="border-t border-border">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="open source" title="What I've been shipping on GitHub." />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-text-lo hover:text-amber"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />@{profile.githubUsername}
          </a>
        </div>

        <Reveal className="mt-8 overflow-hidden rounded-xl border border-border bg-surface p-5">
          {/* Public, tokenless contribution-graph service — swap for the
              real GitHub GraphQL API + a server token if you want live,
              first-party data instead. */}
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/e8a33d/${profile.githubUsername}`}
              alt={`${profile.name}'s GitHub contribution graph`}
              width={873}
              height={150}
              className="min-w-[700px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.05} className="overflow-hidden rounded-xl border border-border bg-surface p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_title=true&theme=transparent&text_color=8b92a3&icon_color=e8a33d&title_color=eceef2&border_color=262c37`}
              alt={`${profile.name}'s GitHub stats`}
              loading="lazy"
              className="w-full"
            />
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-xl border border-border bg-surface p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_title=true&theme=transparent&text_color=8b92a3&title_color=eceef2&border_color=262c37`}
              alt={`${profile.name}'s most-used languages`}
              loading="lazy"
              className="w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

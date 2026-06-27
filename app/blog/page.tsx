import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogList } from "@/components/sections/blog-list";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on retrieval-augmented generation, big data, and Backend machine learning, written while building real projects.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="blog"
          title="Writing on AI, RAG, and the stack around it."
          description="Search, filter by category or tag, and dig in."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <BlogList />
          <div className="lg:pt-1">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}

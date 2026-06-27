import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16">
      <div className="mx-auto max-w-md px-4 text-center">
        <p className="font-mono text-sm text-amber">404 / retrieval miss</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text-hi">
          Nothing was retrieved for that query.
        </h1>
        <p className="mt-3 text-sm text-text-lo">
          This page doesn&apos;t exist, or it moved. Try the homepage instead.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6")}
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

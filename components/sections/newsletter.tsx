"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-amber" aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-text-hi">
          Get new posts by email
        </p>
      </div>
      <p className="mt-1 text-sm text-text-lo">
        Occasional notes on RAG, big data, and full-stack ML. No spam.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        noValidate
      >
        <div className="flex-1">
          <Input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" variant="primary" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? "Subscribing…" : "Subscribe"}
        </Button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-xs text-moss">Subscribed — thanks for reading.</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-danger">Something went wrong. Try again?</p>
      )}
    </div>
  );
}

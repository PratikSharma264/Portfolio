import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] leading-5",
  {
    variants: {
      variant: {
        neutral: "border-border text-text-lo",
        amber: "border-amber/40 bg-amber-soft text-amber",
        glacier: "border-glacier/40 bg-glacier-soft text-glacier",
        moss: "border-moss/40 bg-moss-soft text-moss",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

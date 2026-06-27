import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a date string like "2025-08" into "Aug 2025". Pass full ISO dates too. */
export function formatMonthYear(value: string) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month ?? 1) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function readingTime(words: number) {
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

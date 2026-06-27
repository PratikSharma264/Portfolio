"use client";

import { motion } from "framer-motion";

export function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-text-hi">{name}</span>
        <span className="font-mono text-xs text-text-lo">{level}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-amber"
        />
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

import { CaseStudy } from "@/config/portfolio";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const statusColors: Record<string, string> = {
  Completed: "bg-green-500/10 text-green-600 dark:text-green-400",
  "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Planning: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const categoryGradients: Record<string, string> = {
  pendidikan:
    "from-emerald-500/20 via-teal-500/10 to-cyan-500/20 dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-cyan-500/10",
  industri:
    "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 dark:from-violet-500/10 dark:via-purple-500/5 dark:to-fuchsia-500/10",
};

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg w-full h-full"
    >
      <div
        className={cn(
          "relative h-44 w-full bg-gradient-to-br",
          categoryGradients[study.category]
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className="text-xs font-medium">Case Study Preview</span>
          </div>
        </div>

        <div className="absolute right-3 top-3">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm",
              statusColors[study.status]
            )}
          >
            {study.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {study.title || "Studi Kasus Desain"}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {study.description || "Eksplorasi antarmuka dan riset pengalaman pengguna untuk kebutuhan produk digital."}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

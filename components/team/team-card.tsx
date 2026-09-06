"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { TeamMember } from "@/config/team";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg w-full h-full"
    >
      <div className="relative mb-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
          <span className="font-heading text-3xl font-bold text-primary">
            {initials}
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-card bg-green-500" />
      </div>

      <h3 className="font-heading text-lg font-semibold leading-tight">
        {member.name}
      </h3>
      <span className="mt-1.5 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {member.role}
      </span>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {member.bio}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link
          href={member.linkedin}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "h-9 w-9 rounded-full p-0"
          )}
          aria-label={`LinkedIn ${member.name}`}
        >
          <Icons.linkedin className="h-4 w-4" />
        </Link>
        <Link
          href={member.github}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "h-9 w-9 rounded-full p-0"
          )}
          aria-label={`GitHub ${member.name}`}
        >
          <Icons.gitHub className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

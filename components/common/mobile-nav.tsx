import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onClose?: () => void;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children, onItemClick, onClose }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-2xl border border-border bg-popover p-6 text-popover-foreground shadow-lg">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => onClose?.()}
        >
          <span className={cn(norican.className, "text-2xl font-bold")}>
            {siteConfig.teamName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm gap-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              onClick={(e) => {
                if (onItemClick) {
                  onItemClick(e, item.href);
                } else {
                  onClose?.();
                }
              }}
              className={cn(
                "flex w-full items-center rounded-lg p-2.5 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2 border-t border-border">{children}</div> : null}
      </div>
    </div>
  );
}

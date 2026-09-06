"use client";

import { motion } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (targetId === "beranda") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setShowMobileMenu(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-4 md:gap-10">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2"
          >
            <span className={cn(norican.className, "text-2xl sm:text-3xl")}>
              {siteConfig.teamName}
            </span>
          </Link>
        </motion.div>

        {!isHomePage && (
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "flex items-center gap-1 text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            )}
          >
            <Icons.chevronLeft className="h-3.5 w-3.5" />
            <span>Beranda</span>
          </Link>
        )}
      </div>

      {isHomePage && items?.length ? (
        <>
          <nav className="hidden gap-6 md:flex items-center">
            {items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.disabled ? "#" : item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-foreground text-foreground/70",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Menu"
          >
            {showMobileMenu ? <Icons.close /> : <Icons.menu />}
          </motion.button>
        </>
      ) : null}

      {showMobileMenu && isHomePage && items && (
        <MobileNav
          items={items}
          onItemClick={handleAnchorClick}
          onClose={() => setShowMobileMenu(false)}
        >
          {children}
        </MobileNav>
      )}
    </div>
  );
}

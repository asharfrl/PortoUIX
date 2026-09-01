import { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { teamMembers } from "@/config/team";
import {
  educationCaseStudies,
  industryCaseStudies,
} from "@/config/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  return (
    <ClientPageWrapper>
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          {/* <AnimatedText delay={0.1}>
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 mb-4">
              <span className="text-4xl">✨</span>
            </div>
          </AnimatedText> */}

          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.teamName}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {siteConfig.course}   {siteConfig.semester}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Crafting intuitive digital experiences bridging the gap between educational needs and industrial standards.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href="/portfolio/pendidikan"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Explore Education
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href="/portfolio/industri"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Explore Industry
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Industry Sector
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Creating scalable and conversion-optimized interfaces for modern businesses.
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {industryCaseStudies.slice(0, 2).map((study) => (
            <div
              key={study.id}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 h-32 w-full rounded-lg bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 dark:from-violet-500/10 dark:via-purple-500/5 dark:to-fuchsia-500/10 flex items-center justify-center">
                <span className="text-muted-foreground/30 text-sm font-medium">
                  {study.title} Overview
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {study.description}
              </p>
            </div>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link
            href="/portfolio/industri"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-xl"
            )}
          >
            View Full Case Studies
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Education Sector
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Designing accessible and engaging platforms to elevate learning experiences.
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {educationCaseStudies.slice(0, 2).map((study) => (
            <div
              key={study.id}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 h-32 w-full rounded-lg bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-cyan-500/10 flex items-center justify-center">
                <span className="text-muted-foreground/30 text-sm font-medium">
                  {study.title} Overview
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {study.description}
              </p>
            </div>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link
            href="/portfolio/pendidikan"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-xl"
            )}
          >
            View Full Case Studies
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Behind the Designs
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Meet the researchers, strategists, and designers driving these experiences.
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {teamMembers.map((member) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            return (
              <div
                key={member.id}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                  <span className="font-heading text-lg font-bold text-primary">
                    {initials}
                  </span>
                </div>
                <h3 className="font-heading text-xs sm:text-sm font-semibold leading-tight">
                  {member.name}
                </h3>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  {member.role}
                </span>
              </div>
            );
          })}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link
            href="/team"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-xl"
            )}
          >
            Meet the Team
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

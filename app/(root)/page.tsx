"use client";

import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { ContactForm } from "@/components/forms/contact-form";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { teamMembers } from "@/config/team";
import {
  educationCaseStudies,
  industryCaseStudies,
} from "@/config/portfolio";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";

export default function IndexPage() {
  const { t } = useLanguage();

  return (
    <ClientPageWrapper>
      <section
        id="beranda"
        className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-[calc(100vh-4rem)] flex items-center scroll-mt-20"
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.teamName}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            {t.hero.subtitle}
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href="#pendidikan"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {t.hero.exploreEducation}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href="#industri"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                {t.hero.exploreIndustry}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Link href="#industri" aria-label="Scroll to Industry Sector">
              <Icons.chevronDown className="h-6 w-6 mt-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </AnimatedText>
        </div>
      </section>

      <AnimatedSection
        id="industri"
        direction="up"
        className="container space-y-6 py-10 my-14 scroll-mt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.industrySection.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.industrySection.description}
          </AnimatedText>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-5xl w-full">
          {industryCaseStudies.slice(0, 2).map((study, index) => (
            <div
              key={study.id}
              className="w-full sm:w-[calc(50%-0.75rem)] max-w-lg"
            >
              <CaseStudyCard study={study} index={index} />
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
            {t.industrySection.viewFull}
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        id="pendidikan"
        direction="up"
        className="container space-y-6 bg-muted/60 py-10 my-14 rounded-3xl scroll-mt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.educationSection.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.educationSection.description}
          </AnimatedText>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-5xl w-full">
          {educationCaseStudies.slice(0, 2).map((study, index) => (
            <div
              key={study.id}
              className="w-full sm:w-[calc(50%-0.75rem)] max-w-lg"
            >
              <CaseStudyCard study={study} index={index} />
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
            {t.educationSection.viewFull}
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        id="tim"
        direction="up"
        className="container space-y-6 py-10 my-14 scroll-mt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.teamSection.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.teamSection.description}
          </AnimatedText>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-4 max-w-4xl w-full">
          {teamMembers.map((member) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            const memberKey = member.id.replace("-", "") as "member1" | "member2" | "member3" | "member4";
            const localizedMember = t.teamMembers[memberKey];
            return (
              <div
                key={member.id}
                className="flex w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] min-w-[150px] max-w-[200px] flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:shadow-md"
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
                  {localizedMember?.role || member.role}
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
            {t.teamSection.viewFull}
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        id="kontak"
        direction="up"
        className="container space-y-6 bg-muted/60 py-12 my-14 rounded-3xl scroll-mt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.contactSection.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.contactSection.description}
          </AnimatedText>
        </div>

        <div className="mx-auto max-w-xl w-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <ContactForm />
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

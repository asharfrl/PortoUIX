"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import PortfolioHeader from "@/components/portfolio/portfolio-header";
import { industryCaseStudies } from "@/config/portfolio";
import { useLanguage } from "@/providers/language-provider";

export default function PortfolioIndustriPage() {
  const { t } = useLanguage();

  return (
    <ClientPageWrapper>
      <AnimatedSection direction="up" className="container space-y-12 py-10 my-14">
        <PortfolioHeader
          title={t.pages.industryTitle}
          description={t.pages.industryDesc}
        />

        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-6xl w-full">
          {industryCaseStudies.map((study, index) => (
            <div
              key={study.id}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
            >
              <CaseStudyCard study={study} index={index} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

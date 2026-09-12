"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import PortfolioHeader from "@/components/portfolio/portfolio-header";
import { educationCaseStudies } from "@/config/portfolio";
import { useLanguage } from "@/providers/language-provider";

export default function PortfolioPendidikanPage() {
  const { t } = useLanguage();

  return (
    <ClientPageWrapper>
      <AnimatedSection direction="up" className="container space-y-12 py-10 my-14">
        <PortfolioHeader
          title={t.pages.educationTitle}
          description={t.pages.educationDesc}
        />

        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-6xl w-full">
          {educationCaseStudies.map((study, index) => (
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

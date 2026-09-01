import { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import PortfolioHeader from "@/components/portfolio/portfolio-header";
import { pagesConfig } from "@/config/pages";
import { educationCaseStudies } from "@/config/portfolio";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.portfolioPendidikan.metadata.title,
  description: pagesConfig.portfolioPendidikan.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/portfolio/pendidikan`,
  },
};

export default function PortfolioPendidikanPage() {
  return (
    <ClientPageWrapper>
      <AnimatedSection direction="up" className="container space-y-12 py-10 my-14">
        {/* Header */}
        <PortfolioHeader
          title={pagesConfig.portfolioPendidikan.title}
          description={pagesConfig.portfolioPendidikan.description}
          icon=""
        />

        {/* Case Studies Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationCaseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

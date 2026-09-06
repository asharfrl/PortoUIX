import { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import TeamCard from "@/components/team/team-card";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { teamMembers } from "@/config/team";

export const metadata: Metadata = {
  title: pagesConfig.team.metadata.title,
  description: pagesConfig.team.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/team`,
  },
};

export default function TeamPage() {
  return (
    <ClientPageWrapper>
      <AnimatedSection direction="up" className="container space-y-12 py-10 my-14">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h1"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl"
          >
            {pagesConfig.team.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.team.description}
          </AnimatedText>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-8 max-w-5xl w-full">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="w-full sm:w-[calc(50%-1rem)] max-w-md"
            >
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}

import { AnimatedText } from "@/components/common/animated-text";

interface PortfolioHeaderProps {
  title: string;
  description: string;
  icon: string;
}

export default function PortfolioHeader({
  title,
  description,
  icon,
}: PortfolioHeaderProps) {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      <span className="text-5xl">{icon}</span>
      <AnimatedText
        as="h1"
        className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl"
      >
        {title}
      </AnimatedText>
      <AnimatedText
        as="p"
        delay={0.2}
        className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
      >
        {description}
      </AnimatedText>
    </div>
  );
}

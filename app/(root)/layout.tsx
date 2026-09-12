import { LanguageToggle } from "@/components/common/language-toggle";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-200">
        <div className="container flex h-16 items-center justify-between gap-4">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ModeToggle />
            </div>
          </MainNav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container flex-1 pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

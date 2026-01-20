import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ScientificValidationSection } from "@/components/sections/ScientificValidationSection";
import { LanguageOptimizationSection } from "@/components/sections/LanguageOptimizationSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <StatsSection />
      <UseCasesSection />
      <ScientificValidationSection />
      <LanguageOptimizationSection />
      <TechnologySection />
      <CTASection />
    </div>
  );
}
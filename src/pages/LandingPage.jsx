import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { BenefitsSection } from "../components/landing/BenefitsSection";
import { CallToActionSection } from "../components/landing/CallToActionSection";
import { FooterSection } from "../components/landing/FooterSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}

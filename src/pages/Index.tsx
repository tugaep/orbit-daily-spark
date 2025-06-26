
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Orbit, Circle, CircleDot } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <LanguageSwitcher />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

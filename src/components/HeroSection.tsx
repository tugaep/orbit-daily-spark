import { Button } from "@/components/ui/button";
import { Orbit } from "lucide-react";
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-[#004aad] via-blue-600 to-blue-800 text-white">
      {/* Animated background orbitals */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full animate-spin" style={{
        animationDuration: '20s'
      }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-white/20 rounded-full animate-spin" style={{
        animationDuration: '15s',
        animationDirection: 'reverse'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-white/15 rounded-full animate-spin" style={{
        animationDuration: '25s'
      }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/83ef859e-9641-44b2-bd9a-6693c223303f.png" alt="Orbit Logo" className="w-20 h-20 animate-pulse" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Orbit
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Smart Digital Daily Planner
          </p>
          
          {/* Description */}
          <p className="text-lg lg:text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            Enhance your day with smart personal suggestions, AI planning, and maximize your effectiveness with intelligent daily optimization.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <Button size="lg" className="bg-white text-[#004aad] hover:bg-blue-50 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">Information</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#004aad] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
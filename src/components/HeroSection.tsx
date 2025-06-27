import { Button } from "@/components/ui/button";
import { Orbit, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const handleWatchDemo = () => {
    window.open("https://youtu.be/qkpnPx0HrzA", "_blank");
  };

  const handleInfoClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    // Ses dosyasını çal
    const audio = new Audio('/uploads/around-world.mp3');
    audio.play().catch(error => {
      console.log('Ses çalınamadı:', error);
    });
    
    // Tıklama animasyonu başlat
    setIsSpinning(true);
    setSpinCount(prev => prev + 1);
    
    // 2 saniye sonra animasyonu durdur
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  // Hover efekti için smooth geçiş
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#004aad] via-blue-600 to-blue-800 text-white">
      {/* Custom CSS for spin animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes customSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .custom-spin {
            animation: customSpin 2s linear infinite;
          }
        `
      }} />
      
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
            <div className="relative group">
              <img
                src="/uploads/83ef859e-9641-44b2-bd9a-6693c223303f.png"
                alt="Orbit Logo"
                className={`w-60 h-60 cursor-pointer transition-all duration-300 ${
                  isSpinning ? 'custom-spin' : 
                  isHovered ? 'animate-pulse' : ''
                } ${isHovered ? 'scale-110' : 'scale-100'}`}
                style={{
                  boxShadow: isHovered ? '0 0 30px rgba(255, 255, 255, 0.5)' : 'none'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleLogoClick}
              />
              
              {/* Tıklama efekti için ripple */}
              {isSpinning && (
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
              )}
              
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            orbit
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('hero.tagline')}
          </p>
          
          <p className="text-lg lg:text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
            {t('hero.description')}
          </p>
          
          {/* Updated CTA Buttons with new design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-white to-blue-50 text-[#004aad] hover:from-blue-50 hover:to-white font-bold px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 transform border-2 border-white/30 group overflow-hidden"
              onClick={handleInfoClick}
            >
              <span className="relative z-10">{t('hero.information')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="relative border-3 border-white/80 bg-transparent backdrop-blur-sm text-white hover:bg-white/10 font-bold px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 transform group overflow-hidden"
              onClick={handleWatchDemo}
            >
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                  <Play className="w-5 h-5 transition-transform group-hover:scale-125" />
                </div>
                <span>{t('hero.watchDemo')}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 border border-white/50 rounded-full animate-pulse"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

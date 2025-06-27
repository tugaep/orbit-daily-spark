import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  
  const handleFormRedirect = () => {
    window.open("https://forms.gle/aVr2nhrNbWfoxEYA9", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#004aad] to-blue-700">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-8">
              <div className="flex flex-col items-center">
                <Button 
                  size="lg" 
                  className="bg-[#004aad] hover:bg-blue-700 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 mb-4"
                  onClick={handleFormRedirect}
                >
                  {t('cta.joinWaitlist')}
                </Button>
                <p className="text-sm text-gray-500">
                  {t('cta.beFirstToKnow')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/d36a75ae-fe2f-42ba-9c29-77dc6b99dd66.png" 
                  alt={t('cta.qrCodeAlt')}
                  className="w-32 h-32 mb-2"
                />
                <p className="text-sm text-gray-500">
                  {t('cta.scanToJoin')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;

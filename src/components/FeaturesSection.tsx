import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Orbit, Circle, CircleDot, Brain, Target, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-[#004aad]" />,
      title: t('features.aiPlanning.title'),
      description: t('features.aiPlanning.description')
    },
    {
      icon: <CircleDot className="w-12 h-12 text-[#004aad]" />,
      title: t('features.smartSuggestions.title'),
      description: t('features.smartSuggestions.description')
    },
    {
      icon: <Target className="w-12 h-12 text-[#004aad]" />,
      title: t('features.effectiveness.title'),
      description: t('features.effectiveness.description')
    },
    {
      icon: <Zap className="w-12 h-12 text-[#004aad]" />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: <Orbit className="w-12 h-12 text-[#004aad]" />,
      title: t('features.integration.title'),
      description: t('features.integration.description')
    },
    {
      icon: <Circle className="w-12 h-12 text-[#004aad]" />,
      title: t('features.mobile.title'),
      description: t('features.mobile.description')
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#004aad]/20 group"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

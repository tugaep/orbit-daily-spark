
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.tagline': 'Smart Digital Daily Planner',
    'hero.description': 'Enhance your day with smart personal suggestions, AI planning, and maximize your effectiveness with intelligent daily optimization.',
    'hero.information': 'Information',
    'hero.watchDemo': 'Watch Demo',
    
    // Features (you can add these when you have the FeaturesSection)
    'features.title': 'Features',
    
    // CTA Section
    'cta.title': 'Ready to Get Started?',
    'cta.description': 'Join thousands of users who are already optimizing their daily productivity.',
    
    // Footer
    'footer.aboutUs': 'About Us',
  },
  tr: {
    // Hero Section
    'hero.tagline': 'Akıllı Dijital Günlük Planlayıcı',
    'hero.description': 'Akıllı kişisel öneriler, AI planlama ile gününüzü geliştirin ve akıllı günlük optimizasyon ile etkinliğinizi maksimuma çıkarın.',
    'hero.information': 'Bilgi',
    'hero.watchDemo': 'Demo İzle',
    
    // Features
    'features.title': 'Özellikler',
    
    // CTA Section
    'cta.title': 'Başlamaya Hazır mısın?',
    'cta.description': 'Günlük verimliliklerini optimize eden binlerce kullanıcıya katıl.',
    
    // Footer
    'footer.aboutUs': 'Hakkımızda',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

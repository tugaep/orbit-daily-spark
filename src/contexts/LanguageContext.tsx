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
    'hero.tagline': 'your own digital daily planner',
    'hero.description': 'Enhance your day with smart personal suggestions, AI planning, and maximize your effectiveness with intelligent daily optimization.',
    'hero.information': 'Information',
    'hero.watchDemo': 'About Video',
    
    // Features
    'features.title': 'Why Choose orbit?',
    'features.subtitle': 'Experience the future of personal productivity with our intelligent planning system',
    'features.aiPlanning.title': 'AI-Powered Planning',
    'features.aiPlanning.description': 'Let artificial intelligence optimize your daily schedule based on your habits, priorities, and goals for maximum productivity.',
    'features.smartSuggestions.title': 'Smart Suggestions',
    'features.smartSuggestions.description': 'Receive personalized recommendations for tasks, breaks, and activities that align with your energy levels and objectives.',
    'features.effectiveness.title': 'Effectiveness Maximization',
    'features.effectiveness.description': 'Track and analyze your productivity patterns to continuously improve your daily effectiveness and achieve your goals faster.',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.description': 'Get detailed insights into your productivity trends, time usage patterns, and performance metrics with beautiful visualizations.',
    'features.integration.title': 'Seamless Integration',
    'features.integration.description': 'Connect with your favorite tools and apps to create a unified productivity ecosystem that works perfectly together.',
    'features.mobile.title': 'Mobile-First Design',
    'features.mobile.description': 'Access your daily planner anywhere, anytime with our responsive mobile app designed for on-the-go productivity.',
    
    // CTA Section
    'cta.title': 'Ready to Get Started?',
    'cta.description': 'Join thousands of users who are already optimizing their daily productivity.',
    'cta.joinWaitlist': 'Join the Waitlist',
    'cta.beFirstToKnow': 'Be the first to know',
    'cta.qrCodeAlt': 'QR Code for Orbit signup form',
    'cta.scanToJoin': 'Scan to join waitlist',
    
    // Footer
    'footer.aboutUs': 'About Us',
  },
  tr: {
    // Hero Section
    'hero.tagline': 'Sizin Özel Akıllı Dijital Günlük Planlayıcınız',
    'hero.description': 'Akıllı kişisel öneriler, AI planlama ile gününüzü geliştirin ve akıllı günlük optimizasyon ile etkinliğinizi maksimuma çıkarın.',
    'hero.information': 'Bilgi',
    'hero.watchDemo': 'Video İzle',
    
    // Features
    'features.title': 'Neden orbit?',
    'features.subtitle': 'Akıllı planlama sistemimizle kişisel verimliliğin geleceğini deneyimleyin',
    'features.aiPlanning.title': 'AI Destekli Planlama',
    'features.aiPlanning.description': 'Yapay zeka, alışkanlıklarınıza, önceliklerinize ve hedeflerinize göre günlük programınızı optimize etsin.',
    'features.smartSuggestions.title': 'Akıllı Öneriler',
    'features.smartSuggestions.description': 'Enerji seviyeleriniz ve hedeflerinizle uyumlu görevler, molalar ve aktiviteler için kişiselleştirilmiş öneriler alın.',
    'features.effectiveness.title': 'Etkinlik Maksimizasyonu',
    'features.effectiveness.description': 'Verimlilik kalıplarınızı takip edin ve analiz edin, günlük etkinliğinizi sürekli iyileştirin ve hedeflerinize daha hızlı ulaşın.',
    'features.analytics.title': 'Gelişmiş Analitik',
    'features.analytics.description': 'Güzel görselleştirmelerle verimlilik trendleriniz, zaman kullanım kalıplarınız ve performans metrikleriniz hakkında detaylı içgörüler elde edin.',
    'features.integration.title': 'Kesintisiz Entegrasyon',
    'features.integration.description': 'Favori araçlarınız ve uygulamalarınızla bağlanın, mükemmel çalışan birleşik bir verimlilik ekosistemi oluşturun.',
    'features.mobile.title': 'Mobil Öncelikli Tasarım',
    'features.mobile.description': 'Hareket halindeki verimlilik için tasarlanmış responsive mobil uygulamamızla günlük planlayıcınıza her yerden, her zaman erişin.',
    
    // CTA Section
    'cta.title': 'Başlamaya Hazır mısın?',
    'cta.description': 'Günlük verimliliklerini optimize eden binlerce kullanıcıya katıl.',
    'cta.joinWaitlist': 'Bekleme Listesine Katıl',
    'cta.beFirstToKnow': 'İlk haberdar olan sen ol',
    'cta.qrCodeAlt': 'Orbit kayıt formu için QR Kod',
    'cta.scanToJoin': 'Katılmak için tara',
    
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

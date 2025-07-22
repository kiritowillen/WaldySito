import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  it: {
    // Hero Section
    'hero.title.developer': 'Developer',
    'hero.title.bitcoiner': 'Bitcoiner',
    'hero.subtitle': 'Costruisco applicazioni che abbracciano Bitcoin e la decentralizzazione.',
    'hero.viewWork': 'I Miei Progetti',
    'hero.contact': 'Contattami',

    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Developer, appassionato di Bitcoin e innovatore tecnologico',
    'about.description1': "Sono uno sviluppatore appassionato affascinato dall'intersezione tra tecnologia e Bitcoin. Il mio viaggio in Bitcoin ha acceso il mio interesse nel costruire soluzioni decentralizzate che promuovono la sovranità finanziaria e la privacy.",
    'about.description2': "Quando non programmo, mi trovi ad esplorare gli ultimi sviluppi nello spazio crypto, imparando sulla tecnologia blockchain, e costruendo applicazioni che risolvono problemi reali abbracciando i principi della decentralizzazione.",
    'about.skills': 'Competenze Tecniche',

    // Projects Section
    'projects.title': 'Progetti in Evidenza',
    'projects.subtitle': 'Una vetrina del mio recente lavoro nello sviluppo web e blockchain',
    'projects.code': 'Codice',
    'projects.demo': 'Demo Live',

    // Project Details
    'project.bitcoin.title': 'Bitcoin Portfolio Tracker',
    'project.bitcoin.description': 'Un\'applicazione completa di gestione del portafoglio per investitori Bitcoin. Include il monitoraggio dei prezzi in tempo reale, analisi avanzate e integrazione sicura del wallet.',
    
    'project.defi.title': 'DeFi Analytics Dashboard',
    'project.defi.description': 'Piattaforma di analisi avanzata per protocolli DeFi. Fornisce opportunità di yield farming, analisi dei pool di liquidità e strategie di trading automatizzate.',
    
    'project.ecommerce.title': 'Piattaforma E-commerce Crypto',
    'project.ecommerce.description': 'Soluzione e-commerce full-stack con pagamenti in criptovaluta integrati. Supporta Bitcoin, Lightning Network e le principali altcoin per transazioni senza soluzione di continuità.',

    // Contact Section
    'contact.title': 'Contattami',
    'contact.subtitle': 'Parliamo del tuo prossimo progetto',
    'contact.description': 'Interessato a collaborare o hai una domanda? Non esitare a contattarmi!',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.success': 'Messaggio inviato con successo!',
  },
  en: {
    // Hero Section
    'hero.title.developer': 'Developer',
    'hero.title.bitcoiner': 'Bitcoiner',
    'hero.subtitle': 'Building applications that embrace Bitcoin and decentralization.',
    'hero.viewWork': 'View My Work',
    'hero.contact': 'Get In Touch',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer, Bitcoin enthusiast, and technology innovator',
    'about.description1': "I'm a passionate developer fascinated by the intersection of technology and Bitcoin. My journey into Bitcoin sparked my interest in building decentralized solutions that promote financial sovereignty and privacy.",
    'about.description2': "When I'm not coding, you'll find me exploring the latest developments in the crypto space, learning about blockchain technology, and building applications that solve real problems while embracing the principles of decentralization.",
    'about.skills': 'Technical Skills',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my recent work in web development and blockchain',
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',

    // Project Details
    'project.bitcoin.title': 'Bitcoin Portfolio Tracker',
    'project.bitcoin.description': 'A comprehensive portfolio management application for Bitcoin investors. Features real-time price tracking, advanced analytics, and secure wallet integration.',
    
    'project.defi.title': 'DeFi Analytics Dashboard',
    'project.defi.description': 'Advanced analytics platform for DeFi protocols. Provides yield farming opportunities, liquidity pool analysis, and automated trading strategies.',
    
    'project.ecommerce.title': 'Crypto E-commerce Platform',
    'project.ecommerce.description': 'Full-stack e-commerce solution with integrated cryptocurrency payments. Supports Bitcoin, Lightning Network, and major altcoins for seamless transactions.',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s talk about your next project',
    'contact.description': 'Interested in working together or have a question? Feel free to reach out!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it'); // Default to Italian

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
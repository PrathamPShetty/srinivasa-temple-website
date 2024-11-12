// Mark the file as a client component
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define Language type
type Language = 'english' | 'sanskrit';

// Define the shape of the context value
interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

// Create the context with default value
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// LanguageProvider component to wrap around your app
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  // Toggle between languages
  const toggleLanguage = () => {
    console.log('Toggling language');
    setLanguage((prevLang) => (prevLang === 'english' ? 'sanskrit' : 'english'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

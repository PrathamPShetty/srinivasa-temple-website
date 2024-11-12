import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Appheader = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLLIElement | null>(null);

  const text = {
    sanskrit: {
      home: "गृह",
      about: "परिचयः",
      Vaikuntha: "वैकुण्ठम् परिसरः",
      srinivasa: "श्रीनिवासः",
      contactUs: "संपर्कं कुर्वन्तु",
      dashavatar: "दशावतारः",
      seva: "आध्यात्मिक सम्मेलन",
      button: "English",
    },
    english: {
      home: "Home",
      about: "About",
      Vaikuntha: "Vaikuntha Campus",
      srinivasa: "Srinivasa Idol",
      contactUs: "Seva",
      dashavatar: "Dashavatar",
      seva: "Spiritual Gatherings",
      button: "संस्कृतम्",
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="z-10 w-full absolute">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link href="/" aria-label="logo" className="flex space-x-2 items-center">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex sm:justify-end w-full sm:flex-row sm:items-center sm:gap-0 sm:pr-6 sm:bg-transparent">
              <ul className="sm:font-medium sm:text-lg flex-col flex sm:flex-row gap-6 sm:gap-0">
                <li>
                  <Link href="/" className="block md:px-4 transition hover:text-primary">
                    {text[language].home}
                  </Link>
                </li>
          
                <li
                  className="relative"
                  ref={aboutDropdownRef}
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} 
                >
                  <Link
                    href="#about"
                    className="block md:px-4 transition hover:text-primary cursor-pointer"
                  >
                    {text[language].about}
                  </Link>
              
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                      <Link href="/temple-history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {text[language].Vaikuntha}
                      </Link>
                      <Link href="/idol-details" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {text[language].srinivasa}
                      </Link>
                      <Link href="#seva" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {text[language].contactUs}
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <Link href="/dashavatara" className="block md:px-4 transition hover:text-primary">
                    {text[language].dashavatar}
                  </Link>
                </li>
                <li>
                  <Link href="/event" className="block md:px-4 transition hover:text-primary">
                    {text[language].seva}
                  </Link>
                </li>
                <li>
                  <button onClick={toggleLanguage} className="md:px-4 transition hover:text-primary">
                    {text[language].button}
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} bg-gray-800 h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <Link href="#features" onClick={toggleMobileMenu} className="block rounded-md px-3 py-2 text-base font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                    {text[language].home}
                  </Link>
                  <Link href="/temple-history"  onClick={toggleMobileMenu} className="block px-3 py-2 text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {text[language].Vaikuntha}
                  </Link>
                  <Link href="/idol-details"  onClick={toggleMobileMenu} className="block px-3 py-2 text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {text[language].srinivasa}
                  </Link>
                  <Link href="#seva"  onClick={toggleMobileMenu} className="block px-3 py-2 text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {text[language].contactUs}
                  </Link>
                  <Link href="/dashavatara"  onClick={toggleMobileMenu} className="block rounded-md px-3 py-2 text-base font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                    {text[language].dashavatar}
                  </Link>
                  <Link href="/event" onClick={toggleMobileMenu}  className="block rounded-md px-3 py-2 text-base font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                    {text[language].seva}
                  </Link>
                  <button
                  onClick={() => {
                    toggleLanguage();
                    toggleMobileMenu();
                  }}
                    className="block rounded-md px-3 py-2 text-base font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {text[language].button}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Appheader;

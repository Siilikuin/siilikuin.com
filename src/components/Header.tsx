'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navigation: NavItem[] = [
  {
    label: "Services",
    dropdown: [
      { label: "Cloud Migration", href: "#", description: "Seamless transition to cloud infrastructure" },
      { label: "Custom Development", href: "#", description: "Tailored software solutions" },
      { label: "DevOps & CI/CD", href: "#", description: "Streamline your deployment pipeline" },
      { label: "Architecture Consulting", href: "#", description: "Design scalable systems" },
    ]
  },
  {
    label: "Case Studies",
    dropdown: [
      { label: "Enterprise Solutions", href: "#", description: "Large-scale transformations" },
      { label: "Startup Success Stories", href: "#", description: "Rapid scaling solutions" },
      { label: "Digital Transformation", href: "#", description: "Modernizing legacy systems" },
    ]
  },
  {
    label: "Blog",
    href: "#"
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Documentation", href: "#", description: "Technical guides and tutorials" },
      { label: "Whitepapers", href: "#", description: "Industry insights and research" },
      { label: "Tools & Downloads", href: "#", description: "Helpful resources for developers" },
      { label: "API Reference", href: "#", description: "Complete API documentation" },
    ]
  },
  {
    label: "About",
    dropdown: [
      { label: "Our Story", href: "#", description: "How we started and where we're going" },
      { label: "Team", href: "#", description: "Meet our talented professionals" },
      { label: "Careers", href: "#", description: "Join our growing team" },
      { label: "Contact", href: "#", description: "Get in touch with us" },
    ]
  }
];

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fi", label: "Suomi", flag: "🇫🇮" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside all dropdowns
      const isOutsideDropdowns = Object.values(dropdownRefs.current).every(
        ref => !ref || !ref.contains(target)
      );
      
      const isOutsideLanguage = !languageRef.current || !languageRef.current.contains(target);
      
      if (isOutsideDropdowns) {
        setActiveDropdown(null);
      }
      if (isOutsideLanguage) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
    setLanguageDropdownOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    setActiveDropdown(null);
  };

  const selectLanguage = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-bg-base z-40">
      <nav className="flex items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image 
            src="/siili.png" 
            alt="Siilikuin mascot" 
            width={40} 
            height={40}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-fg-violet">Siilikuin</h1>
            <p className="text-xs text-fg-gray">Cloud, compassion, code.</p>
          </div>
        </div>

        {/* Navigation Menu - Centered */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.label} className="relative">
                {item.dropdown ? (
                  <div ref={el => dropdownRefs.current[item.label] = el}>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg
                        ${activeDropdown === item.label 
                          ? 'text-fg-violet bg-bg-seafoam' 
                          : 'text-fg-gray hover:text-fg-seafoam hover:bg-bg-violet'}`}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-bg-gray/20 overflow-hidden">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-bg-seafoam transition-colors border-b border-bg-gray/10 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-fg-violet text-sm">
                              {dropdownItem.label}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-xs text-fg-gray mt-0.5">
                                {dropdownItem.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-fg-gray hover:text-fg-seafoam hover:bg-bg-violet rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Language Selector - Right aligned */}
        <div className="flex-shrink-0">
          <div className="relative" ref={languageRef}>
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-lg border
                ${languageDropdownOpen 
                  ? 'text-fg-violet bg-bg-seafoam border-bg-seafoam' 
                  : 'text-fg-gray hover:text-fg-seafoam border-bg-gray/30 hover:border-bg-seafoam'}`}
            >
              <span className="text-lg">{selectedLanguage.flag}</span>
              <span>{selectedLanguage.code.toUpperCase()}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${
                  languageDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {languageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-bg-gray/20 overflow-hidden">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => selectLanguage(language)}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-bg-seafoam transition-colors text-left
                      ${selectedLanguage.code === language.code ? 'bg-bg-violet' : ''}`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div>
                      <div className="font-medium text-fg-violet text-sm">
                        {language.label}
                      </div>
                      <div className="text-xs text-fg-gray">
                        {language.code.toUpperCase()}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
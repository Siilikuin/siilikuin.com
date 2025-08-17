'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
      { label: "Cloud Migration", href: "/services", description: "Seamless transition to cloud infrastructure" },
      { label: "Custom Development", href: "/services", description: "Tailored software solutions" },
      { label: "DevOps & CI/CD", href: "/services", description: "Streamline your deployment pipeline" },
      { label: "Architecture Consulting", href: "/services", description: "Design scalable systems" },
    ]
  },
  {
    label: "Case Studies",
    dropdown: [
      { label: "Enterprise Solutions", href: "/case-studies", description: "Large-scale transformations" },
      { label: "Startup Success Stories", href: "/case-studies", description: "Rapid scaling solutions" },
      { label: "Digital Transformation", href: "/case-studies", description: "Modernizing legacy systems" },
    ]
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Documentation", href: "/resources", description: "Technical guides and tutorials" },
      { label: "Whitepapers", href: "/resources", description: "Industry insights and research" },
      { label: "Tools & Downloads", href: "/resources", description: "Helpful resources for developers" },
      { label: "API Reference", href: "/resources", description: "Complete API documentation" },
    ]
  },
  {
    label: "About",
    dropdown: [
      { label: "Our Story", href: "/about", description: "How we started and where we're going" },
      { label: "Team", href: "/about", description: "Meet our talented professionals" },
      { label: "Careers", href: "/about", description: "Join our growing team" },
      { label: "Contact", href: "/about", description: "Get in touch with us" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const languageRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside all dropdowns
      const isOutsideDropdowns = Object.values(dropdownRefs.current).every(
        ref => !ref || !ref.contains(target)
      );
      
      const isOutsideLanguage = !languageRef.current || !languageRef.current.contains(target);
      const isOutsideMobileMenu = !mobileMenuRef.current || !mobileMenuRef.current.contains(target);
      
      if (isOutsideDropdowns) {
        setActiveDropdown(null);
      }
      if (isOutsideLanguage) {
        setLanguageDropdownOpen(false);
      }
      if (isOutsideMobileMenu) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image 
            src="/siili.png" 
            alt="Siilikuin mascot" 
            width={40} 
            height={40}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-fg-violet">Siilikuin</h1>
            <p className="text-xs text-fg-seafoam">Cloud, compassion, code.</p>
          </div>
        </Link>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden ml-auto p-2 text-fg-gray hover:text-fg-violet hover:bg-bg-violet rounded-lg transition-colors flex items-center gap-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <>
              <span className="text-sm font-medium">Close</span>
              <X className="w-6 h-6" />
            </>
          ) : (
            <>
              <span className="text-sm font-medium">Menu</span>
              <Menu className="w-6 h-6" />
            </>
          )}
        </button>

        {/* Navigation Menu - Desktop Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
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
                          <Link
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
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-4 py-2 text-sm font-medium text-fg-gray hover:text-fg-seafoam hover:bg-bg-violet rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Language Selector - Desktop Right aligned */}
        <div className="flex-shrink-0">
          <div className="relative hidden lg:block" ref={languageRef}>
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

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 top-[72px]" ref={mobileMenuRef}>
            <div className="absolute inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-bg-white shadow-2xl overflow-y-auto">
              <div className="p-6">
                {/* Mobile Navigation Items */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.label)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium transition-colors rounded-lg
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
                            <div className="mt-2 ml-4 space-y-1">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-fg-gray hover:text-fg-violet hover:bg-bg-seafoam rounded-lg transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  <div className="font-medium">{dropdownItem.label}</div>
                                  {dropdownItem.description && (
                                    <div className="text-xs opacity-70 mt-0.5">
                                      {dropdownItem.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href!}
                          className="block px-4 py-3 font-medium text-fg-gray hover:text-fg-seafoam hover:bg-bg-violet rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Language Selector */}
                <div className="mt-6 pt-6 border-t border-bg-gray/20">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-fg-gray px-4">Language</p>
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          selectLanguage(language);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-bg-seafoam transition-colors rounded-lg
                          ${selectedLanguage.code === language.code ? 'bg-bg-violet' : ''}`}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <div className="text-left">
                          <div className="font-medium text-fg-violet">
                            {language.label}
                          </div>
                          <div className="text-xs text-fg-gray">
                            {language.code.toUpperCase()}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
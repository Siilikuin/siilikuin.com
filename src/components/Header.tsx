'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  {
    label: "Software",
    href: "/software"
  },
  {
    label: "Case Studies",
    href: "/case-studies"
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Process",
    href: "/process"
  },
  {
    label: "Contact",
    href: "https://calendly.com/andrew-siilikuin"
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideMobileMenu = !mobileMenuRef.current || !mobileMenuRef.current.contains(target);
      
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
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <p className="text-sm text-fg-seafoam">Cloud, compassion, code</p>
          </div>
        </Link>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-auto p-2 text-fg-gray hover:text-fg-violet hover:bg-bg-violet rounded-lg transition-colors flex items-center gap-2"
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

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex flex-1 justify-end">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium ${
                    item.label === "Contact" 
                      ? "text-fg-seafoam hover:text-fg-violet" 
                      : "text-fg-gray hover:text-fg-seafoam"
                  } hover:bg-bg-violet rounded-lg transition-colors`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 top-[72px]" ref={mobileMenuRef}>
            <div className="absolute inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-bg-white shadow-2xl overflow-y-auto">
              <div className="p-6">
                {/* Mobile Navigation Items */}
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-3 font-medium ${
                        item.label === "Contact"
                          ? "text-fg-seafoam hover:text-fg-violet"
                          : "text-fg-gray hover:text-fg-seafoam"
                      } hover:bg-bg-violet rounded-lg transition-colors`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
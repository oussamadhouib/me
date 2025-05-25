"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Oussema Dhouib
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "fr")}
                className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                {t.nav.contact}
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "fr")}
                className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 w-fit"
              >
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

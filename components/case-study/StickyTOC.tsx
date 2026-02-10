'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface TOCSection {
  id: string;
  title: string;
}

interface StickyTOCProps {
  sections: TOCSection[];
}

export default function StickyTOC({ sections }: StickyTOCProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-20 right-4 z-50 p-3 bg-surface-raised border border-border rounded-lg shadow-lg hover:bg-surface-overlay transition-colors"
        aria-label="Toggle table of contents"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile TOC Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-32 right-4 z-40 w-64 p-4 bg-surface-raised border border-border rounded-xl shadow-2xl"
          >
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Contents
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'text-accent bg-accent/10 font-medium'
                      : 'text-neutral-400 hover:text-white hover:bg-surface-overlay'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sticky TOC */}
      <div className="hidden lg:block sticky top-24 h-fit">
        <div className="p-6 bg-surface-raised/50 backdrop-blur-sm border border-border rounded-xl">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
            Contents
          </h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'text-accent bg-accent/10 font-medium border-l-2 border-accent'
                    : 'text-neutral-400 hover:text-white hover:bg-surface-overlay border-l-2 border-transparent'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

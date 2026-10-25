import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Coding Profiles', href: '#coding-profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/70 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform duration-200 group-hover:scale-105">
              TC
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-neutral-700 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-neutral-500 hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {personalInfo.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/70 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Tanisha_Chauhan_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/80 rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              title="Download Tanisha's Resume (PDF)"
            >
              <FileDown className="w-4 h-4 text-neutral-700" />
              <span className="hidden xs:inline">Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200/80 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-xl transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-neutral-400 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for Internships
            </span>
            <a
              href={personalInfo.resumePath}
              download="Tanisha_Chauhan_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

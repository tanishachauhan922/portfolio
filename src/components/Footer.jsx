import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Mail, Heart } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          
          {/* Identity */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                TC
              </div>
              <span className="font-bold text-lg text-neutral-950 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Full-Stack Developer & Pre-final-year B.Tech CS Student at G.L. Bajaj Institute of Technology and Management (Expected 2028).
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-colors"
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS, & Vite</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

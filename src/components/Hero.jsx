import React from 'react';
import { ArrowDown, FileDown, Mail, ExternalLink, Code2, Sparkles, GraduationCap, Terminal } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50/50 to-white">
      {/* Subtle decorative grid background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-neutral-800 text-xs font-medium tracking-tight shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Pre-final-year B.Tech CS Student</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600 font-normal">G.L. Bajaj ITM '28</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.12]">
                Hi, I'm <span className="underline decoration-neutral-300 decoration-wavy underline-offset-6">{personalInfo.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-700 tracking-tight">
                {personalInfo.role} & Problem Solver
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
              Pre-final-year Computer Science undergraduate at <strong className="text-neutral-900 font-semibold">G.L. Bajaj Institute of Technology and Management</strong> (Expected 2028). Passionate about Data Structures and Algorithms, full-stack web engineering, and building practical software projects. Currently expanding my skillset into Python.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                <Code2 className="w-3.5 h-3.5 text-neutral-600" /> C++ & DSA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                <Terminal className="w-3.5 h-3.5 text-neutral-600" /> React & Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                <Sparkles className="w-3.5 h-3.5 text-neutral-600" /> Currently learning Python
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download Resume Button */}
              <a
                href={personalInfo.resumePath}
                download="Tanisha_Chauhan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
                title="Download Tanisha's Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-neutral-700" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-xl transition-all duration-200 border border-transparent hover:border-neutral-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <Mail className="w-4 h-4 text-neutral-600" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Architectural Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-neutral-300">
              
              {/* Window Header */}
              <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-300"></span>
                </div>
                <span className="text-[11px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
                  developer.profile
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                {/* Profile Identity */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white font-bold text-xl flex items-center justify-center shadow-xs">
                    TC
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium">
                      {personalInfo.education.institution}
                    </p>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">
                      Class of {personalInfo.education.expectedGraduation} • Pre-final Year
                    </p>
                  </div>
                </div>

                {/* Structured Overview List */}
                <div className="space-y-3 pt-2 border-t border-neutral-100 text-sm">
                  <div className="flex justify-between items-start py-1">
                    <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Focus</span>
                    <span className="text-neutral-900 font-medium text-right text-xs">
                      Data Structures & Web Engineering
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-t border-neutral-100">
                    <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Core Stack</span>
                    <span className="text-neutral-900 font-medium text-right text-xs">
                      React • Node • Express • Mongo
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-t border-neutral-100">
                    <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Languages</span>
                    <span className="text-neutral-900 font-medium text-right text-xs">
                      C++, JavaScript, Python (learning)
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-1 border-t border-neutral-100">
                    <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Location</span>
                    <span className="text-neutral-900 font-medium text-right text-xs">
                      {contactInfo.location}
                    </span>
                  </div>
                </div>

                {/* Direct quick links */}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href="#projects"
                    className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Browse 2 Featured Projects</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#skills"
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    View Skills
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

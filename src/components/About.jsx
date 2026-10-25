import React from 'react';
import { BookOpen, Code2, Compass, Laptop, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Engineering solid foundations in computer science while building modern web applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-base">
            <p>
              I am a pre-final-year Computer Science undergraduate at{' '}
              <strong className="text-neutral-950 font-semibold">
                G.L. Bajaj Institute of Technology and Management
              </strong>
              , targeting graduation in <strong className="text-neutral-950 font-semibold">2028</strong>.
            </p>
            <p>
              My journey centers around strengthening my algorithmic thinking and engineering practical software. I consistently practice <strong className="text-neutral-900 font-semibold">Data Structures and Algorithms in C++</strong>, understanding fundamental time-space complexities, and applying those core analytical skills directly to real-world software architecture.
            </p>
            <p>
              On the development front, I build full-stack web applications using the <strong className="text-neutral-900 font-semibold">MERN stack (React, Node.js, Express.js, MongoDB)</strong> and <strong className="text-neutral-900 font-semibold">Tailwind CSS</strong>. I appreciate clean user interfaces that prioritize usability, performance, and responsive layout standards.
            </p>
            <p>
              I am currently expanding my technical horizon by <strong className="text-neutral-900 font-semibold">learning Python</strong> to explore backend automation, data workflows, and script development. I value clean code, maintainable architecture, and continuous learning above all else.
            </p>

            {/* Quick Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4 text-neutral-700" />
                  Algorithmic Mindset
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Dedicated DSA practice in C++ with an emphasis on optimization and problem decomposition.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm mb-1">
                  <Laptop className="w-4 h-4 text-neutral-700" />
                  Practical Web Engineering
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Building functional full-stack projects with modern frameworks, reliable APIs, and clean UX.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/40">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-neutral-700" />
                Quick Highlights
              </h3>
              
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Institution</dt>
                  <dd className="font-semibold text-neutral-900 mt-0.5">
                    G.L. Bajaj Institute of Technology and Management
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Degree & Branch</dt>
                  <dd className="font-semibold text-neutral-900 mt-0.5">
                    B.Tech in Computer Science and Engineering
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Current Standing</dt>
                  <dd className="font-semibold text-neutral-900 mt-0.5">
                    Pre-final Year (Expected Graduation: 2028)
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Primary Technical Interests</dt>
                  <dd className="font-medium text-neutral-800 mt-0.5 leading-snug">
                    Data Structures & Algorithms, Full-Stack Web Development, System Design basics
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Current Focus</dt>
                  <dd className="inline-flex items-center gap-1.5 font-medium text-neutral-800 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
                    Expanding into Python & building practical projects
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

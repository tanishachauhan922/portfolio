import React from 'react';
import { BookOpen, Code2, Compass, Laptop, Sparkles, UserCheck, Trophy, Palette } from 'lucide-react';
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
              , with an expected graduation in <strong className="text-neutral-950 font-semibold">2028</strong> and an academic record of <strong className="text-neutral-950 font-semibold">SGPA: 8.755</strong>.
            </p>
            <p>
              My journey centers around strengthening my algorithmic thinking and engineering practical software. I have solved <strong className="text-neutral-900 font-semibold">350+ problems on LeetCode in C++</strong>, understanding fundamental time-space complexities, data structures, and applying those core analytical skills directly to real-world software architecture.
            </p>
            <p>
              On the development front, I build and deploy full-stack web applications using the <strong className="text-neutral-900 font-semibold">MERN stack (React.js, Node.js, Express.js, MongoDB)</strong> and <strong className="text-neutral-900 font-semibold">Tailwind CSS</strong>, with experience in REST APIs, authentication flows, and AI-powered feature integrations.
            </p>
            <p className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 font-normal">
              Currently learning Python to build a strong foundation in Artificial Intelligence and Machine Learning. Exploring Python fundamentals, data handling, and essential libraries to develop practical AI/ML skills and intelligent applications.
            </p>

            {/* Quick Principles */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4 text-neutral-700" />
                  350+ LeetCode Solved
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Dedicated DSA practice in C++ with an emphasis on optimization, recursion, and dynamic programming.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm mb-1">
                  <Laptop className="w-4 h-4 text-neutral-700" />
                  Full-Stack & AI Integration
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Building responsive applications with React, Express, MongoDB Atlas, Cloudflare AI, and Gemini API.
                </p>
              </div>
            </div>

            {/* Extra Activities from Resume */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2.5">
                Key Activities & Involvements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-neutral-200/70 bg-white flex items-start gap-2.5">
                  <Trophy className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900">Hackathon Participant</h4>
                    <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">
                      Contributed to frontend development & component architecture in a collaborative team project.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-neutral-200/70 bg-white flex items-start gap-2.5">
                  <Palette className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-900">Design Member — Yuktikula Club</h4>
                    <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">
                      Designed posters and visual creative assets for college events and student festivals.
                    </p>
                  </div>
                </div>
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
                  <dd className="text-xs text-emerald-700 font-medium mt-0.5">
                    SGPA: {personalInfo.education.sgpa}
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Degree & Branch</dt>
                  <dd className="font-semibold text-neutral-900 mt-0.5">
                    B.Tech in Computer Science & Engineering
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Timeline</dt>
                  <dd className="font-semibold text-neutral-900 mt-0.5">
                    2024–2028 (Pre-final Year)
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Higher Secondary</dt>
                  <dd className="font-medium text-neutral-800 mt-0.5 text-xs">
                    Priyanka Modern School, Dhampur (CBSE, 2024)
                  </dd>
                </div>

                <div className="pt-3 border-t border-neutral-200/70">
                  <dt className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Current Focus</dt>
                  <dd className="inline-flex items-center gap-1.5 font-medium text-neutral-800 mt-0.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
                    Python for AI/ML & Full-Stack Development
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

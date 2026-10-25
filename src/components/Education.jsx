import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Formal training in Computer Science fundamentals, software engineering, and analytical thinking.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Icon & Institution Badge */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {education.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                  {education.institution}
                </h3>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Expected Graduation: <strong className="text-neutral-900 font-semibold">{education.expectedGraduation}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Degree & Core Curriculum Focus */}
            <div className="lg:col-span-8 lg:border-l lg:border-neutral-100 lg:pl-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-neutral-900">
                  {education.degree} — {education.branch}
                </h4>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  Building deep competencies in algorithmic problem solving, core computer science systems, database management, and distributed web development principles.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Academic Focus & Key Highlights
                </h5>
                <ul className="space-y-2.5">
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Tags */}
              <div className="pt-2">
                <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2.5">
                  Core Subject Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming (C++)',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Web Technologies',
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100/80 text-neutral-800 border border-neutral-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Github, Code2, ExternalLink, Info, CheckCircle2, Terminal } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            Profiles & Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Coding Profiles
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            Where I practice algorithmic problem solving and maintain full-stack open-source repositories.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {codingProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Header with Icon and Platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center transition-transform group-hover:scale-105">
                      {profile.id === 'github' ? (
                        <Github className="w-6 h-6" />
                      ) : (
                        <Code2 className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium">
                        {profile.focus}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                    Active Practice
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {profile.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {profile.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action & Configuration Note */}
              <div className="pt-6 border-t border-neutral-100 space-y-3">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 rounded-xl transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <span>Visit {profile.name} Profile</span>
                  <ExternalLink className="w-4 h-4 text-neutral-700" />
                </a>

                {/* Explicit Config Indicator */}
                {profile.placeholder && (
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-200/70">
                    <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>
                      Placeholder handle: update in <code className="font-mono text-neutral-800 font-semibold">src/data/portfolioData.js</code>
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

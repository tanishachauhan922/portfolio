import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  GitBranch, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-neutral-800" />;
      case 'Core Computer Science':
        return <Cpu className="w-5 h-5 text-neutral-800" />;
      case 'Frontend Development':
        return <Layers className="w-5 h-5 text-neutral-800" />;
      case 'Backend & Database':
        return <Server className="w-5 h-5 text-neutral-800" />;
      case 'Developer Tools & Cloud':
        return <GitBranch className="w-5 h-5 text-neutral-800" />;
      default:
        return <Code2 className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
              Strong grounding in algorithmic problem solving and hands-on full-stack development.
            </p>
          </div>

          {/* Quick Highlight Tag */}
          <div className="inline-flex items-center gap-2 self-start md:self-auto px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-700 shadow-2xs">
            <Sparkles className="w-4 h-4 text-neutral-600" />
            <span>Core: C++, DSA, MERN Stack & Git</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-150 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                activeCategory === category
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 border border-neutral-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-200 hover:border-neutral-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-neutral-100 border border-neutral-200/70">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 mb-5 leading-normal">
                  {group.description}
                </p>

                {/* Skill Items */}
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-neutral-50/70 border border-neutral-100 hover:border-neutral-200 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs sm:text-sm text-neutral-900">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                            skill.level === 'Learning'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : skill.level === 'Core Focus'
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">
                        {skill.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Verified in projects & coursework</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

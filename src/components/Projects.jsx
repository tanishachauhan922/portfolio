import React from 'react';
import { Sparkles, ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-neutral-600 text-base sm:text-lg">
              Practical full-stack and frontend applications built with modern tools, real databases, and deployed live.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start md:self-auto px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>2 Live Deployed Applications</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer Note regarding codebases */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-neutral-900">
              Want to inspect more source code or collaborate?
            </p>
            <p className="text-xs text-neutral-600">
              Check out my GitHub profile or connect directly to review architecture details.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-xl transition-colors shadow-2xs"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}

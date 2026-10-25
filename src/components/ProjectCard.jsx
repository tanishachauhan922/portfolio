import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle, Info, Sparkles, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [showRepoNotice, setShowRepoNotice] = useState(false);

  return (
    <article className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-100/80 group">
      <div>
        {/* Top Badges & Title */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            {project.badge}
          </span>
          <span className="text-xs font-medium text-neutral-500 font-mono">
            {project.id === 'ai-ad-generator' ? 'Full Stack' : 'Frontend'}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-neutral-800 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm font-medium text-neutral-600 mt-1 mb-4">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-neutral-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2.5">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-50 text-neutral-800 border border-neutral-200/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-6 pt-5 border-t border-neutral-100">
          <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
            Key Implemented Features
          </h4>
          <ul className="space-y-2.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons & Links */}
      <div className="pt-6 border-t border-neutral-100">
        <div className="flex flex-wrap items-center gap-3">
          {/* Live Demo Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* GitHub Repository Button */}
          <div className="flex-1 min-w-[130px] relative">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (project.githubPlaceholder) {
                  // If placeholder, we still allow navigation or alert the user cleanly
                }
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 rounded-xl transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Clear Notice if link is a placeholder */}
        {project.githubPlaceholder && (
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-neutral-500 bg-neutral-50 rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
            <span className="flex items-center gap-1.5 truncate">
              <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>GitHub repo: Update URL in <code className="font-mono text-neutral-700">portfolioData.js</code></span>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

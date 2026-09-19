import { projects } from '@/lib/data';
import { ExternalLink, Star } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-[#F0EDE8]">Projects</h1>
        <p className="text-[#888888]">Selected personal projects, open-source work, and product experiments.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between p-6 rounded-xl bg-[#161616] border border-[#1F1F1F] hover:border-blue-500/30 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-bold text-[#F0EDE8] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  {project.highlight && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30">
                      {project.highlight}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-[#888888]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F0EDE8] transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F0EDE8] transition-colors p-1"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#888888] leading-relaxed">{project.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F1F1F]/60 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#111111] text-[#888888] border border-[#1F1F1F]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

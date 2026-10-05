'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-10 pb-12 space-y-6 pt-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xl:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -4 }}
            className="flex flex-col bg-white dark:bg-[#0e0e11] rounded-[2.5rem] shadow-sm hover:shadow-xl border border-zinc-200/80 dark:border-zinc-800/80 group transition-all duration-300 p-4 sm:p-5"
          >
            <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 flex-grow mb-4">
              <div className="w-full sm:w-[40%] shrink-0">
                <div className="w-full aspect-[16/10] relative rounded-[1.25rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 group-hover:shadow-inner transition-all duration-300">
                  {project.image ? (
                    <ImageWithSkeleton 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      containerClassName="w-full h-full"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900">
                      <span className="text-zinc-300 dark:text-zinc-700 font-serif text-6xl font-black opacity-50">{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center w-full sm:w-[60%] py-1 pr-1">
                <h2 className="text-[20px] sm:text-[22px] font-black text-zinc-900 dark:text-white font-serif mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 font-medium line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3">
                {project.type && (
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 uppercase tracking-widest border border-orange-100 dark:border-orange-500/20">
                    {project.type}
                  </span>
                )}
                {project.date && (
                  <span className="text-[12px] font-semibold text-zinc-400 dark:text-zinc-500">
                    {project.date}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

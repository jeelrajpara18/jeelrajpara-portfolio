'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, experiences, techStack } from '@/lib/data';
import { X, ExternalLink } from 'lucide-react';
import { Experience } from '@/lib/types';
import aboutImage from "../../public/about-image.png";

const educationData = [
  {
    degree: 'B.Tech (CGPA: 9.55)',
    institution: 'Silver Oak University',
    period: '2022 - 2026'
  },
  {
    degree: '12th Grade (64%)',
    institution: 'Infocity Junior Science College',
    period: '2022'
  },
  {
    degree: '10th Grade (80%)',
    institution: 'Infocity Junior Science College',
    period: '2020'
  }
];

export default function AboutPage() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [timelineTab, setTimelineTab] = useState<'Experience' | 'Education'>('Education');

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-10 pb-12 space-y-6 pt-4">
      {/* Bio Header Card */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-gradient-to-br from-white to-zinc-50/80 dark:from-[#0e0e11] dark:to-[#121215] rounded-[2.2rem] p-8 sm:p-10 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full pointer-events-none" />
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="w-24 h-24 relative">
            <Image src={aboutImage} alt="Memoji" fill priority className="object-contain drop-shadow-md" />
          </div>
          <p className="text-zinc-600 dark:text-[#888888] leading-relaxed text-sm sm:text-base font-medium">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="px-4 py-1.5 text-xs sm:text-sm font-semibold bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-full text-zinc-700 dark:text-zinc-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-400/50 transition-all duration-300 cursor-default">
              {"< /> Software Developer"}
            </span>
            {techStack[0].items.slice(0, 3).map(tech => (
              <span key={tech} className="px-4 py-1.5 text-xs sm:text-sm font-semibold bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-full text-zinc-700 dark:text-zinc-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-400/50 transition-all duration-300 cursor-default">
                {`< /> ${tech}`}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-3 bg-white dark:bg-[#0e0e11] rounded-[2rem] p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-br-full pointer-events-none" />
          <div className="flex justify-between items-center mb-8 relative z-10">
            <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 font-serif">Experience</h2>
            <span className="px-4 py-1.5 text-xs font-semibold border border-zinc-200 dark:border-zinc-800/80 rounded-full text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 shadow-sm">Career</span>
          </div>
          <div className="space-y-4 relative z-10">
            {experiences.slice(0, 2).map((exp, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedExperience(exp)}
                className="group cursor-pointer p-5 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md bg-zinc-50/50 hover:bg-white dark:bg-[#121215] dark:hover:bg-zinc-900/80"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-full flex items-center justify-center text-lg font-bold text-zinc-800 dark:text-zinc-200 shadow-sm overflow-hidden">
                      {exp.logo ? (
                        <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
                      ) : (
                        exp.company.charAt(0)
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-[15px]">{exp.role}</h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">View details</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              setTimelineTab('Experience');
              setIsTimelineModalOpen(true);
            }}
            className="mt-6 group flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800/80 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
          >
            See all experience <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" />
          </button>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-[#0e0e11] rounded-[2rem] p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-bl-full pointer-events-none" />
          <div className="flex justify-between items-center mb-8 relative z-10">
            <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 font-serif">Education</h2>
            <span className="px-4 py-1.5 text-xs font-semibold border border-zinc-200 dark:border-zinc-800/80 rounded-full text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 shadow-sm">Studies</span>
          </div>
          <div className="space-y-4 relative z-10">
            {educationData.slice(0, 2).map((edu, i) => (
              <div key={i} className="group p-5 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl bg-zinc-50/50 hover:bg-white dark:bg-[#121215] dark:hover:bg-zinc-900/80 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-[15px] mb-1">{edu.degree}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{edu.institution}</p>
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              setTimelineTab('Education');
              setIsTimelineModalOpen(true);
            }}
            className="mt-6 group flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800/80 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
          >
            See all studies <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" />
          </button>
        </motion.section>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 dark:bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-white dark:bg-[#0A0A0C] w-full max-w-[650px] rounded-3xl shadow-2xl relative flex flex-col max-h-[90vh]" 
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8 overflow-y-auto">
                <button 
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-[#0A0A0C] cursor-pointer"
                >
                  <X className="w-4 h-4 text-zinc-500" />
                </button>
                
                <div className="flex items-center gap-4 mb-8 pr-12">
                   <div className="w-14 h-14 relative shrink-0 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center text-xl font-bold border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 shadow-sm overflow-hidden">
                      {selectedExperience.logo ? (
                        <Image src={selectedExperience.logo} alt={selectedExperience.company} fill className="object-cover" />
                      ) : (
                        selectedExperience.company.charAt(0)
                      )}
                   </div>
                   <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1">{selectedExperience.company}</h2>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{selectedExperience.role} • {selectedExperience.period}</p>
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6">
                    <h3 className="font-bold text-[15px] mb-3 text-zinc-900 dark:text-white">Overview</h3>
                    <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
                      {selectedExperience.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6">
                    <h3 className="font-bold text-[15px] mb-2 text-zinc-900 dark:text-white">My Role</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{selectedExperience.role}</p>
                  </div>

                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6">
                    <h3 className="font-bold text-[15px] mb-4 text-zinc-900 dark:text-white">Skills Acquired</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedExperience.tech.map((t, i) => (
                        <span key={i} className="px-3.5 py-1.5 text-xs font-semibold border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Modal */}
      <AnimatePresence>
        {isTimelineModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 dark:bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsTimelineModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-white dark:bg-[#0A0A0C] w-full max-w-[650px] rounded-3xl shadow-2xl relative flex flex-col max-h-[90vh]" 
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8 overflow-y-auto">
                <button 
                  onClick={() => setIsTimelineModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-[#0A0A0C] cursor-pointer"
                >
                  <X className="w-4 h-4 text-zinc-500" />
                </button>
                
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6 pr-8">Career & Studies Timeline</h2>
                
                <div className="flex items-center gap-3 mb-8">
                  <button 
                    onClick={() => setTimelineTab('Experience')}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border cursor-pointer ${timelineTab === 'Experience' ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-900' : 'bg-transparent border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => setTimelineTab('Education')}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border cursor-pointer ${timelineTab === 'Education' ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-900' : 'bg-transparent border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
                  >
                    Education
                  </button>
                </div>

                <div className="space-y-4">
                  {timelineTab === 'Experience' ? (
                    experiences.map((exp, i) => (
                      <div key={i} className="relative p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-[#0e0e11] overflow-hidden">
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-blue-400/20 dark:bg-blue-500/10 blur-xl rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-[15px] mb-1">{exp.role}</h3>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{exp.company}</p>
                          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    educationData.map((edu, i) => (
                      <div key={i} className="relative p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-[#0e0e11] overflow-hidden">
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-blue-400/20 dark:bg-blue-500/10 blur-xl rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-[15px] mb-1">{edu.degree}</h3>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{edu.institution}</p>
                          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{edu.period}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

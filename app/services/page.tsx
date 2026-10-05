'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, fast and responsive web applications that give your users the best experience.",
      icon: <span className="font-bold text-xl">{"</>"}</span>,
      iconBg: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
      borderColor: "border-blue-100/50 dark:border-blue-900/30 hover:border-blue-200 dark:hover:border-blue-800/50",
      features: [
        "Custom Website Development",
        "React.js & Next.js Applications",
        "Responsive UI/UX Implementation",
        "Website Performance Optimization",
        "API Integration"
      ],
      techLabel: "Tech Stack",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      accentColor: "text-blue-500",
      pillBg: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/30",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your brand, increase visibility, and drive meaningful conversions.",
      icon: <TrendingUpIcon />,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
      borderColor: "border-emerald-100/50 dark:border-emerald-900/30 hover:border-emerald-200 dark:hover:border-emerald-800/50",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Management",
        "Content Strategy & Planning",
        "Web Analytics & Conversion Tracking",
        "Paid Campaign Strategy (Meta & Google)"
      ],
      techLabel: "Tools I Use",
      tech: ["Google Analytics", "Google Ads", "Canva", "Meta Business Suite"],
      accentColor: "text-emerald-500",
      pillBg: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30",
    }
  ];

  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your goals, requirements and audience." },
    { num: "02", title: "Strategy", desc: "Planning the right approach for your project." },
    { num: "03", title: "Execution", desc: "Building, implementing and refining the solution." },
    { num: "04", title: "Delivery", desc: "Testing, delivering and supporting your project." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-10 pb-12 space-y-6 pt-4">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative flex flex-col md:flex-row justify-between items-start px-2"
      >
        <div className="max-w-2xl relative z-10">
          <h1 className="text-5xl font-black text-zinc-900 dark:text-white font-serif mb-6 leading-tight tracking-tight">
            What I Can Do For You.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium leading-relaxed mb-8 max-w-xl">
            I combine thoughtful development with creative digital strategies to help businesses build their online presence and grow.
          </p>
          <div className="flex items-center gap-3 text-[11px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <span>Available for freelance projects</span>
            <span>•</span>
            <span>Ahmedabad, India</span>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -4 }}
            className={`flex flex-col bg-white dark:bg-[#0e0e11] rounded-[2.5rem] shadow-sm hover:shadow-xl border ${service.borderColor} group transition-all duration-300 p-8 sm:p-10 relative overflow-hidden`}
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white font-serif mb-3">
                  {service.title}
                </h2>
                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
              <div className="absolute right-0 top-12 bottom-32 w-1/3 opacity-20 pointer-events-none hidden sm:block">
                <div className={`w-full h-full bg-gradient-to-bl ${index === 0 ? 'from-blue-400' : 'from-emerald-400'} to-transparent rounded-l-[3rem] blur-2xl`} />
              </div>
              <div className="space-y-3.5 mb-12 relative z-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${service.accentColor} shrink-0`} fill="currentColor" stroke="white" strokeWidth={2} />
                    <span className="text-[14px] font-semibold text-zinc-600 dark:text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">
                  {service.techLabel}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span key={t} className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${service.pillBg}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity whitespace-nowrap group/link shrink-0">
                    Let's talk about this <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Process / How I Work Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0e0e11] rounded-[2.5rem] shadow-sm border border-zinc-200/80 dark:border-zinc-800/80 p-8 sm:p-10 flex flex-col xl:flex-row gap-10 xl:gap-0 mt-6"
      >
        <div className="xl:w-1/4 xl:border-r border-zinc-100 dark:border-zinc-800/80 pr-8 flex flex-col">
          <div className='flex gap-4 md:flex-row flex-col items-start'>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-serif mb-3 text-zinc-900 dark:text-white leading-none pt-1">How I Work</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-[13.5px] font-medium leading-relaxed max-w-[180px]">
                A simple, collaborative approach from idea to execution.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:pl-10">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <span className="text-3xl font-black text-blue-600 dark:text-blue-500 font-serif mb-3 opacity-80 leading-none">{step.num}</span>
              <h3 className="text-[17px] font-bold text-zinc-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-[13px] leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="bg-[#0e0e11] dark:bg-zinc-900 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl mt-8 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-emerald-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 flex gap-6 items-start lg:items-center">
          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 items-center justify-center shrink-0">
            <span className="text-xl">✨</span>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mb-2">Have a project in mind?</h2>
            <p className="text-zinc-400 text-[14.5px] font-medium max-w-xl leading-relaxed">
              Let's turn your ideas into something meaningful. Whether it's a website or a digital growth strategy, I'd love to hear about it.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
          <Link href="/contact" className="w-full px-10 py-3 bg-white text-zinc-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function TrendingUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

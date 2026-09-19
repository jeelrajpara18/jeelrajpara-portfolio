import { experiences } from '@/lib/data';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-[#F0EDE8]">Experience</h1>
        <p className="text-[#888888]">My professional career journey and industry roles.</p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-[#1F1F1F] ml-3 sm:ml-4 space-y-10 pl-6 sm:pl-8">
        {experiences.map((exp, index) => (
          <div key={exp.company + exp.period} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#111111] border-2 border-blue-500 group-hover:scale-125 transition-transform" />

            <div className="p-6 rounded-xl bg-[#161616] border border-[#1F1F1F] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F1F] pb-4">
                <div>
                  <h2 className="text-lg font-bold text-[#F0EDE8]">{exp.role}</h2>
                  <p className="text-sm font-medium text-blue-400">{exp.company}</p>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#888888]">
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#1F1F1F]">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Key Achievements Bullet points */}
              <ul className="space-y-2 text-sm text-[#888888]">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1.5 text-xs">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#111111] text-[#888888] border border-[#1F1F1F]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

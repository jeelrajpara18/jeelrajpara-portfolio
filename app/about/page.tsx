import { personalInfo, techStack, principles } from '@/lib/data';
import { User, Cpu, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-[#F0EDE8]">About Me</h1>
        <p className="text-[#888888]">A deeper look into my background, skills, and coding philosophy.</p>
      </div>

      {/* Bio Section */}
      <section className="p-6 rounded-xl bg-[#161616] border border-[#1F1F1F] space-y-4">
        <div className="flex items-center space-x-2 text-blue-400">
          <User className="w-5 h-5" />
          <h2 className="text-lg font-semibold text-[#F0EDE8]">Background</h2>
        </div>
        <p className="text-[#888888] leading-relaxed text-sm sm:text-base">
          I am a passionate Frontend Developer based in {personalInfo.location} with 2+ years of professional experience building web applications. 
          My primary focus is crafting fluid, accessible UI components using modern JavaScript frameworks like React.js and Next.js.
        </p>
        <p className="text-[#888888] leading-relaxed text-sm sm:text-base">
          I care deeply about code architecture, reusable component patterns, and visual feedback micro-animations. Beyond building interfaces, I enjoy exploring state management paradigms and server-side rendering strategies.
        </p>
      </section>

      {/* Core Tech Stack Categories */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 text-blue-400">
          <Cpu className="w-5 h-5" />
          <h2 className="text-xl font-bold text-[#F0EDE8]">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((group) => (
            <div key={group.category} className="p-5 rounded-xl bg-[#161616] border border-[#1F1F1F]">
              <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#111111] text-[#F0EDE8] border border-[#1F1F1F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 text-blue-400">
          <Target className="w-5 h-5" />
          <h2 className="text-xl font-bold text-[#F0EDE8]">Engineering Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="p-5 rounded-xl bg-[#161616] border border-[#1F1F1F] space-y-2">
              <h3 className="text-base font-semibold text-[#F0EDE8]">{p.title}</h3>
              <p className="text-xs text-[#888888] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

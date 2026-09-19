import { personalInfo } from '@/lib/data';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-[#F0EDE8]">Get in Touch</h1>
        <p className="text-[#888888]">
          Have a project idea, a job opportunity, or just want to connect? Send me a message.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={`mailto:${personalInfo.socials.email}`}
          className="p-5 rounded-xl bg-[#161616] border border-[#1F1F1F] hover:border-blue-500/40 transition-all space-y-2 group"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#888888]">Email Me</p>
              <p className="text-sm font-semibold text-[#F0EDE8] group-hover:text-blue-400 transition-colors">
                {personalInfo.socials.email}
              </p>
            </div>
          </div>
        </a>

        <div className="p-5 rounded-xl bg-[#161616] border border-[#1F1F1F] space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#888888]">Location</p>
              <p className="text-sm font-semibold text-[#F0EDE8]">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Message Form */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#161616] border border-[#1F1F1F] space-y-6">
        <div className="flex items-center space-x-2 text-blue-400">
          <MessageSquare className="w-5 h-5" />
          <h2 className="text-lg font-semibold text-[#F0EDE8]">Send a Message</h2>
        </div>

        <form action={`mailto:${personalInfo.socials.email}`} method="GET" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#888888]">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#F0EDE8] placeholder-[#444444] text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#888888]">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#F0EDE8] placeholder-[#444444] text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#888888]">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Project Inquiry / Job Opportunity"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#F0EDE8] placeholder-[#444444] text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#888888]">Message</label>
            <textarea
              name="body"
              rows={4}
              required
              placeholder="Hello Jeel, I'd like to talk about..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#1F1F1F] text-[#F0EDE8] placeholder-[#444444] text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

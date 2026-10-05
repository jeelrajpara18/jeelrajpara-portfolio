'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Mail, MapPin, Send, MessageSquare, ArrowUpRight, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/ToastProvider';

export default function ContactPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Missing fields', 'Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully!', "Thanks for reaching out. I'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          subject: '',
          service: '',
          message: '',
        });
      } else {
        toast.error('Submission failed', data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('Network Error', 'Could not send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-8 sm:px-10 pb-12 pt-4">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
        
        {/* Left Column: Intro & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="xl:col-span-5 space-y-10"
        >
          {/* Header */}
          <div className="space-y-6">
            <span className="text-[11px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 inline-block">
              LET'S CONNECT
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white font-serif tracking-tight leading-tight">
              Have a project in mind?
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-md">
              I'd love to hear what you're working on. Whether it's a new website, a marketing idea, or an exciting opportunity, let's start a conversation.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white dark:bg-[#0e0e11] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-[14.5px] font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {personalInfo.socials.email}
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-100 dark:group-hover:border-blue-800/30 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white dark:bg-[#0e0e11] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-[14.5px] font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Connect with me
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-100 dark:group-hover:border-blue-800/30 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>

            <div className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white dark:bg-[#0e0e11] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-[14.5px] font-bold text-zinc-900 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="xl:col-span-7 mt-8 xl:mt-0"
        >
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0e0e11] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm h-full">
            <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 mb-8">
              <MessageSquare className="w-6 h-6" />
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white font-serif">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Service Interested In</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-600 dark:text-zinc-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Hello Jeel, I'd like to talk about..."
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-bold text-sm px-10 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

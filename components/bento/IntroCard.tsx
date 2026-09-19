'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '@/lib/data';

const GREETINGS = [
  "Welcome, glad you are here ✨",
  "Good afternoon 🤫",
  "Building clean web apps 💻",
  "Let's build something great 🚀",
  "Open for opportunities ⚡",
];

export function IntroCard() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = GREETINGS[greetingIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          setTypingSpeed(2200); // Pause when phrase is complete
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, greetingIndex, typingSpeed]);

  return (
    <div className="flex flex-col p-6 lg:p-7 justify-between h-full space-y-3">
      {/* 1. Top Row: Avatar & Speech Bubble with Typing Cursor */}
      <div className="flex items-center space-x-3.5">
        {/* Memoji Avatar Circle (Loads /memoji.png from public folder or falls back to 👩‍💻) */}
        <div className="w-20 h-20 flex items-center justify-center text-2xl shrink-0 overflow-hidden relative">
          <img
            src="/memoji.png"
            alt="Mac Memoji Avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.innerText = '👩‍💻';
              }
            }}
          />
        </div>
        

        <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] relative flex items-center min-h-[36px]">
          <span>{currentText}</span>
          <span className="inline-block w-1.5 h-3.5 bg-white/90 ml-1 rounded-xs animate-pulse" />
        </div>
      </div>

      {/* 2. Main Body: Headline with Wavy Blue Underline + Bio Description */}
      <div className="space-y-1.5 pt-1">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
          I&apos;m{' '}
          <span className="relative inline-block text-zinc-900 dark:text-white underline decoration-wavy decoration-blue-500 underline-offset-4 font-extrabold">
            {personalInfo.name}
          </span>
          , a Software developer from India...
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
          Building clean, efficient web solutions with React, Next.js & Tailwind CSS. I love solving problems through code and creating tools that matter.
        </p>
      </div>
    </div>
  );
}

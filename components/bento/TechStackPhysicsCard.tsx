'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
  SiGreensock,
  SiTypescript,
  SiVercel,
  SiFigma,
} from 'react-icons/si';

interface TechBadge {
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  rotate: number;
  top: string;
  left: string;
  size: number;
}
const techBadges: TechBadge[] = [
  {
    name: 'React',
    icon: <SiReact className="w-9 h-9 text-[#61dafb]" />,
    iconBg: '#ffffff',
    rotate: -11,
    top: '3%',
    left: '6%',
    size: 74,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-9 h-9 text-black" />,
    iconBg: '#ffffff',
    rotate: 9,
    top: '2%',
    left: '50%',
    size: 78,
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="w-9 h-9 text-[#181717]" />,
    iconBg: '#ffffff',
    rotate: -6,
    top: '21%',
    left: '20%',
    size: 80,
  },
  {
    name: 'Framer',
    icon: <SiFramer className="w-9 h-9 text-black" />,
    iconBg: '#ffffff',
    rotate: -13,
    top: '20%',
    left: '57%',
    size: 74,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="w-9 h-9 text-[#06b6d4]" />,
    iconBg: '#ffffff',
    rotate: 10,
    top: '41%',
    left: '4%',
    size: 76,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-9 h-9 text-[#f7df1e]" />,
    iconBg: '#323330',
    rotate: -7,
    top: '39%',
    left: '50%',
    size: 78,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-9 h-9 text-white" />,
    iconBg: '#3178c6',
    rotate: 13,
    top: '60%',
    left: '18%',
    size: 74,
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="w-9 h-9 text-black" />,
    iconBg: '#ffffff',
    rotate: 11,
    top: '59%',
    left: '56%',
    size: 72,
  },
  {
    name: 'GSAP',
    icon: <SiGreensock className="w-9 h-9 text-[#88ce02]" />,
    iconBg: '#ffffff',
    rotate: 6,
    top: '78%',
    left: '5%',
    size: 72,
  },
  {
    name: 'Figma',
    icon: <SiFigma className="w-9 h-9 text-blac" />,
    iconBg: '#ffffff',
    rotate: -8,
    top: '77%',
    left: '42%',
    size: 74,
  },
];

export function TechStackPhysicsCard() {
  return (
    <div className="relative h-full w-full min-h-[500px] overflow-hidden bg-white dark:bg-[#0e0e11] border border-zinc-200/70 dark:border-zinc-800/80 rounded-[2.2rem] transition-colors duration-300">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg
          className="w-full h-full stroke-zinc-300 dark:stroke-zinc-700 fill-none"
          viewBox="0 0 320 520"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-20 60  Q 80 120, 160 60  T 340 120"  strokeWidth="1" />
          <path d="M-20 110 Q 90 170, 170 110 T 340 170" strokeWidth="1" />
          <path d="M-20 160 Q 100 230, 180 160 T 340 230" strokeWidth="1" />
          <path d="M-20 210 Q 80 290, 200 210 T 340 290"  strokeWidth="1" />
          <path d="M-20 260 Q 110 340, 190 260 T 340 340" strokeWidth="1" />
          <path d="M-20 310 Q 90 390, 180 310 T 340 390"  strokeWidth="1" />
          <path d="M-20 360 Q 100 440, 200 360 T 340 440" strokeWidth="1" />
          <path d="M-20 410 Q 80 490, 190 410 T 340 490"  strokeWidth="1" />
          <path d="M-20 460 Q 110 530, 200 460 T 340 530" strokeWidth="1" />
        </svg>
      </div>
      {techBadges.map((badge, idx) => (
        <motion.div
          key={badge.name}
          drag
          dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
          dragElastic={0.12}
          whileHover={{ scale: 1.1, zIndex: 40 }}
          whileDrag={{ scale: 1.18, zIndex: 50 }}
          initial={{ opacity: 0, scale: 0.5, rotate: badge.rotate - 5 }}
          animate={{ opacity: 1, scale: 1, rotate: badge.rotate }}
          transition={{
            delay: idx * 0.07,
            type: 'spring',
            stiffness: 240,
            damping: 20,
          }}
          style={{
            position: 'absolute',
            top: badge.top,
            left: badge.left,
            width: badge.size,
            height: badge.size,
            zIndex: 10,
            cursor: 'grab',
          }}
          className="select-none"
        >
          <div
            className="w-full h-full rounded-[20px] flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            style={{ background: badge.iconBg }}
          >
            {badge.icon}
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 z-20">
        <Link
          href="/about"
          aria-label="View skills detail"
          className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 shadow-md flex items-center justify-center text-zinc-200 hover:scale-110 transition-transform"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import type { LayoutItem } from 'react-grid-layout/legacy';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { BentoCard } from '@/components/bento/BentoCard';
import { IntroCard } from '@/components/bento/IntroCard';
import { MapCard } from '@/components/bento/MapCard';
import { TechStackPhysicsCard } from '@/components/bento/TechStackPhysicsCard';
import { ThemeToggleCard } from '@/components/bento/ThemeToggleCard';
import { SocialConnectCard } from '@/components/bento/SocialConnectCard';
import { JourneyCard } from '@/components/bento/JourneyCard';
import { GitHubCard } from '@/components/bento/GitHubCard';
import { ProjectSpotlightCard } from '@/components/bento/ProjectSpotlightCard';
import { ContactCard } from '@/components/bento/ContactCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

const lgLayout: LayoutItem[] = [
  { i: 'intro',   x: 0, y: 0, w: 2, h: 1 },
  { i: 'map',     x: 2, y: 0, w: 1, h: 1 },
  { i: 'tech',    x: 3, y: 0, w: 1, h: 2 },
  { i: 'theme',   x: 0, y: 1, w: 1, h: 1 },
  { i: 'social',  x: 1, y: 1, w: 1, h: 1 },
  { i: 'journey', x: 2, y: 1, w: 1, h: 2 },
  { i: 'project', x: 0, y: 2, w: 2, h: 1 },
  { i: 'github',  x: 3, y: 2, w: 1, h: 1 },
  { i: 'cta',     x: 0, y: 3, w: 4, h: 1 },
];

const mdLayout: LayoutItem[] = [
  { i: 'intro',   x: 0, y: 0, w: 2, h: 1 },
  { i: 'map',     x: 0, y: 1, w: 1, h: 1 },
  { i: 'theme',   x: 1, y: 1, w: 1, h: 1 },
  { i: 'social',  x: 0, y: 2, w: 1, h: 1 },
  { i: 'github',  x: 1, y: 2, w: 1, h: 1 },
  { i: 'journey', x: 0, y: 3, w: 1, h: 2 },
  { i: 'tech',    x: 1, y: 3, w: 1, h: 2 },
  { i: 'project', x: 0, y: 5, w: 2, h: 1 },
  { i: 'cta',     x: 0, y: 6, w: 2, h: 1 },
];

const smLayout: LayoutItem[] = [
  { i: 'intro',   x: 0, y: 0, w: 1, h: 1 },
  { i: 'map',     x: 0, y: 1, w: 1, h: 1 },
  { i: 'tech',    x: 0, y: 2, w: 1, h: 2 },
  { i: 'theme',   x: 0, y: 4, w: 1, h: 1 },
  { i: 'social',  x: 0, y: 5, w: 1, h: 1 },
  { i: 'journey', x: 0, y: 6, w: 1, h: 2 },
  { i: 'github',  x: 0, y: 8, w: 1, h: 1 },
  { i: 'project', x: 0, y: 9, w: 1, h: 1 },
  { i: 'cta',     x: 0, y: 10, w: 1, h: 1 },
];

function BentoGrid() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: lgLayout, md: mdLayout, sm: smLayout }}
      breakpoints={{ lg: 1050, md: 768, sm: 0 }}
      cols={{ lg: 4, md: 2, sm: 1 }}
      rowHeight={270}
      margin={[18, 18]}
      isDraggable
      isResizable={false}
    >
      <div key="intro"><BentoCard><IntroCard /></BentoCard></div>
      <div key="map"><BentoCard><MapCard /></BentoCard></div>
      <div key="tech"><BentoCard><TechStackPhysicsCard /></BentoCard></div>
      <div key="theme"><BentoCard><ThemeToggleCard /></BentoCard></div>
      <div key="social"><BentoCard><SocialConnectCard /></BentoCard></div>
      <div key="journey"><BentoCard><JourneyCard /></BentoCard></div>
      <div key="github"><BentoCard><GitHubCard /></BentoCard></div>
      <div key="project"><BentoCard><ProjectSpotlightCard /></BentoCard></div>
      <div key="cta"><BentoCard><ContactCard /></BentoCard></div>
    </ResponsiveGridLayout>
  );
}

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      <BentoGrid />
    </div>
  );
}
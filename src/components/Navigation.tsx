'use client';

import { SECTIONS } from '@/constants/sections';
import { useSmoothScroll } from '@/hooks/useSmooth';

export default function Navigation() {
  const scrollToSection = useSmoothScroll();

  const navItems = [
    { id: SECTIONS.PROBLEM, label: 'The Problem' },
    { id: SECTIONS.DEMO, label: 'Live Demo' },
    { id: SECTIONS.FEATURES, label: 'Features' },
    { id: SECTIONS.RESOURCES, label: 'Resources' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-gray-600 hover:text-toxic-red transition-colors"
        >
          {item.label}
        </button>
      ))}
      <button
        onClick={() => scrollToSection(SECTIONS.WAITLIST)}
        className="bg-toxic-red text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
      >
        Join Waitlist
      </button>
    </nav>
  );
} 
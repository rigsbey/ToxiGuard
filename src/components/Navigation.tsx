'use client';

import { SECTIONS } from '@/constants/sections';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function Navigation() {
  const scrollToResources = useScrollToSection(SECTIONS.RESOURCES);
  const scrollToDemo = useScrollToSection(SECTIONS.DEMO);
  const scrollToProblem = useScrollToSection(SECTIONS.PROBLEM);
  const scrollToFeatures = useScrollToSection(SECTIONS.FEATURES);
  const scrollToWaitlist = useScrollToSection(SECTIONS.WAITLIST);

  const navItems = [
    { id: SECTIONS.PROBLEM, label: 'The Problem', onClick: scrollToProblem },
    { id: SECTIONS.DEMO, label: 'Live Demo', onClick: scrollToDemo },
    { id: SECTIONS.FEATURES, label: 'Features', onClick: scrollToFeatures },
    { id: SECTIONS.RESOURCES, label: 'Resources', onClick: scrollToResources },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={item.onClick}
          className="text-gray-600 hover:text-toxic-red transition-colors"
        >
          {item.label}
        </button>
      ))}
      <button
        onClick={scrollToWaitlist}
        className="bg-toxic-red text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
      >
        Join Waitlist
      </button>
    </nav>
  );
} 
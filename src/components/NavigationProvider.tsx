'use client';

import { usePathname } from 'next/navigation';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';
import { useEffect } from 'react';

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#waitlist-section') {
      scrollToWaitlist();
    }
  }, [pathname, scrollToWaitlist]);

  return <>{children}</>;
} 
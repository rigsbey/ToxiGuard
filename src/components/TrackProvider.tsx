'use client';

import { useEffect } from 'react';

export default function TrackProvider() {
  useEffect(() => {
    window.trackEvent = (action: string) => {
      console.log('Track event:', action);
      // Добавьте здесь интеграцию с аналитикой (Google Analytics и т.д.)
    };
  }, []);

  return null;
} 
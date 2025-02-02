import { useEffect } from 'react';

export const useTrackCTA = (id: string) => {
  useEffect(() => {
    const button = document.getElementById(id);
    button?.addEventListener('click', () => {
      (window as any).gtag('event', 'cta_click', {
        'event_category': 'Conversion',
        'event_label': id
      });
    });
  }, [id]);
}; 
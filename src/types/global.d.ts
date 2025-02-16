declare global {
  interface Window {
    trackEvent?: (event: string, ...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
  const analytics: {
    track: (event: string, data: { from: string; to: string; type: string }) => void;
  };
}

export {}; 
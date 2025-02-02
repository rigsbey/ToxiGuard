declare global {
  interface Window {
    trackEvent?: (event: string, ...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

export {}; 
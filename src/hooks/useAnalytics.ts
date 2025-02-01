export const useTrackCTA = (id: string) => {
  useEffect(() => {
    const button = document.getElementById(id);
    button?.addEventListener('click', () => {
      window.gtag('event', 'cta_click', {
        'event_category': 'Conversion',
        'event_label': id
      });
    });
  }, [id]);
}; 
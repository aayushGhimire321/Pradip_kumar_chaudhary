import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = ((import.meta as any).env && (import.meta as any).env.VITE_GA_ID) as string | undefined;

function doNotTrackEnabled() {
  try {
    const dnt = (navigator as any).doNotTrack || (window as any).doNotTrack || (navigator as any).msDoNotTrack;
    if (!dnt) return false;
    return dnt === '1' || dnt === 'yes' || dnt === 'true';
  } catch (e) {
    return false;
  }
}

export function Analytics(): null {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    if (doNotTrackEnabled()) return;

    const src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = src;
      document.head.appendChild(s);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer!.push(arguments); } as any;
    if (typeof window.gtag === 'function') {
      window.gtag('js', new Date());
      // disable automatic page_view; we'll send it manually on route changes
      window.gtag('config', GA_ID, { send_page_view: false });
    }
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    if (doNotTrackEnabled()) return;
    if (typeof window.gtag !== 'function') return;

    // Only send page_view events when the user has granted consent
    try {
      const consent = localStorage.getItem('ga_consent');
      if (consent !== 'granted') return;
    } catch (e) {
      // ignore localStorage errors and proceed
    }

    // Send a manual page_view for SPA route changes
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}

export default Analytics;

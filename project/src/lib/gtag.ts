// Lightweight gtag wrapper so components can safely call gtag without checking window.gtag everywhere.
// It pushes to dataLayer if gtag isn't available yet.

type GtagArgs = any[];

export function gtag(...args: GtagArgs) {
  if (typeof window === 'undefined') return;
  // prefer calling the real gtag function when available
  // @ts-ignore
  if (typeof window.gtag === 'function') {
    // @ts-ignore
    window.gtag(...args);
    return;
  }

  // otherwise queue on dataLayer so gtag processes it once loaded
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push(args);
}

export default gtag;

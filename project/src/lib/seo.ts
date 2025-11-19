export const SITE = {
  title: 'Pradip Kumar Chaudhary',
  description:
    'Actor, playwright, and director Pradip Kumar Chaudhary — portfolio, biography, showreels, news, and contact for bookings, collaborations, and press enquiries.',
  siteUrl: 'http://pradip-chaudhary.com.np', // production URL provided by user
  defaultImage: '/og-image.png',
  author: 'Pradip Kumar Chaudhary',
  twitter: '@pradipkumar',
  language: 'en-US',
};

export const structuredDataPerson = (overrides = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.title,
  url: SITE.siteUrl,
  sameAs: [
    'https://www.facebook.com/pradip.k.chaudhary.1',
    'https://www.instagram.com/pradipkumar__chaudhary/',
    'https://www.youtube.com/@devdatcreations4526',
  ],
  ...overrides,
});

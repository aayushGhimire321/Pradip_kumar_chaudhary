export const SITE = {
  title: 'Pradip Kumar Chaudhary',
  description:
    'Pradip Kumar Chaudhary — actor, playwright and director. Portfolio, biography and contact for bookings and collaborations.',
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
  sameAs: [],
  ...overrides,
});

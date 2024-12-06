module.exports = {
  siteTitle: 'Aravind Potluri',
  siteDescription: 'Systems Software Dev, still tring to figure how to exit vim.',
  siteKeywords: 'Aravind Potluri, Aravind, Potluri, Systems software, Kernel Developer, IIST, IITK',
  siteUrl: 'https://cipherswami.github.io/',
  siteLanguage: 'en_US',
  name: 'Aravind Potluri',
  googleAnalyticsID: 'G-FHVXWXYK4G',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  location: 'Visakhapatnam, India',
  email: 'aravindswami135@gmail.com',
  github: 'https://github.com/cipherswami',
  twitterHandle: '@cipherswami',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/cipherswami',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/cipherswami',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cipherswami',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/cipherswami',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

// Centralized project configuration — update this file for any branding/content changes

export const siteConfig = {
  name: 'Yaganti Signature Suites',
  developer: 'Yaganti Constructions',
  developerGroup: 'Yaganti Group',
  developerWebsite: 'https://www.yagantigroup.com/',
  tagline: 'Luxury Redefined. Elegance Perfected.',
  subTagline: 'Discover a signature address crafted for refined living.',
  city: 'Guntur',
  state: 'Andhra Pradesh',
  country: 'India',
  pincode: '522007',

  // Contact — from brochure page 28
  phones: [
    { number: '+919848114442', display: '+91 98481 14442' },
    { number: '+919849585551', display: '+91 98495 85551' },
    { number: '+918632233581', display: '+91 863 2233581' },
  ],
  email: 'Yagantiestatesguntur@gmail.com',
  officeAddress: {
    line1: 'Door No. 3-30-4/1,',
    line2: 'Brundavan Gardens, 1st Lane,',
    line3: 'Road beside Sanjivi Slim Clinic,',
    line4: 'Guntur – 522007, Andhra Pradesh, India.',
  },

  // WhatsApp — disabled until confirmed number is provided
  whatsapp: {
    enabled: false,
    number: '', // Set to verified WhatsApp number to enable
    message:
      'Hello, I am interested in Yaganti Signature Suites. Please share more details about the project.',
  },

  // Project facts — from brochure
  totalApartments: 40,
  // BHK: PENDING CONFIRMATION — see CONTENT_REVIEW.md
  // Brochure states both 3 BHK (page 6) and 4 BHK (page 17)
  bhkConfig: 'PENDING_CONFIRMATION' as const,
  apartmentAreas: ['3,400 sq. ft.', '3,550 sq. ft.'],

  // Developer info — from brochure page 26
  completedProjects: 38,
  leadership: [
    'Mr. Yaganti Durga Prasad Rao',
    'Mr. Yaganti Durga Sudhakar',
  ],
  entities: ['Yaganti Constructions', 'Yaganti Estates', 'Yaganti Builders'],

  // SEO
  siteUrl: 'https://yagantisuites.com', // Update with actual domain
  siteDescription:
    'Discover Yaganti Signature Suites by Yaganti Constructions, featuring spacious luxury residences, premium interiors, thoughtfully planned amenities and east- and west-facing floor plans in Guntur.',

  // Analytics — configure with actual IDs
  gtmId: '', // e.g. GTM-XXXXXXX
  ga4Id: '', // e.g. G-XXXXXXXXXX
  gscVerification: '', // Google Search Console HTML tag value

  // Brochure
  brochurePath: '/documents/Yaganti_Signature_Suites_Brochure_pdf_11zon.pdf',

  // Developer credit
  webDeveloper: 'Focus Web Media',
  webDeveloperUrl: 'https://focuswebmedia.in/',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/floor-plans', label: 'Floor Plans' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/interiors', label: 'Interiors' },
  { href: '/specifications', label: 'Specifications' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
];

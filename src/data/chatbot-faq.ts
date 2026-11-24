export type ChatbotMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
};

export type FAQEntry = {
  keywords: string[];
  answer: string;
  quickReplies?: string[];
};

export const quickActions = [
  'About the Project',
  'Apartment Sizes',
  'Floor Plans',
  'Amenities',
  'Specifications',
  'Location',
  'Download Brochure',
  'Request Pricing',
  'Schedule a Site Visit',
  'Contact Sales Team',
];

export const faqKnowledgeBase: FAQEntry[] = [
  {
    keywords: ['about', 'project', 'what is', 'tell me', 'overview'],
    answer:
      'Yaganti Signature Suites is an exclusive residential development by Yaganti Constructions in Guntur, Andhra Pradesh. The project features 40 premium residences with spacious interiors, a dedicated home theatre area in every apartment, and thoughtfully planned amenities. Total apartment areas range from 3,400 to 3,550 sq. ft.',
    quickReplies: ['Apartment Sizes', 'Amenities', 'Location'],
  },
  {
    keywords: ['size', 'area', 'sq ft', 'sqft', 'square feet', 'apartment size', 'flat size'],
    answer:
      'Yaganti Signature Suites offers two apartment configurations:\n\n• Type A: Total Area 3,550 sq. ft. (Carpet: 2,267.57 sq. ft. | Plinth: 2,718.88 sq. ft.) — Flats 101, 104, 105, 106, 107, 108\n\n• Type B: Total Area 3,400 sq. ft. (Carpet: 2,207.76 sq. ft. | Plinth: 2,609.38 sq. ft.) — Flats 102, 103\n\nWould you like to know more about the floor plans?',
    quickReplies: ['Floor Plans', 'Request Pricing', 'Schedule a Site Visit'],
  },
  {
    keywords: ['bhk', '3 bhk', '4 bhk', 'bedroom', 'bedrooms', 'configuration'],
    answer:
      'Each residence features spacious bedrooms including a Master Bedroom, plus additional bedrooms and a dedicated Home Theatre area. For the exact BHK classification, our sales team can provide the latest confirmed information. Would you like to request a callback?',
    quickReplies: ['Contact Sales Team', 'Schedule a Site Visit'],
  },
  {
    keywords: ['floor plan', 'layout', 'plan', 'east facing', 'west facing'],
    answer:
      'Yaganti Signature Suites offers East Facing and West Facing floor plans, both Vaastu-compliant. Each unit includes a Living & Dining area, Drawing Room, Dedicated Home Theatre, Kitchen, Balcony, and multiple bedrooms with attached bathrooms. You can view and download the floor plans on our Floor Plans page.',
    quickReplies: ['Apartment Sizes', 'View Floor Plans'],
  },
  {
    keywords: ['amenities', 'facilities', 'features', 'gym', 'library', 'snooker', 'carrom'],
    answer:
      'Yaganti Signature Suites offers a comprehensive range of amenities:\n\n• Gym provision\n• Library\n• Carrom board\n• Snooker table\n• Children\'s play area\n• Landscaped garden with herbal plantation\n• Elderly sitting area\n• Reserved car parking\n• Two-wheeler parking\n• OTIS passenger lift\n• CCTV surveillance\n• Solar fencing\n• Intercom facility\n• Boom barrier\n• DG power backup',
    quickReplies: ['Specifications', 'About the Project'],
  },
  {
    keywords: ['home theatre', 'theatre', 'theater', 'cinema'],
    answer:
      'Every apartment at Yaganti Signature Suites features a dedicated home theatre area — a private cinematic retreat where you can create unforgettable movie and leisure moments. It is a distinctive feature of this project, allowing you to craft a cinematic experience aligned with your personal style.',
    quickReplies: ['Apartment Sizes', 'Floor Plans'],
  },
  {
    keywords: ['parking', 'car park', 'vehicle'],
    answer:
      'Each apartment at Yaganti Signature Suites comes with 2 reserved covered car parking spaces and two-wheeler parking — included with every flat.',
    quickReplies: ['About the Project', 'Amenities'],
  },
  {
    keywords: ['vaastu', 'vastu', 'compliant'],
    answer:
      'All apartments at Yaganti Signature Suites are designed with Vaastu-compliant construction, ensuring a harmonious and positive living environment. Both East and West facing configurations follow Vaastu principles.',
    quickReplies: ['Floor Plans', 'About the Project'],
  },
  {
    keywords: ['location', 'where', 'address', 'guntur', 'nearby', 'landmark'],
    answer:
      'Yaganti Signature Suites is located in Guntur, Andhra Pradesh, near:\n\n• Amaravathi Road\n• Inner Ring Road Phase I & II\n• JKC College Road\n• RTO Office\n• Fuel Station\n• Aaditri Exotica\n• Seethaiah Donka\n\nFor directions, please contact our sales team.',
    quickReplies: ['Contact Sales Team', 'Schedule a Site Visit'],
  },
  {
    keywords: ['developer', 'yaganti', 'constructions', 'builder', 'who built'],
    answer:
      'Yaganti Signature Suites is developed by Yaganti Constructions, led by Mr. Yaganti Durga Prasad Rao and Mr. Yaganti Durga Sudhakar. Yaganti Constructions has completed 38 residential projects in Guntur. The Yaganti Group also includes Yaganti Estates and Yaganti Builders, delivering villas, plots and resort developments in Bapatla.',
    quickReplies: ['About the Project', 'Contact Sales Team'],
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'sales team'],
    answer:
      'You can reach our sales team at:\n\n📞 +91 98481 14442\n📞 +91 98495 85551\n📞 +91 863 2233581\n\n📧 Yagantiestatesguntur@gmail.com\n\nOr visit our Contact page to send an enquiry directly.',
    quickReplies: ['Schedule a Site Visit', 'Request Pricing'],
  },
  {
    keywords: ['price', 'cost', 'rate', 'pricing', 'how much'],
    answer:
      'Our sales team can provide the latest confirmed pricing information. Would you like to request a callback or schedule a site visit?',
    quickReplies: ['Request Pricing', 'Contact Sales Team', 'Schedule a Site Visit'],
  },
  {
    keywords: ['rera', 'registration', 'approved', 'approval'],
    answer:
      'Our sales team can provide the latest confirmed information about project registrations and approvals. Would you like to request a callback?',
    quickReplies: ['Contact Sales Team', 'Request Pricing'],
  },
  {
    keywords: ['possession', 'completion', 'ready', 'handover', 'when'],
    answer:
      'Our sales team can provide the latest confirmed information on construction progress and timelines. Would you like to request a callback?',
    quickReplies: ['Contact Sales Team', 'Schedule a Site Visit'],
  },
  {
    keywords: ['brochure', 'download', 'pdf'],
    answer:
      'You can download the official Yaganti Signature Suites brochure from our website. Would you like to visit the Floor Plans page or schedule a site visit?',
    quickReplies: ['Download Brochure', 'Schedule a Site Visit'],
  },
  {
    keywords: ['specification', 'specs', 'material', 'quality', 'flooring', 'door', 'window', 'ac'],
    answer:
      'Yaganti Signature Suites is built with premium specifications including:\n\n• RCC framed structure\n• Premium vitrified tiles in living areas\n• Engineered wood / hardwood doors\n• UPVC windows (Veka or equivalent)\n• Premium bathroom fittings (Grohe / Jaquar / CERA or equivalent)\n• Daikin or equivalent split ACs (up to 6 units)\n• Modular wardrobes and woodwork\n• False ceilings with ambient lighting\n\nSee the full Specifications page for complete details.',
    quickReplies: ['Specifications', 'About the Project'],
  },
  {
    keywords: ['site visit', 'visit', 'schedule', 'appointment'],
    answer:
      "I'd be happy to help you schedule a site visit! Please share your name and phone number and I'll connect you with our sales team.",
    quickReplies: ['Contact Sales Team'],
  },
];

export const welcomeMessage =
  'Welcome to Yaganti Signature Suites! How can I assist you in discovering your new home?';

export const unknownResponse =
  "Thank you for your question. Our sales team can provide the latest confirmed information on this. Would you like to request a callback or speak with us directly?";

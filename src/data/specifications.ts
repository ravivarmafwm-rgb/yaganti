export type SpecCategory = {
  id: string;
  title: string;
  icon: string;
  items: string[];
};

export const specifications: SpecCategory[] = [
  {
    id: 'structure',
    title: 'Structure',
    icon: 'Building',
    items: [
      'Seismic zone and RCC framed structure',
    ],
  },
  {
    id: 'super-structure',
    title: 'Super Structure',
    icon: 'Layers',
    items: [
      'Moulded clay bricks',
      'Internal — Cement plaster smooth finish',
      'External — Sponge finish',
    ],
  },
  {
    id: 'painting',
    title: 'Plastering & Paints',
    icon: 'Paintbrush',
    items: [
      'Internal — Birla Wallcare and two coats of Berger/Asian paints over it',
      'External — Berger/Asian paints Weather Coat Paint',
    ],
  },
  {
    id: 'doors',
    title: 'Doors & Door Frames',
    icon: 'DoorOpen',
    items: [
      'Engineered wood / Hardwood frame with veneer on both sides',
      'Greenlam / Hunsply or equivalent brand',
    ],
  },
  {
    id: 'windows',
    title: 'Windows',
    icon: 'Square',
    items: [
      'UPVC windows with MS grills',
      'Veka or equivalent brand',
    ],
  },
  {
    id: 'flooring',
    title: 'Flooring',
    icon: 'Grid',
    items: [
      'Vitrified tiles in drawing, living, dining and bedrooms',
      'Premium ceramic tiles in kitchen, toilets and wash areas',
    ],
  },
  {
    id: 'toilets',
    title: 'Bathrooms & Toilets',
    icon: 'Droplets',
    items: [
      'Premium quality ceramic tile dadoing up to 8 feet height',
      'CP bathroom fittings from reputed brands: Grohe / Jaquar / CERA or equivalent',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: 'Zap',
    items: [
      'Finolex / RR cables',
      'Legrand / Schneider distribution board with isolators, circuit breakers and switches',
      'Split AC for living rooms and bedrooms — Daikin or equivalent (maximum 6 units)',
    ],
  },
  {
    id: 'ceiling',
    title: 'Ceiling & Lighting',
    icon: 'Lightbulb',
    items: [
      'False ceiling in all rooms with ambient ceiling lights',
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Security',
    icon: 'Phone',
    items: [
      'Telephone points in living area',
      'Provision for internet connection',
      'Intercom facility in all flats connecting to security',
    ],
  },
  {
    id: 'lift',
    title: 'Lift',
    icon: 'ArrowUpDown',
    items: [
      '10-passenger lift (OTIS) with stainless steel body and automatic doors',
    ],
  },
  {
    id: 'parking',
    title: 'Parking',
    icon: 'Car',
    items: [
      'Each flat: 2 car parking spaces and two-wheeler parking',
    ],
  },
  {
    id: 'landscape',
    title: 'Landscape & Parks',
    icon: 'Trees',
    items: [
      'Provision for gym',
      'Elderly sitting area provision',
    ],
  },
  {
    id: 'wardrobe',
    title: 'Wardrobe & Woodwork',
    icon: 'Package',
    items: [
      'Wardrobes, kitchen and woodwork are of modular make',
    ],
  },
  {
    id: 'other',
    title: 'Other Services',
    icon: 'Settings',
    items: [
      '100% DG backup for common lighting and lights & fans of all flats',
      'Community surveillance and integrated security system',
      'Boom barrier',
      'Registration charges, GST and labour cess are extra',
    ],
  },
];

export const specHighlights = [
  { icon: 'Building', label: 'RCC Framed Structure' },
  { icon: 'Grid', label: 'Premium Flooring' },
  { icon: 'Package', label: 'Modular Woodwork' },
  { icon: 'Droplets', label: 'Premium Bathroom Fittings' },
  { icon: 'DoorOpen', label: 'Engineered Wood Doors' },
  { icon: 'Square', label: 'UPVC Windows' },
  { icon: 'Lightbulb', label: 'False Ceilings & Ambient Lighting' },
  { icon: 'Shield', label: 'Communication & Security' },
];

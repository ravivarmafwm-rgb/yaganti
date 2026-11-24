export type AmenityCategory = {
  id: string;
  title: string;
  icon: string;
  items: Amenity[];
};

export type Amenity = {
  id: string;
  name: string;
  description: string;
  icon: string;
  isProvision?: boolean; // true = "provision for" per brochure
};

export const amenityCategories: AmenityCategory[] = [
  {
    id: 'wellness',
    title: 'Wellness & Recreation',
    icon: 'Dumbbell',
    items: [
      {
        id: 'gym',
        name: 'Gym Provision',
        description: 'A dedicated space planned for fitness and wellness activities.',
        icon: 'Dumbbell',
        isProvision: true,
      },
      {
        id: 'library',
        name: 'Library',
        description: 'A quiet reading room to explore knowledge and find peaceful moments.',
        icon: 'BookOpen',
      },
      {
        id: 'carrom',
        name: 'Carrom Board',
        description: 'Classic indoor entertainment for family and community bonding.',
        icon: 'Grid3X3',
      },
      {
        id: 'snooker',
        name: 'Snooker',
        description: 'A full-size snooker table for leisure and recreation.',
        icon: 'Circle',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family & Leisure',
    icon: 'Users',
    items: [
      {
        id: 'childrens-play',
        name: "Children's Play Area",
        description: 'A safe and joyful outdoor space designed for young residents.',
        icon: 'Baby',
      },
      {
        id: 'elderly-sitting',
        name: 'Elderly Sitting Area',
        description: 'A comfortable and accessible space planned for senior residents.',
        icon: 'Armchair',
        isProvision: true,
      },
    ],
  },
  {
    id: 'landscape',
    title: 'Landscape & Outdoor',
    icon: 'Leaf',
    items: [
      {
        id: 'landscaped-garden',
        name: 'Landscaped Garden',
        description: 'A beautifully designed garden creating a serene natural environment.',
        icon: 'Trees',
      },
      {
        id: 'herbal-plantation',
        name: 'Herbal Plantation',
        description: 'A dedicated herbal garden within the landscaped areas.',
        icon: 'Leaf',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety & Convenience',
    icon: 'Shield',
    items: [
      {
        id: 'car-parking',
        name: 'Reserved Car Parking',
        description: 'Two covered and reserved car parking spaces for each apartment.',
        icon: 'Car',
      },
      {
        id: 'twowheeler-parking',
        name: 'Two-Wheeler Parking',
        description: 'Dedicated two-wheeler parking for every flat.',
        icon: 'Bike',
      },
      {
        id: 'lift',
        name: 'Passenger Lift',
        description: 'OTIS 10-passenger lift with stainless steel body and automatic doors.',
        icon: 'ArrowUpDown',
      },
      {
        id: 'cctv',
        name: 'CCTV Surveillance',
        description: 'Community surveillance with CCTV cameras for round-the-clock security.',
        icon: 'Video',
      },
      {
        id: 'solar-fencing',
        name: 'Solar Fencing',
        description: 'Enhanced perimeter security with solar fencing surrounding the property.',
        icon: 'Zap',
      },
      {
        id: 'intercom',
        name: 'Intercom Facility',
        description: 'Intercom connecting all flats to the security station.',
        icon: 'Phone',
      },
      {
        id: 'boom-barrier',
        name: 'Boom Barrier',
        description: 'Automated boom barrier for controlled vehicle entry and exit.',
        icon: 'GanttChart',
      },
      {
        id: 'dg-backup',
        name: 'DG Power Backup',
        description: 'Diesel generator backup for common lighting and lights and fans of all flats.',
        icon: 'Zap',
      },
    ],
  },
];

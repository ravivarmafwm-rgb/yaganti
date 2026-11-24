export type FloorPlanType = {
  id: string;
  name: string;
  flatNumbers: string;
  carpetArea: string;
  plinthArea: string;
  totalArea: string;
  image: string;
  rooms: RoomDetail[];
};

export type RoomDetail = {
  name: string;
  dimensions?: string;
};

export const floorPlans: FloorPlanType[] = [
  {
    id: 'type-a',
    name: 'Type A — East Facing',
    flatNumbers: '101, 104, 105, 106, 107, 108',
    carpetArea: '2,267.57 sq. ft.',
    plinthArea: '2,718.88 sq. ft.',
    totalArea: '3,550 sq. ft.',
    image: '/images/floor-plans/east-facing-plan.png',
    rooms: [
      { name: 'Master Bedroom', dimensions: "13'-6\" × 17'-6\"" },
      { name: 'Bedroom-2', dimensions: "13'-0\" × 17'-1\"" },
      { name: 'Bedroom-1', dimensions: "11'-6\" × 17'-11\"" },
      { name: 'Living & Dining', dimensions: "32'-0\" × 17'-1\"" },
      { name: 'Drawing Room', dimensions: "14'-0\" × 21'-9\"" },
      { name: 'Home Theatre', dimensions: "14'-0\" × 17'-5\"" },
      { name: 'Kitchen', dimensions: "10'-0\" × 11'-9\"" },
      { name: 'Balcony', dimensions: "7'-6\" × 17'-3\"" },
      { name: 'Puja Room', dimensions: "7'-9\" × 5'-9\"" },
      { name: 'Store Room', dimensions: "7'-9\" × 7'-9\"" },
      { name: 'Utility', dimensions: "5'-3\" × 3'-5\"" },
    ],
  },
  {
    id: 'type-b',
    name: 'Type B — West Facing',
    flatNumbers: '102, 103',
    carpetArea: '2,207.76 sq. ft.',
    plinthArea: '2,609.38 sq. ft.',
    totalArea: '3,400 sq. ft.',
    image: '/images/floor-plans/west-facing-plan.png',
    rooms: [
      { name: 'Master Bedroom', dimensions: "13'-6\" × 17'-11\"" },
      { name: 'Bedroom-2', dimensions: "13'-0\" × 17'-6\"" },
      { name: 'Living & Dining', dimensions: "41'-9\" × 17'-1\"" },
      { name: 'Drawing Room', dimensions: "14'-0\" × 17'-6\"" },
      { name: 'Home Theatre', dimensions: "14'-0\" × 17'-6\"" },
      { name: 'Kitchen', dimensions: "10'-0\" × 11'-9\"" },
      { name: 'Balcony', dimensions: "6'-0\" × 17'-3\"" },
      { name: 'Puja Room', dimensions: "6'-0\" × 7'-3\"" },
      { name: 'Utility', dimensions: "9'-9\" × 5'-0\"" },
    ],
  },
];

export const masterLayoutImage = '/images/floor-plans/master-layout.png';

export const floorPlanNote =
  'Floor plans are illustrative. Actual dimensions may vary slightly. Carpet area, plinth area and total area are as indicated in the official area schedule. Facing direction confirmed for flat number groups as above. This brochure is a conceptual presentation and not a legal offering.';

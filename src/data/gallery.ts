export type GalleryCategory = {
  id: string;
  label: string;
  images: GalleryImage[];
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'elevations',
    label: 'Elevations',
    images: [
      { id: 'e1', src: '/images/elevations/elevation-entrance.webp', alt: 'Yaganti Signature Suites main entrance elevation', width: 1920, height: 1080 },
      { id: 'e2', src: '/images/elevations/elevation-front.webp', alt: 'Yaganti Signature Suites full front elevation', width: 1920, height: 1080 },
      { id: 'e3', src: '/images/elevations/elevation-side.webp', alt: 'Yaganti Signature Suites side elevation with landscaping', width: 1920, height: 1080 },
    ],
  },
  {
    id: 'interiors',
    label: 'Interiors',
    images: [
      { id: 'i1', src: '/images/interiors/master-bedroom.webp', alt: 'Master bedroom interior render', width: 1920, height: 1080 },
      { id: 'i2', src: '/images/interiors/kids-bedroom.webp', alt: 'Kids bedroom interior render', width: 1920, height: 1080 },
      { id: 'i3', src: '/images/interiors/guest-bedroom.webp', alt: 'Guest bedroom interior render', width: 1920, height: 1080 },
      { id: 'i4', src: '/images/interiors/visitors-lounge.webp', alt: "Visitor's lounge interior render", width: 1920, height: 1080 },
      { id: 'i5', src: '/images/interiors/living-room.webp', alt: 'Living room interior render', width: 1920, height: 1080 },
      { id: 'i6', src: '/images/interiors/home-theatre.webp', alt: 'Home theatre interior render', width: 1920, height: 1080 },
      { id: 'i7', src: '/images/interiors/kitchen.webp', alt: 'Kitchen interior render', width: 1920, height: 1080 },
      { id: 'i8', src: '/images/interiors/balcony.webp', alt: 'Balcony interior render', width: 1920, height: 1080 },
      { id: 'i9', src: '/images/interiors/corridor.webp', alt: 'Common corridor render', width: 1920, height: 1080 },
    ],
  },
  {
    id: 'amenities',
    label: 'Amenities',
    images: [
      { id: 'a1', src: '/images/amenities/carrom.webp', alt: 'Carrom board facility', width: 800, height: 800 },
      { id: 'a2', src: '/images/amenities/gym.webp', alt: 'Gym facility', width: 800, height: 800 },
      { id: 'a3', src: '/images/amenities/library.webp', alt: 'Library facility', width: 800, height: 800 },
      { id: 'a4', src: '/images/amenities/snooker.webp', alt: 'Snooker table', width: 800, height: 800 },
    ],
  },
  {
    id: 'floor-plans',
    label: 'Floor Plans',
    images: [
      { id: 'f1', src: '/images/floor-plans/master-layout.png', alt: 'Master floor plan layout', width: 2400, height: 1800 },
      { id: 'f2', src: '/images/floor-plans/east-facing-plan.png', alt: 'East facing floor plan with dimensions', width: 2400, height: 3000 },
      { id: 'f3', src: '/images/floor-plans/west-facing-plan.png', alt: 'West facing floor plan with dimensions', width: 2400, height: 3000 },
    ],
  },
];

'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Dumbbell, BookOpen, Grid3X3, Circle, Baby, Armchair, Trees, Leaf, Car, Bike, ArrowUpDown, Video, Zap, Phone, GanttChart, Shield, Users } from 'lucide-react';
import { amenityCategories } from '@/src/data/amenities';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell, BookOpen, Grid3X3, Circle, Baby, Armchair, Trees, Leaf, Car, Bike, ArrowUpDown, Video, Zap, Phone, GanttChart, Shield, Users,
};

const amenityImages = [
  { src: '/images/amenities/carrom.webp', label: 'Carrom Board', fallback: 'bg-amber-100' },
  { src: '/images/amenities/gym.webp', label: 'Gym Provision', fallback: 'bg-zinc-100' },
  { src: '/images/amenities/library.webp', label: 'Library', fallback: 'bg-amber-50' },
  { src: '/images/amenities/snooker.webp', label: 'Snooker', fallback: 'bg-green-900/30' },
];

export function AmenitiesSection() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Amenities & Facilities"
          heading="Make Every Day More Rewarding"
          subheading="A thoughtfully curated selection of recreational, leisure and security amenities."
          className="mb-14"
        />

        {/* Image carousel */}
        <div className="mb-14">
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-4 gap-2">
              {amenityImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`relative aspect-square overflow-hidden ${img.fallback} border-2 transition-all ${i === imgIndex ? 'border-gold scale-[1.02]' : 'border-transparent opacity-80 hover:opacity-100'}`}
                >
                  <FallbackImage src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <span className="font-body text-xs text-white font-semibold uppercase tracking-widest">{img.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenityCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] ?? Shield;
            return (
              <div key={cat.id}>
                <div className="flex items-center gap-2 mb-4">
                  <CatIcon className="w-4 h-4 text-gold" />
                  <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal">{cat.title}</h3>
                </div>
                <span className="block w-8 h-px bg-gold mb-5" />
                <ul className="space-y-3">
                  {cat.items.map((item) => {
                    const ItemIcon = iconMap[item.icon] ?? Shield;
                    return (
                      <li key={item.id} className="flex items-start gap-3">
                        <ItemIcon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm text-charcoal font-medium">
                            {item.name}
                            {item.isProvision && (
                              <span className="ml-1.5 text-xs text-muted font-normal italic">(provision)</span>
                            )}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/amenities" className="btn-gold inline-flex items-center gap-2">
            Explore All Amenities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

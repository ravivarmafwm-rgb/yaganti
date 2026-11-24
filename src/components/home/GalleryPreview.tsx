'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { galleryCategories } from '@/src/data/gallery';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

type CategoryId = 'elevations' | 'interiors' | 'amenities' | 'floor-plans';

export function GalleryPreview() {
  const [activeTab, setActiveTab] = useState<CategoryId>('elevations');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const cat = galleryCategories.find((c) => c.id === activeTab);
  const preview = cat?.images.slice(0, 6) ?? [];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Gallery"
          heading="A Closer Look at Signature Living"
          className="mb-10"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id as CategoryId)}
              className={`px-5 py-2 font-body text-xs font-semibold uppercase tracking-widest transition-all border ${activeTab === c.id ? 'bg-gold text-white border-gold' : 'border-border-gold text-muted hover:text-charcoal hover:border-charcoal'}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {preview.map((img) => (
            <button
              key={img.id}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              className="relative aspect-square overflow-hidden group bg-gradient-to-br from-stone-100 to-stone-200 border border-border-gold"
            >
              <FallbackImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <span className="font-body text-xs text-muted uppercase tracking-widest text-center px-2">{img.alt}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-gold inline-flex items-center gap-2">
            Explore Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <FallbackImage
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

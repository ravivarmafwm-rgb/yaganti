'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { interiorSpaces } from '@/src/data/project';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

export function InteriorsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + interiorSpaces.length) % interiorSpaces.length);
  const next = () => setCurrent((c) => (c + 1) % interiorSpaces.length);

  const space = interiorSpaces[current];

  return (
    <section className="py-20 lg:py-28 bg-ivory overflow-hidden">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Interiors & Lifestyle"
          heading="Luxury in Every Corner"
          subheading="From the master bedroom to the dedicated home theatre — every space at Signature Suites is a testament to refined taste."
          className="mb-12"
        />

        <div className="relative">
          {/* Main image area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-border-gold">
            {/* Image */}
            <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] ${space.imageFallback} overflow-hidden`}>
              <FallbackImage
                src={space.image}
                alt={space.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Room label */}
              <div className="absolute top-4 left-4 bg-gold px-3 py-1">
                <span className="font-body text-xs font-semibold text-white uppercase tracking-widest">{space.name}</span>
              </div>
              {/* Illustrative note */}
              <div className="absolute bottom-3 right-3">
                <span className="font-body text-xs text-white/60 italic bg-black/30 px-2 py-1">Illustrative render</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-charcoal p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="font-body text-xs text-gold uppercase tracking-widest mb-2">
                  {String(current + 1).padStart(2, '0')} / {String(interiorSpaces.length).padStart(2, '0')}
                </p>
                <h3 className="font-heading text-3xl lg:text-4xl text-white mb-4">{space.name}</h3>
                <span className="block w-10 h-px bg-gold mb-6" />
                <p className="font-body text-white/70 leading-relaxed text-base">{space.description}</p>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-3">
                  <button onClick={prev} className="w-10 h-10 border border-white/20 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-colors" aria-label="Previous">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={next} className="w-10 h-10 border border-white/20 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-colors" aria-label="Next">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                {/* Progress dots */}
                <div className="flex gap-1.5">
                  {interiorSpaces.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`transition-all rounded-full ${i === current ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/30'}`}
                      aria-label={`View ${interiorSpaces[i].name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-5 lg:grid-cols-9 gap-2 overflow-x-auto scrollbar-hide">
            {interiorSpaces.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`aspect-square flex-shrink-0 overflow-hidden border-2 transition-all ${s.imageFallback} ${i === current ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                aria-label={s.name}
              >
                <FallbackImage src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/interiors" className="btn-gold inline-flex items-center gap-2">
            Explore All Interiors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BrochureGate } from '@/src/components/shared/BrochureGate';

const slides = [
  {
    id: 1,
    headline: 'Luxury Redefined.',
    headlinePart2: 'Elegance Perfected.',
    sub: 'Discover premium residences crafted for a life of distinction in Guntur.',
    cta1: { label: 'Explore the Project', href: '/about' },
    cta2: { label: 'Schedule a Site Visit', href: '/contact?type=site-visit' },
    bgGradient: 'from-charcoal/80 via-charcoal/60 to-transparent',
  },
  {
    id: 2,
    headline: 'More Space.',
    headlinePart2: 'More Possibilities.',
    sub: 'Thoughtfully planned residences spanning 3,400 to 3,550 sq. ft.',
    cta1: { label: 'Explore Floor Plans', href: '/floor-plans' },
    cta2: { label: 'Enquire Now', href: '/contact' },
    bgGradient: 'from-charcoal/80 via-charcoal/60 to-transparent',
  },
  {
    id: 3,
    headline: 'Every Detail,',
    headlinePart2: 'A Signature of Luxury.',
    sub: 'Discover elegant interiors and spaces designed around your lifestyle.',
    cta1: { label: 'Discover Interiors', href: '/interiors' },
    cta2: { label: 'Download Brochure', href: '#', download: true },
    bgGradient: 'from-charcoal/80 via-charcoal/60 to-transparent',
  },
];

const bgImages = ['/images/hero/residences.svg', '/images/hero/interiors.svg', '/images/hero/lifestyle.svg'];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(520px, 90vh, 920px)' }}
      aria-label="Project hero slider"
    >
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${bgImages[i]}')` }}
          aria-hidden={i !== current}
        >
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
          {/* Brochure-inspired leaf pattern overlay */}
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
        </div>
      ))}

      {/* Gold line accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-luxury w-full">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none absolute'}`}
            >
              {/* Slide number */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-body text-gold text-sm font-semibold tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-12 h-px bg-gold/50" />
                <span className="font-body text-white/40 text-xs tracking-widest">
                  {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              <h1 className="font-heading text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
                {slide.headline}<br />
                <span className="text-gold italic">{slide.headlinePart2}</span>
              </h1>

              <p className="font-body text-white/80 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
                {slide.sub}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href={slide.cta1.href} className="btn-gold flex items-center gap-2">
                  {slide.cta1.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {'download' in slide.cta2 ? (
                  <BrochureGate className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal flex items-center gap-2" />
                ) : (
                  <Link href={slide.cta2.href} className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">
                    {slide.cta2.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav Arrows */}
      <div className="absolute z-20 bottom-8 right-8 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 border border-white/30 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 border border-white/30 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

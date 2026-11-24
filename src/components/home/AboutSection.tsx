'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
              <FallbackImage
                src="/images/elevations/elevation-side.webp"
                alt="Yaganti Signature Suites building elevation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-800/20 to-amber-900/40">
                <div className="text-center text-white/80">
                  <div className="font-heading text-4xl italic text-gold">Signature</div>
                  <div className="font-body text-sm uppercase tracking-widest mt-1">Suites · Guntur</div>
                </div>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal p-5 hidden sm:block shadow-xl">
              <p className="font-heading text-3xl text-gold italic font-light">38+</p>
              <p className="font-body text-xs text-white/70 uppercase tracking-widest mt-1">Completed Projects<br />in Guntur</p>
            </div>
            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="Discover Signature Suites"
              heading="An Address That Reflects Your Aspirations."
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 font-body text-muted leading-relaxed">
              <p>
                Yaganti Signature Suites brings together spacious residences, thoughtfully designed interiors and modern lifestyle amenities in Guntur. Every space is planned to balance comfort, functionality and architectural elegance.
              </p>
              <p>
                Developed by Yaganti Constructions — with over 38 completed residential projects in Guntur — Signature Suites represents the pinnacle of refined living. Each apartment spans 3,400 to 3,550 sq. ft., featuring a dedicated home theatre area, Vaastu-compliant orientation and premium finishes throughout.
              </p>
              <p>
                East and West facing configurations are available, ensuring every home is harmoniously aligned with nature and tradition.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn-gold flex items-center gap-2">
                Discover the Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline-gold">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

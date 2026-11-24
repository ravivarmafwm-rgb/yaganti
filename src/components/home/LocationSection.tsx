'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { siteConfig } from '@/src/config/site';

const landmarks = [
  'Amaravathi Road',
  'Inner Ring Road Phase I',
  'Inner Ring Road Phase II',
  'JKC College Road',
  'RTO Office',
  'Fuel Station',
  'Aaditri Exotica',
  'Seethaiah Donka',
];

export function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Location & Connectivity"
          heading="A Signature Address in Guntur"
          subheading="Strategically situated near key landmarks and arterial roads in Guntur."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 border border-border-gold overflow-hidden">
            <FallbackImage
              src="/images/location/location-map.webp"
              alt="Yaganti Signature Suites location map, Guntur"
              className="w-full h-full object-contain"
            />
            {/* Fallback */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <MapPin className="w-12 h-12 text-gold mb-3" />
              <p className="font-heading text-xl text-charcoal">Guntur, Andhra Pradesh</p>
              <p className="font-body text-xs text-muted mt-2 uppercase tracking-widest">Location map pending upload</p>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-body text-xs text-white/80">📍 Near RTO Office, Guntur — 522007</p>
            </div>
          </div>

          {/* Landmarks & CTA */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-5">Nearby Landmarks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {landmarks.map((l) => (
                <div key={l} className="flex items-center gap-2.5 py-3 border-b border-border-gold">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-body text-sm text-charcoal">{l}</span>
                </div>
              ))}
            </div>

            <div className="bg-ivory border border-border-gold p-5 mb-6">
              <p className="font-body text-xs text-muted uppercase tracking-widest mb-3">For Directions, Contact Sales</p>
              <div className="flex flex-col gap-2">
                {siteConfig.phones.slice(0, 2).map((p) => (
                  <a key={p.number} href={`tel:${p.number}`} className="flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors font-semibold">
                    <Phone className="w-4 h-4" />
                    {p.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/location" className="btn-gold flex items-center gap-2">
                Explore Location
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline-gold">
                Request Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

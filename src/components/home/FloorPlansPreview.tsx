'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import Link from 'next/link';
import { ZoomIn, Download, ArrowRight, MessageSquare } from 'lucide-react';
import { floorPlans, masterLayoutImage } from '@/src/data/floor-plans';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

type TabKey = 'master' | 'east' | 'west';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'master', label: 'Master Layout' },
  { key: 'east', label: 'East Facing' },
  { key: 'west', label: 'West Facing' },
];

export function FloorPlansPreview() {
  const [tab, setTab] = useState<TabKey>('east');
  const [zoomed, setZoomed] = useState(false);

  const plan = tab === 'master' ? null : floorPlans.find((p) => p.id === (tab === 'east' ? 'type-a' : 'type-b'));
  const img = tab === 'master' ? masterLayoutImage : plan?.image ?? '';

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Floor Plans"
          heading="Designed Around the Way You Live"
          subheading="Spacious, Vaastu-compliant layouts with east and west facing configurations."
          className="mb-12"
        />

        {/* Tabs */}
        <div className="flex border-b border-border-gold mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest transition-all border-b-2 -mb-px ${tab === t.key ? 'text-gold border-gold' : 'text-muted border-transparent hover:text-charcoal'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Plan Image */}
          <div className="lg:col-span-3 relative group">
            <div className="border border-border-gold bg-stone-50 overflow-hidden" style={{ aspectRatio: tab === 'master' ? '4/3' : '1/1.1' }}>
              <FallbackImage
                src={img}
                alt={tab === 'master' ? 'Master floor layout' : plan?.name ?? 'Floor plan'}
                className={`w-full h-full object-contain transition-transform duration-500 ${zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setZoomed((z) => !z)}
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 pointer-events-none">
                <div className="text-center p-8 text-muted">
                  <div className="font-heading text-2xl italic text-gold mb-2">Floor Plan</div>
                  <p className="font-body text-xs uppercase tracking-widest">{tab === 'master' ? 'Master Layout' : plan?.name}</p>
                  <p className="font-body text-xs mt-2 text-muted/60">Image pending upload</p>
                </div>
              </div>
            </div>
            {/* Controls */}
            <div className="flex gap-2 mt-3">
              <button onClick={() => setZoomed((z) => !z)} className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <ZoomIn className="w-3.5 h-3.5" />
                {zoomed ? 'Reset' : 'Zoom'}
              </button>
              <a href={img} download className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </div>
          </div>

          {/* Plan Details */}
          <div className="lg:col-span-2">
            {tab === 'master' ? (
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">Master Floor Layout</h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-6">
                  The master layout shows the complete floor plan with all 8 apartments per floor — 101 through 108 — including the central 9&apos;-2&quot; wide common corridor.
                </p>
                <div className="bg-ivory border border-border-gold p-4 space-y-3">
                  {floorPlans.map((p) => (
                    <div key={p.id} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-wider text-charcoal">Flats {p.flatNumbers}</p>
                        <p className="font-body text-xs text-muted">Total Area: {p.totalArea}</p>
                      </div>
                      <span className="text-xs text-gold font-semibold">{p.name.split('—')[0].trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : plan ? (
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-1">{plan.name}</h3>
                <p className="font-body text-xs text-muted uppercase tracking-widest mb-5">Flats: {plan.flatNumbers}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Carpet Area', value: plan.carpetArea },
                    { label: 'Plinth Area', value: plan.plinthArea },
                    { label: 'Total Area', value: plan.totalArea },
                  ].map((item) => (
                    <div key={item.label} className="bg-ivory border border-border-gold p-3 text-center">
                      <p className="font-heading text-base text-gold">{item.value}</p>
                      <p className="font-body text-xs text-muted mt-1 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>

                <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">Room Schedule</h4>
                <ul className="space-y-2">
                  {plan.rooms.map((r) => (
                    <li key={r.name} className="flex items-center justify-between py-2 border-b border-border-gold last:border-0">
                      <span className="font-body text-sm text-charcoal">{r.name}</span>
                      {r.dimensions && <span className="font-body text-xs text-muted font-mono">{r.dimensions}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3">
              <Link href="/floor-plans" className="btn-gold text-xs flex items-center gap-2 justify-center">
                View All Floor Plans
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="btn-outline-gold text-xs flex items-center gap-2 justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
                Request More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

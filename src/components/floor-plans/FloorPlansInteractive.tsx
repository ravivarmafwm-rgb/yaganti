'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import { floorPlans, masterLayoutImage, floorPlanNote } from '@/src/data/floor-plans';
import { ZoomIn, ZoomOut, Download, Maximize2, RotateCcw } from 'lucide-react';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

type TabKey = 'master' | 'east' | 'west';

export function FloorPlansInteractive() {
  const [tab, setTab] = useState<TabKey>('east');
  const [scale, setScale] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  const plan = tab === 'master' ? null : floorPlans.find((p) => p.id === (tab === 'east' ? 'type-a' : 'type-b'));
  const img = tab === 'master' ? masterLayoutImage : (plan?.image ?? '');
  const imgAlt = tab === 'master' ? 'Master floor layout' : (plan?.name ?? 'Floor plan');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'master', label: 'Master Layout' },
    { key: 'east', label: 'East Facing' },
    { key: 'west', label: 'West Facing' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-luxury">
        <SectionHeader eyebrow="Interactive Plans" heading="Explore Every Layout" className="mb-10" />

        {/* Tabs */}
        <div className="flex border-b border-border-gold mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setScale(1); }}
              className={`px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest border-b-2 -mb-px transition-all ${tab === t.key ? 'text-gold border-gold' : 'text-muted border-transparent hover:text-charcoal'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan Viewer */}
          <div className="lg:col-span-2">
            <div className="border border-border-gold bg-stone-50 overflow-hidden" style={{ minHeight: 420 }}>
              <div
                className="w-full h-full flex items-center justify-center overflow-auto p-4"
                style={{ minHeight: 420 }}
              >
                <FallbackImage
                  src={img}
                  alt={imgAlt}
                  className="max-w-full h-auto transition-transform duration-300 origin-center"
                  style={{ transform: `scale(${scale})` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                  <div className="text-center p-8">
                    <p className="font-heading text-2xl italic text-gold">{tab === 'master' ? 'Master Layout' : plan?.name}</p>
                    <p className="font-body text-xs text-muted mt-2 uppercase tracking-widest">Image pending upload — see ASSET_REQUIREMENTS.md</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <button onClick={() => setScale((s) => Math.min(s + 0.25, 3))} className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <ZoomIn className="w-3.5 h-3.5" /> Zoom In
              </button>
              <button onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))} className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <ZoomOut className="w-3.5 h-3.5" /> Zoom Out
              </button>
              <button onClick={() => setScale(1)} className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
              <button onClick={() => setFullscreen(true)} className="btn-outline-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <Maximize2 className="w-3.5 h-3.5" /> Full Screen
              </button>
              <a href={img} download className="btn-gold text-xs flex items-center gap-1.5 px-4 py-2">
                <Download className="w-3.5 h-3.5" /> Download
              </a>
            </div>
          </div>

          {/* Details panel */}
          <div className="lg:col-span-1">
            {tab === 'master' ? (
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">Master Floor Layout</h3>
                <span className="block w-8 h-px bg-gold mb-4" />
                <p className="font-body text-sm text-muted leading-relaxed mb-5">
                  Complete floor plan showing all 8 apartments per floor (101–108), the central 9&apos;-2&quot; wide common corridor, lift lobby and staircases.
                </p>
                {floorPlans.map((p) => (
                  <div key={p.id} className="border-b border-border-gold py-3">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal">{p.name}</p>
                    <p className="font-body text-xs text-muted mt-0.5">Flats: {p.flatNumbers}</p>
                    <p className="font-body text-xs text-gold mt-0.5">Total: {p.totalArea}</p>
                  </div>
                ))}
              </div>
            ) : plan ? (
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-1">{plan.name}</h3>
                <p className="font-body text-xs text-muted uppercase tracking-widest mb-4">Flats: {plan.flatNumbers}</p>
                <div className="grid grid-cols-1 gap-2 mb-5">
                  {[
                    { label: 'Carpet Area', value: plan.carpetArea },
                    { label: 'Plinth Area', value: plan.plinthArea },
                    { label: 'Total Area', value: plan.totalArea },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-border-gold">
                      <span className="font-body text-xs text-muted uppercase tracking-wider">{item.label}</span>
                      <span className="font-heading text-base text-gold font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
                <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">Room Schedule</h4>
                <ul className="space-y-1.5">
                  {plan.rooms.map((r) => (
                    <li key={r.name} className="flex items-center justify-between py-2 border-b border-border-gold/50 last:border-0">
                      <span className="font-body text-sm text-charcoal">{r.name}</span>
                      {r.dimensions && <span className="font-mono text-xs text-muted">{r.dimensions}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-8" onClick={() => setFullscreen(false)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2 text-sm font-body" aria-label="Close">ESC / Close</button>
          <div className="overflow-auto max-w-full max-h-full">
            <FallbackImage src={img} alt={imgAlt} className="max-w-full h-auto" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </section>
  );
}

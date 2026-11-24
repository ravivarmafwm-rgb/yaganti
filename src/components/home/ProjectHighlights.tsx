'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Maximize2, Compass, Tv2, Car, Star } from 'lucide-react';
import { projectHighlights } from '@/src/data/project';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Maximize2, Compass, Tv2, Car, Star,
};

function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState('0');
  const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
  const prefix = target.match(/^[^0-9]*/)?.[0] ?? '';

  useEffect(() => {
    if (isNaN(numeric)) { setDisplayed(target); return; }
    const duration = 1800;
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const val = Math.round((numeric * step) / steps);
      setDisplayed(`${prefix}${val.toLocaleString()}${suffix}`);
      if (step >= steps) { setDisplayed(target); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, numeric, prefix, suffix]);

  return <span ref={ref}>{displayed}</span>;
}

export function ProjectHighlights() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ivory py-16 lg:py-24 border-y border-border-gold">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="At a Glance"
          heading="A Signature of Refined Living"
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-border-gold border border-border-gold">
          {projectHighlights.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Building2;
            return (
              <div
                key={h.id}
                className={`flex flex-col items-center text-center px-5 py-8 transition-all duration-500 hover:bg-gold/5 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-heading text-2xl text-charcoal font-semibold mb-1">
                  {visible ? <CountUp target={h.value} /> : h.value}
                </div>
                <div className="font-body text-xs text-muted uppercase tracking-wider leading-tight">{h.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight, Building, Grid, Package, Droplets, DoorOpen, Square, Lightbulb, Shield } from 'lucide-react';
import { SectionHeader } from '@/src/components/shared/SectionHeader';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building, Grid, Package, Droplets, DoorOpen, Square, Lightbulb, Shield,
};

const highlights = [
  { icon: 'Building', label: 'RCC Framed Structure', desc: 'Seismic zone compliant reinforced concrete structure' },
  { icon: 'Grid', label: 'Premium Flooring', desc: 'Vitrified tiles in living areas, premium ceramics in wet areas' },
  { icon: 'Package', label: 'Modular Woodwork', desc: 'Wardrobes, kitchen and woodwork of modular make' },
  { icon: 'Droplets', label: 'Premium Fittings', desc: 'Grohe / Jaquar / CERA or equivalent bathroom fittings' },
  { icon: 'DoorOpen', label: 'Engineered Wood Doors', desc: 'Hardwood frames with veneer on both sides' },
  { icon: 'Square', label: 'UPVC Windows', desc: 'Veka or equivalent UPVC windows with MS grills' },
  { icon: 'Lightbulb', label: 'False Ceilings', desc: 'All rooms with ambient ceiling lights' },
  { icon: 'Shield', label: 'Security Systems', desc: 'CCTV, intercom, solar fencing and boom barrier' },
];

export function SpecsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Specifications"
          heading="Quality That Goes Beyond the Surface"
          subheading="Every detail is chosen to deliver lasting comfort and enduring value."
          variant="light"
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon] ?? Building;
            return (
              <div key={item.icon} className="bg-charcoal p-6 hover:bg-charcoal-light/50 transition-colors group">
                <Icon className="w-6 h-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-body text-sm font-semibold text-white mb-2">{item.label}</h4>
                <p className="font-body text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/specifications" className="btn-gold inline-flex items-center gap-2">
            Explore Specifications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

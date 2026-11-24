import type { Metadata } from 'next';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { specifications } from '@/src/data/specifications';
import Link from 'next/link';
import { Building, Layers, Paintbrush, DoorOpen, Square, Grid, Droplets, Zap, Lightbulb, Phone, ArrowUpDown, Car, Trees, Package, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Specifications',
  description: 'Detailed technical specifications for Yaganti Signature Suites — structure, flooring, doors, windows, electrical, bathrooms, lift and more.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building, Layers, Paintbrush, DoorOpen, Square, Grid, Droplets, Zap, Lightbulb, Phone, ArrowUpDown, Car, Trees, Package, Settings,
};

export default function SpecificationsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Specifications' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Technical <span className="text-gold italic">Specifications</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              Quality that goes beyond the surface. Every material, fitting and system specified for lasting performance and elegance.
            </p>
          </div>
        </div>

        {/* Intro */}
        <section className="py-14 bg-white border-b border-border-gold">
          <div className="container-luxury text-center max-w-2xl mx-auto">
            <SectionHeader eyebrow="Super Specifications" heading="Built to the Highest Standards" subheading="Every specification at Yaganti Signature Suites is carefully selected to deliver enduring quality and refined aesthetics." />
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="py-14 bg-ivory">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec) => {
                const Icon = iconMap[spec.icon] ?? Building;
                return (
                  <div key={spec.id} className="bg-white border border-border-gold p-6 hover:border-gold transition-colors group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <h3 className="font-body text-sm font-semibold uppercase tracking-widest text-charcoal">{spec.title}</h3>
                    </div>
                    <span className="block w-6 h-px bg-gold mb-4" />
                    <ul className="space-y-2">
                      {spec.items.map((item, i) => (
                        <li key={i} className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-8 bg-white border-t border-border-gold">
          <div className="container-luxury max-w-3xl mx-auto text-center">
            <p className="font-body text-xs text-muted italic leading-relaxed">
              All brand names mentioned are &quot;or equivalent&quot; as stated in the official specifications. Actual brands may vary subject to availability and quality equivalence. This is a conceptual presentation. Registration charges, GST and labour cess are extra.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">Questions About the Specifications?</h2>
            <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">Our sales team is happy to discuss specific materials, brands and construction standards.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-gold">Contact Sales Team</Link>
              <Link href="/floor-plans" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">View Floor Plans</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <AskSignature />
    </>
  );
}

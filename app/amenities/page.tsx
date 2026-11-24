import type { Metadata } from 'next';
import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { amenityCategories } from '@/src/data/amenities';
import Link from 'next/link';
import { Dumbbell, BookOpen, Grid3X3, Circle, Baby, Armchair, Trees, Leaf, Car, Bike, ArrowUpDown, Video, Zap, Phone, GanttChart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities',
  description: 'Discover the amenities at Yaganti Signature Suites — gym provision, library, carrom, snooker, landscaped garden, CCTV, boom barrier and more in Guntur.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell, BookOpen, Grid3X3, Circle, Baby, Armchair, Trees, Leaf, Car, Bike, ArrowUpDown, Video, Zap, Phone, GanttChart, Shield,
};

const amenityImages = [
  { src: '/images/amenities/carrom.webp', label: 'Carrom Board', fallback: 'bg-amber-100' },
  { src: '/images/amenities/gym.webp', label: 'Gym Provision', fallback: 'bg-zinc-100' },
  { src: '/images/amenities/library.webp', label: 'Library', fallback: 'bg-amber-50' },
  { src: '/images/amenities/snooker.webp', label: 'Snooker', fallback: 'bg-green-900/20' },
];

export default function AmenitiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Amenities' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Amenities &amp; <span className="text-gold italic">Facilities</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              A thoughtfully curated range of recreational, lifestyle and security amenities designed to make every day more rewarding.
            </p>
          </div>
        </div>

        {/* Featured Images */}
        <section className="py-14 bg-white">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {amenityImages.map((img) => (
                <div key={img.label} className={`relative aspect-square ${img.fallback} overflow-hidden border border-border-gold`}>
                  <FallbackImage src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-widest">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        {amenityCategories.map((cat, ci) => {
          const Icon = iconMap[cat.icon] ?? Shield;
          return (
            <section key={cat.id} className={`py-14 ${ci % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}>
              <div className="container-luxury">
                <div className="flex items-center gap-3 mb-8">
                  <Icon className="w-5 h-5 text-gold" />
                  <h2 className="font-heading text-2xl text-charcoal">{cat.title}</h2>
                  <span className="flex-1 h-px bg-border-gold" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cat.items.map((item) => {
                    const ItemIcon = iconMap[item.icon] ?? Shield;
                    return (
                      <div key={item.id} className="border border-border-gold bg-white p-6 hover:border-gold transition-colors group">
                        <ItemIcon className="w-7 h-7 text-gold mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-body text-sm font-semibold text-charcoal mb-2">
                          {item.name}
                          {item.isProvision && <span className="ml-1.5 text-xs text-muted font-normal italic">(provision)</span>}
                        </h3>
                        <p className="font-body text-xs text-muted leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* Disclaimer */}
        <section className="py-8 bg-ivory border-t border-border-gold">
          <div className="container-luxury">
            <p className="font-body text-xs text-muted text-center italic max-w-2xl mx-auto">
              Amenities marked as &quot;provision&quot; are planned spaces as stated in the project brochure. Completion and operational status should be confirmed with the sales team.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">Experience These Amenities First-Hand</h2>
            <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">Schedule a site visit with our team to explore the development and its facilities.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=site-visit" className="btn-gold">Schedule a Site Visit</Link>
              <Link href="/specifications" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">View Specifications</Link>
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

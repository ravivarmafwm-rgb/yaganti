import type { Metadata } from 'next';
import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { interiorSpaces } from '@/src/data/project';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Interiors & Lifestyle',
  description: 'Explore the premium interiors of Yaganti Signature Suites — master bedroom, home theatre, living room, kitchen, balcony and more. All rooms designed for refined living.',
};

export default function InteriorsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Interiors' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Interiors &amp; <span className="text-gold italic">Lifestyle</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              Every room at Yaganti Signature Suites is a carefully composed space — balancing comfort, elegance and function.
            </p>
          </div>
        </div>

        {/* Intro */}
        <section className="py-14 bg-white border-b border-border-gold">
          <div className="container-luxury text-center max-w-3xl mx-auto">
            <SectionHeader eyebrow="Premium Interiors" heading="Luxury in Every Corner" subheading="From the warmth of the master bedroom to the cinematic thrill of the home theatre — discover spaces designed to elevate your everyday." />
          </div>
        </section>

        {/* Interior Spaces — alternating layout */}
        {interiorSpaces.map((space, i) => (
          <section key={space.id} className={`py-14 lg:py-20 ${i % 2 === 0 ? 'bg-ivory' : 'bg-white'}`}>
            <div className="container-luxury">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div className={`aspect-[4/3] ${space.imageFallback} overflow-hidden border border-border-gold relative`}>
                    <FallbackImage
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Room label */}
                    <div className="absolute top-4 left-4 bg-gold px-3 py-1 z-10">
                      <span className="font-body text-xs font-semibold text-white uppercase tracking-widest">{space.name}</span>
                    </div>
                    {/* Illustrative note */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="font-body text-xs text-white/60 italic bg-black/30 px-2 py-1">Illustrative render</span>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className={`absolute -top-3 ${i % 2 !== 0 ? '-right-3' : '-left-3'} w-16 h-16 border-t-2 border-${i % 2 !== 0 ? 'r' : 'l'}-2 border-gold pointer-events-none hidden sm:block`} />
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <span className="section-eyebrow">{String(i + 1).padStart(2, '0')} / {String(interiorSpaces.length).padStart(2, '0')}</span>
                  <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mt-2 mb-3">{space.name}</h2>
                  <span className="gold-divider" />
                  <p className="font-body text-muted leading-relaxed mt-3">{space.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Disclaimer */}
        <section className="py-8 bg-ivory border-t border-border-gold">
          <div className="container-luxury">
            <p className="font-body text-xs text-muted text-center italic max-w-2xl mx-auto">
              All interior images shown are illustrative architectural renders. Actual interiors may vary. This is a conceptual presentation and not a legal offering.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">See These Spaces in Person</h2>
            <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">Schedule a site visit to experience the scale, light and quality of Signature Suites first-hand.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=site-visit" className="btn-gold">Schedule a Site Visit</Link>
              <Link href="/gallery" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">View Gallery</Link>
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

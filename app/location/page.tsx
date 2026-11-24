import type { Metadata } from 'next';
import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { siteConfig } from '@/src/config/site';
import Link from 'next/link';
import { MapPin, Phone, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Location & Connectivity',
  description: 'Yaganti Signature Suites is located in Guntur, Andhra Pradesh, near Amaravathi Road, Inner Ring Road, JKC College Road and RTO Office.',
};

const landmarks = [
  { name: 'Amaravathi Road', type: 'Major Road' },
  { name: 'Inner Ring Road Phase I', type: 'Ring Road' },
  { name: 'Inner Ring Road Phase II', type: 'Ring Road' },
  { name: 'JKC College Road', type: 'Landmark Road' },
  { name: 'RTO Office', type: 'Government Office' },
  { name: 'Fuel Station', type: 'Utility' },
  { name: 'Aaditri Exotica', type: 'Residential Complex' },
  { name: 'Seethaiah Donka', type: 'Local Landmark' },
];

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Location' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Location &amp; <span className="text-gold italic">Connectivity</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              A signature address in the heart of Guntur — well connected to major roads and key landmarks.
            </p>
          </div>
        </div>

        {/* Map + Details */}
        <section className="py-16 bg-white">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Map */}
              <div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 border border-border-gold overflow-hidden">
                  <FallbackImage
                    src="/images/location/location-map.webp"
                    alt="Yaganti Signature Suites location map"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <MapPin className="w-14 h-14 text-gold mb-3" />
                    <p className="font-heading text-2xl text-charcoal">Guntur, Andhra Pradesh</p>
                    <p className="font-body text-xs text-muted mt-2 uppercase tracking-widest">Location map pending upload</p>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="font-body text-xs text-white/80">📍 Near RTO Office · Guntur – 522007 · Andhra Pradesh</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-ivory border border-border-gold">
                  <div className="flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal mb-1">Project Location</p>
                      <p className="font-body text-sm text-muted leading-relaxed">Near RTO Office, off JKC College Road, Guntur – 522007, Andhra Pradesh</p>
                      <p className="font-body text-xs text-muted mt-2 italic">Exact coordinates pending confirmation. Contact the sales team for directions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div>
                <SectionHeader eyebrow="Nearby Landmarks" heading="A Connected Neighbourhood" align="left" className="mb-8" />
                <div className="space-y-1">
                  {landmarks.map((l) => (
                    <div key={l.name} className="flex items-center justify-between py-3.5 border-b border-border-gold group hover:bg-gold/5 px-2 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        <span className="font-body text-sm text-charcoal font-medium">{l.name}</span>
                      </div>
                      <span className="font-body text-xs text-muted uppercase tracking-wider">{l.type}</span>
                    </div>
                  ))}
                </div>

                {/* Contact for Directions */}
                <div className="mt-8 bg-charcoal p-6">
                  <p className="font-body text-xs text-gold uppercase tracking-widest mb-4">Get Directions</p>
                  <p className="font-body text-sm text-white/70 mb-5 leading-relaxed">
                    Our sales team will provide precise directions to the project site. Contact us to arrange a guided visit.
                  </p>
                  <div className="space-y-2.5">
                    {siteConfig.phones.map((p) => (
                      <a key={p.number} href={`tel:${p.number}`} className="flex items-center gap-2.5 text-gold hover:text-gold-light transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="font-body text-sm font-semibold">{p.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Address */}
        <section className="py-14 bg-ivory border-t border-border-gold">
          <div className="container-luxury">
            <SectionHeader eyebrow="Corporate Office" heading="Yaganti Constructions Office" className="mb-10" />
            <div className="max-w-md mx-auto text-center bg-white border border-border-gold p-8">
              <MapPin className="w-6 h-6 text-gold mx-auto mb-4" />
              <address className="not-italic font-body text-sm text-muted leading-relaxed">
                {siteConfig.officeAddress.line1}<br />
                {siteConfig.officeAddress.line2}<br />
                {siteConfig.officeAddress.line3}<br />
                {siteConfig.officeAddress.line4}
              </address>
              <p className="font-body text-xs text-muted mt-4 italic">Note: Corporate office address. Project site address is separate.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">Plan Your Visit Today</h2>
            <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">Our team will arrange a guided site visit at your convenience.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=site-visit" className="btn-gold">Schedule a Site Visit</Link>
              <Link href="/contact" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">Contact Sales Team</Link>
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

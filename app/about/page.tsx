import type { Metadata } from 'next';
import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { siteConfig } from '@/src/config/site';
import { previousProjects } from '@/src/data/project';
import Link from 'next/link';
import { ArrowRight, Building2, Maximize2, Compass, Tv2, Car, Star, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Project',
  description: 'Learn about Yaganti Signature Suites — premium luxury residences in Guntur by Yaganti Constructions, featuring spacious layouts, premium interiors and Vaastu-compliant design.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 pb-20 lg:pb-28 min-h-screen">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'About' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mt-6 leading-tight">
              About <span className="text-gold italic">Signature Suites</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-5" />
            <p className="font-body text-white/70 max-w-2xl mt-5 text-base leading-relaxed">
              Discover the vision, the developer and the defining qualities of Guntur&apos;s most anticipated luxury residential address.
            </p>
          </div>
        </div>

        {/* About the Project */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden border border-border-gold">
                  <FallbackImage src="/images/elevations/elevation-front.webp" alt="Yaganti Signature Suites elevation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <span className="font-body text-xs text-white/70 italic">Illustrative architectural render</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-gold p-5 hidden sm:block">
                  <p className="font-heading text-3xl text-white italic font-light">40</p>
                  <p className="font-body text-xs text-white/80 uppercase tracking-widest">Exclusive Residences</p>
                </div>
              </div>
              <div>
                <SectionHeader eyebrow="The Project" heading="Step into the Future of Luxury Living" align="left" className="mb-6" />
                <div className="space-y-4 font-body text-muted leading-relaxed text-sm">
                  <p>In today&apos;s fast-moving world, progress is the gateway to a modern and satisfying lifestyle. <strong className="text-charcoal">Yaganti Signature Suites</strong> offers a unique chance to flourish in this age of innovation and luxury.</p>
                  <p>This extraordinary residential enclave is more than just a place to live — it&apos;s a lively community where residents can enjoy top-notch amenities, unmatched comfort and the peaceful atmosphere of a serene neighbourhood.</p>
                  <p>Each residence spans 3,400 to 3,550 sq. ft., featuring a dedicated home theatre area, spacious living and dining rooms, premium bedroom suites and Vaastu-compliant orientation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 bg-ivory">
          <div className="container-luxury">
            <SectionHeader eyebrow="Key Facts" heading="At a Glance" className="mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px border border-border-gold bg-border-gold">
              {[
                { icon: Building2, value: '40', label: 'Apartments' },
                { icon: Maximize2, value: '3,400–3,550', label: 'Sq. Ft.' },
                { icon: Compass, value: 'E & W', label: 'Facing Options' },
                { icon: Tv2, value: 'Each', label: 'Home Theatre' },
                { icon: Car, value: '2 Each', label: 'Car Parks' },
                { icon: Star, value: '100%', label: 'Vaastu' },
              ].map((f) => (
                <div key={f.label} className="bg-white flex flex-col items-center text-center px-5 py-8">
                  <f.icon className="w-6 h-6 text-gold mb-3" />
                  <p className="font-heading text-2xl text-charcoal">{f.value}</p>
                  <p className="font-body text-xs text-muted uppercase tracking-wider mt-1">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Developer */}
        <section className="py-16 lg:py-24 bg-charcoal">
          <div className="container-luxury">
            <SectionHeader eyebrow="The Developer" heading="Meet the Visionaries Behind Signature Suites" variant="light" className="mb-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4 font-body text-white/70 text-sm leading-relaxed">
                <p>Yaganti Group, a real estate stalwart in South Coastal Andhra Pradesh, pioneers visionary, boundary-pushing construction. Their projects blend structural integrity, functionality and aesthetics, delivering opulent living experiences — from luxurious villas to prime plots and resorts in Bapatla.</p>
                <p>Comprising Yaganti Constructions, Yaganti Estates and Yaganti Builders, the Yaganti brothers — Mr. Yaganti Durga Prasad Rao and Mr. Yaganti Durga Sudhakar — lead this architectural endeavour with unwavering dedication.</p>
                <p>Under Mr. Yaganti Durga Prasad Rao&apos;s guidance, Yaganti Constructions has completed <strong className="text-gold">{siteConfig.completedProjects} residential projects</strong> in Guntur and continues to set new benchmarks for quality and design.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {siteConfig.entities.map((e) => (
                    <span key={e} className="px-3 py-1 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider">{e}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={siteConfig.developerWebsite} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 text-xs">
                    Visit Developer Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div>
                <p className="font-body text-xs text-gold uppercase tracking-widest mb-4">Previous Projects</p>
                <div className="flex flex-wrap gap-2">
                  {previousProjects.map((p) => (
                    <span key={p} className="font-body text-xs text-white/50 border border-white/10 px-2 py-1">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-ivory text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-charcoal mb-4">Ready to Discover Signature Suites?</h2>
            <p className="font-body text-muted mb-8 max-w-lg mx-auto">Explore floor plans, interiors and amenities, or contact our sales team to schedule a site visit.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/floor-plans" className="btn-gold flex items-center gap-2">View Floor Plans <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="btn-outline-gold">Enquire Now</Link>
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

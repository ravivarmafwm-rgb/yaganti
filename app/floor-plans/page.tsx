import type { Metadata } from 'next';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { FloorPlansInteractive } from '@/src/components/floor-plans/FloorPlansInteractive';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Floor Plans',
  description: 'View east and west facing floor plans for Yaganti Signature Suites. Type A: 3,550 sq. ft. and Type B: 3,400 sq. ft. with detailed room schedules and dimensions.',
};

export default function FloorPlansPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Floor Plans' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Floor <span className="text-gold italic">Plans</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              Spacious, Vaastu-compliant layouts with east and west facing configurations. Every square foot purposefully planned.
            </p>
          </div>
        </div>

        {/* Area Schedule */}
        <section className="py-10 bg-ivory border-b border-border-gold">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { type: 'Type A', flats: '101, 104, 105, 106, 107, 108', carpet: '2,267.57 sq. ft.', plinth: '2,718.88 sq. ft.', total: '3,550 sq. ft.', facing: 'East Facing' },
                { type: 'Type B', flats: '102, 103', carpet: '2,207.76 sq. ft.', plinth: '2,609.38 sq. ft.', total: '3,400 sq. ft.', facing: 'West Facing' },
              ].map((p) => (
                <div key={p.type} className="border border-border-gold bg-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal">{p.type} — {p.facing}</h3>
                    <span className="px-3 py-1 bg-gold text-white text-xs font-semibold uppercase tracking-widest">{p.total}</span>
                  </div>
                  <p className="font-body text-xs text-muted mb-4">Flat Numbers: <span className="text-charcoal font-semibold">{p.flats}</span></p>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ l: 'Carpet Area', v: p.carpet }, { l: 'Plinth Area', v: p.plinth }, { l: 'Total Area', v: p.total }].map((a) => (
                      <div key={a.l} className="bg-ivory p-3 text-center">
                        <p className="font-heading text-sm text-gold">{a.v}</p>
                        <p className="font-body text-xs text-muted mt-1 leading-tight">{a.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Plans */}
        <FloorPlansInteractive />

        {/* Disclaimer */}
        <section className="py-10 bg-ivory">
          <div className="container-luxury">
            <p className="font-body text-xs text-muted text-center max-w-3xl mx-auto italic leading-relaxed">
              Floor plans are illustrative. Actual dimensions may vary slightly. This brochure is only a conceptual presentation and not a legal offering. The promoters reserve the right to make changes in plans, elevation and specifications as deemed fit.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">Interested in a Specific Unit?</h2>
            <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">Our sales team can provide detailed information about individual flat availability and orientations.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=floor-plan" className="btn-gold">Request Floor Plan Details</Link>
              <Link href="/contact?type=site-visit" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">Schedule a Site Visit</Link>
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

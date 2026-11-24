import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { BrochureGate } from '@/src/components/shared/BrochureGate';
import { siteConfig } from '@/src/config/site';

export function EnquiryCTA() {
  return (
    <section className="relative py-24 lg:py-36 bg-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-leaf opacity-30" />
      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      {/* Decorative gold corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40 hidden lg:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/40 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/40 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40 hidden lg:block" />

      <div className="relative container-luxury text-center">
        <span className="section-eyebrow text-gold/80">Your Next Chapter</span>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-tight">
          Your Next Chapter<br />
          <span className="text-gold italic">Begins Here.</span>
        </h2>
        <span className="gold-divider-center mt-4" />
        <p className="font-body text-white/70 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Discover your ideal residence at Yaganti Signature Suites. Connect with our team to explore the project and schedule your visit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact?type=site-visit" className="btn-gold flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule a Site Visit
          </Link>
          <BrochureGate className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal flex items-center gap-2" />
          <Link href="/contact" className="btn-white flex items-center gap-2">
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Contact numbers */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {siteConfig.phones.map((p) => (
            <a key={p.number} href={`tel:${p.number}`} className="font-body text-sm text-gold hover:text-gold-light transition-colors font-semibold">
              {p.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

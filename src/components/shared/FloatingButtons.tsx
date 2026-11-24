'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/src/config/site';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-4 sm:right-6 z-40 w-10 h-10 bg-charcoal text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* WhatsApp — only when configured */}
      {siteConfig.whatsapp.enabled && siteConfig.whatsapp.number && (
        <a
          href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-40 right-4 sm:right-6 z-40 w-12 h-12 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] rounded-full"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      )}

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-charcoal border-t border-gold/20 flex">
        <a
          href={`tel:${siteConfig.phones[0].number}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-white hover:text-gold transition-colors border-r border-white/10"
        >
          <Phone className="w-4 h-4 mb-1" />
          <span className="font-body text-xs font-semibold uppercase tracking-widest">Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-gold text-white hover:bg-gold-dark transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="font-body text-xs font-semibold uppercase tracking-widest">Enquire</span>
        </Link>
        {siteConfig.whatsapp.enabled && siteConfig.whatsapp.number && (
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 text-white hover:text-[#25D366] transition-colors border-l border-white/10"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="font-body text-xs font-semibold uppercase tracking-widest">WhatsApp</span>
          </a>
        )}
      </div>
    </>
  );
}

'use client';

import { FallbackImage } from '@/src/components/shared/FallbackImage';
import { useState } from 'react';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { galleryCategories } from '@/src/data/gallery';
import { X, ZoomIn } from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('elevations');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; idx: number; catId: string } | null>(null);

  const cat = galleryCategories.find((c) => c.id === activeTab);

  const navLightbox = (dir: 1 | -1) => {
    if (!lightbox || !cat) return;
    const imgs = cat.images;
    const newIdx = (lightbox.idx + dir + imgs.length) % imgs.length;
    setLightbox({ src: imgs[newIdx].src, alt: imgs[newIdx].alt, idx: newIdx, catId: lightbox.catId });
  };

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <div className="bg-charcoal py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Gallery' }]} />
            <h1 className="font-heading text-4xl sm:text-5xl text-white mt-6 leading-tight">
              Project <span className="text-gold italic">Gallery</span>
            </h1>
            <span className="block w-12 h-px bg-gold mt-4" />
            <p className="font-body text-white/70 max-w-xl mt-4 text-sm leading-relaxed">
              A closer look at Signature living — elevations, interiors, amenities and floor plans.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <section className="py-14 bg-white min-h-[600px]">
          <div className="container-luxury">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {galleryCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest border transition-all ${activeTab === c.id ? 'bg-gold text-white border-gold' : 'border-border-gold text-muted hover:text-charcoal hover:border-charcoal'}`}
                >
                  {c.label} ({c.images.length})
                </button>
              ))}
            </div>

            {cat && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setLightbox({ src: img.src, alt: img.alt, idx: i, catId: cat.id })}
                    className="relative overflow-hidden group bg-gradient-to-br from-stone-100 to-stone-200 border border-border-gold"
                    style={{ aspectRatio: cat.id === 'floor-plans' ? '4/3' : '1/1' }}
                  >
                    <FallbackImage src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                      <span className="font-body text-xs text-muted uppercase tracking-widest text-center px-2 leading-tight">{img.alt}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-charcoal text-center">
          <div className="container-luxury">
            <h2 className="font-heading text-3xl text-white mb-4">Want to See More?</h2>
            <p className="font-body text-white/70 mb-8">Download the full brochure or schedule a site visit.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=site-visit" className="btn-gold">Schedule a Site Visit</Link>
              <a href="/documents/yaganti-signature-suites-brochure.pdf" download className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">Download Brochure</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
      <AskSignature />

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 text-2xl font-light" onClick={() => navLightbox(-1)} aria-label="Previous">&#8249;</button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 text-2xl font-light" onClick={() => navLightbox(1)} aria-label="Next">&#8250;</button>
          <div className="max-w-5xl max-h-[90vh] overflow-auto px-12">
            <FallbackImage src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain mx-auto" />
            <p className="text-center font-body text-xs text-white/50 mt-3 uppercase tracking-widest">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}

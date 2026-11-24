import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import { EnquiryForm } from '@/src/components/forms/EnquiryForm';
import { Footer } from '@/src/components/layout/Footer';
import { Header } from '@/src/components/layout/Header';
import { Breadcrumbs } from '@/src/components/shared/Breadcrumbs';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { siteConfig } from '@/src/config/site';
import { Suspense } from 'react';
import { ContactEnquiryForm } from '@/src/components/forms/ContactEnquiryForm';

export const metadata: Metadata = {
  title: 'Contact & Enquire',
  description: 'Contact Yaganti Signature Suites in Guntur to request project details or arrange a site visit.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 lg:pt-20">
        <section className="bg-charcoal py-14 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-leaf opacity-20" />
          <div className="container-luxury relative">
            <Breadcrumbs items={[{ label: 'Contact' }]} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold mt-6">We are here to help</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mt-3">Let&apos;s talk about <span className="text-gold italic">your new home.</span></h1>
            <p className="font-body text-white/70 max-w-2xl mt-5 leading-relaxed">Request project information or arrange a guided site visit with our team in Guntur.</p>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-ivory">
          <div className="container-luxury grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <aside className="space-y-7">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">Contact the team</p>
                <h2 className="font-heading text-3xl text-charcoal">We&apos;ll help you find the details you need.</h2>
              </div>
              <div className="space-y-4">
                {siteConfig.phones.map((phone) => (
                  <a key={phone.number} href={`tel:${phone.number}`} className="flex gap-4 items-center p-4 bg-white border border-border-gold hover:border-gold transition-colors">
                    <span className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold"><Phone className="w-5 h-5" /></span>
                    <span><span className="block text-xs text-muted uppercase tracking-wider">Call sales</span><span className="font-body font-semibold text-charcoal">{phone.display}</span></span>
                  </a>
                ))}
                <a href={`mailto:${siteConfig.email}`} className="flex gap-4 items-center p-4 bg-white border border-border-gold hover:border-gold transition-colors">
                  <span className="w-10 h-10 flex items-center justify-center bg-gold/10 text-gold"><Mail className="w-5 h-5" /></span>
                  <span className="min-w-0"><span className="block text-xs text-muted uppercase tracking-wider">Email us</span><span className="font-body font-semibold text-charcoal break-all">{siteConfig.email}</span></span>
                </a>
              </div>
              <div className="flex gap-4 p-4 bg-charcoal text-white/75">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <address className="not-italic font-body text-sm leading-relaxed">{siteConfig.officeAddress.line1} {siteConfig.officeAddress.line2}<br />{siteConfig.officeAddress.line3}<br />{siteConfig.officeAddress.line4}</address>
              </div>
            </aside>

            <div className="bg-white p-6 sm:p-8 lg:p-10 border border-border-gold shadow-sm">
              <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">Enquiry form</p>
              <h2 className="font-heading text-3xl text-charcoal mb-7">Request a call back</h2>
              <Suspense fallback={<EnquiryForm sourcePage="contact" />}><ContactEnquiryForm /></Suspense>
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

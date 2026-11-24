import Link from 'next/link';
import { Phone, Mail, Globe, MapPin, ArrowUpRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Logo } from '@/src/components/shared/Logo';
import { navLinks, siteConfig } from '@/src/config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="container-luxury py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.24em] text-gold mb-1">Your next chapter starts here</p>
            <p className="font-heading text-2xl text-white">Explore Signature Suites in person.</p>
          </div>
          <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
            Arrange a Visit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="container-luxury py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
              A signature address crafted for refined living in Guntur, Andhra Pradesh. Spacious residences with premium interiors and thoughtful amenities.
            </p>
            <div className="mt-5">
              <p className="font-body text-xs uppercase tracking-widest text-gold/70 mb-2">By</p>
              <p className="font-heading text-lg text-white">Yaganti Constructions</p>
              <a href={siteConfig.developerWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 mt-1 text-xs text-white/50 hover:text-gold transition-colors">
                <Globe className="w-3 h-3" />
                yagantigroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.filter((link) => link.href !== '/contact').map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-5">Contact Us</h3>
            <ul className="space-y-3">
              {siteConfig.phones.map((p) => (
                <li key={p.number}>
                  <a href={`tel:${p.number}`} className="flex items-start gap-2.5 font-body text-sm text-white/60 hover:text-gold transition-colors">
                    <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold" />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 font-body text-xs text-white/60 hover:text-gold transition-colors break-all">
                  <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold" />
                  <address className="not-italic font-body text-xs text-white/60 leading-relaxed">
                    {siteConfig.officeAddress.line1}<br />
                    {siteConfig.officeAddress.line2}<br />
                    {siteConfig.officeAddress.line3}<br />
                    {siteConfig.officeAddress.line4}
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-5">Follow Yaganti</h3>
            <p className="font-body text-sm text-white/55 leading-relaxed mb-5">Stay connected for project updates and new releases.</p>
            <div className="flex items-center gap-3">
              {[
                { name: 'Facebook', Icon: Facebook },
                { name: 'Instagram', Icon: Instagram },
                { name: 'YouTube', Icon: Youtube },
                { name: 'LinkedIn', Icon: Linkedin },
              ].map(({ name, Icon }) => (
                <span key={name} title={`${name} profile coming soon`} aria-label={`${name} profile coming soon`} className="w-10 h-10 border border-white/15 text-white/60 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </span>
              ))}
            </div>
            <p className="font-body text-xs text-white/35 mt-4">Social profile links coming soon</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-5">
          <p className="font-body text-xs text-white/35 leading-relaxed text-center max-w-3xl mx-auto">
            This website is only a conceptual presentation and not a legal offering. The promoters reserve the right to make changes in plans, elevation and specifications as deemed fit. All images are illustrative architectural renders.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-luxury py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-body text-xs text-white/40">
              © {year} Yaganti Signature Suites. All rights reserved. A project by Yaganti Constructions.
            </p>
            <p className="font-body text-xs text-white/30">
              Developed by{' '}
              <a href={siteConfig.webDeveloperUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                {siteConfig.webDeveloper}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

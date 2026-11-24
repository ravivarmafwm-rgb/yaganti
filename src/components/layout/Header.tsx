'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone, Mail, X } from 'lucide-react';
import { Logo } from '@/src/components/shared/Logo';
import { navLinks, siteConfig } from '@/src/config/site';
import { usePathname } from 'next/navigation';
import { BrochureGate } from '@/src/components/shared/BrochureGate';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerBg = 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-border-gold';
  const linkColor = 'text-charcoal hover:text-gold';
  const menuIconColor = 'text-charcoal';

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden lg:block bg-charcoal text-white/80">
        <div className="container-luxury">
          <div className="flex items-center justify-between py-2 text-xs font-body">
            <div className="flex items-center gap-6">
              <a href={`tel:${siteConfig.phones[0].number}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone className="w-3 h-3" />
                {siteConfig.phones[0].display}
              </a>
              <a href={`tel:${siteConfig.phones[1].number}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone className="w-3 h-3" />
                {siteConfig.phones[1].display}
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Mail className="w-3 h-3" />
                {siteConfig.email}
              </a>
              <BrochureGate className="flex items-center gap-1.5 hover:text-gold transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerBg}`}>
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo variant="dark" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.filter((link) => link.href !== '/contact').map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link relative ${linkColor} ${isActive ? 'text-gold' : ''}`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <EnquiryTrigger scrolled={scrolled} isHome={isHome} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2 ${menuIconColor}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu onClose={() => setMenuOpen(false)} pathname={pathname} />
      )}
    </>
  );
}

function EnquiryTrigger({ scrolled, isHome }: { scrolled: boolean; isHome: boolean }) {
  return (
    <Link
      href="/contact"
      className={`btn-gold text-xs px-5 py-2.5 tracking-widest uppercase ${isHome && !scrolled ? 'bg-gold' : 'bg-gold'}`}
    >
      Enquire Now
    </Link>
  );
}

function MobileMenu({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" className="relative ml-auto w-80 max-w-full h-full bg-charcoal flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Logo variant="light" />
          <button onClick={onClose} className="text-white/70 hover:text-white p-1" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {navLinks.filter((link) => link.href !== '/contact').map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`py-3 font-body font-medium text-sm border-b border-white/10 transition-colors ${isActive ? 'text-gold' : 'text-white/80 hover:text-gold'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-6 border-t border-white/10 space-y-3">
          <a href={`tel:${siteConfig.phones[0].number}`} className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors">
            <Phone className="w-4 h-4" />
            {siteConfig.phones[0].display}
          </a>
          <a href={`tel:${siteConfig.phones[1].number}`} className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors">
            <Phone className="w-4 h-4" />
            {siteConfig.phones[1].display}
          </a>
          <BrochureGate className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors" />
          <Link href="/contact" onClick={onClose} className="btn-gold w-full justify-center mt-4 text-xs tracking-widest uppercase">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}

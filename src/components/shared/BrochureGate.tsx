'use client';

import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { EnquiryForm } from '@/src/components/forms/EnquiryForm';
import { siteConfig } from '@/src/config/site';

export function BrochureGate({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = siteConfig.brochurePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <Download className="w-4 h-4" /> Download Brochure
      </button>
      {open && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <section role="dialog" aria-modal="true" aria-labelledby="brochure-dialog-title" className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8 shadow-2xl">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close brochure form" className="absolute right-4 top-4 p-2 text-muted hover:text-charcoal"><X className="w-5 h-5" /></button>
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">Project brochure</p>
            <h2 id="brochure-dialog-title" className="font-heading text-3xl text-charcoal mb-6">Share your details to continue</h2>
            {downloadReady ? (
              <div className="py-5">
                <p className="font-body text-charcoal mb-5">Thank you. Your enquiry was submitted and the brochure is ready.</p>
                <button type="button" onClick={downloadBrochure} className="btn-gold inline-flex items-center gap-2"><Download className="w-4 h-4" /> Download Brochure</button>
              </div>
            ) : <EnquiryForm sourcePage="brochure-download" onSuccess={() => setDownloadReady(true)} />}
          </section>
        </div>
      )}
    </>
  );
}

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/src/components/shared/SectionHeader';
import { siteConfig } from '@/src/config/site';
import { previousProjects } from '@/src/data/project';

export function DeveloperSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="About the Developer"
              heading="Built on Vision. Defined by Quality."
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 font-body text-muted leading-relaxed">
              <p>
                Yaganti Group is a real estate stalwart in South Coastal Andhra Pradesh, pioneering
                visionary, boundary-pushing construction. Their projects blend structural integrity,
                functionality and aesthetics, delivering opulent living experiences.
              </p>
              <p>
                Under Mr. Yaganti Durga Prasad Rao&apos;s guidance, Yaganti Constructions has completed{' '}
                <strong className="text-charcoal">{siteConfig.completedProjects} residential projects</strong> in Guntur.
                Meanwhile, Yaganti Estates offers coastal resorts, open plots and villas in Bapatla.
              </p>
              <p>
                Comprising Yaganti Constructions, Yaganti Estates and Yaganti Builders, the Yaganti
                brothers lead this architectural endeavour with unwavering dedication.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {siteConfig.entities.map((e) => (
                <div key={e} className="border border-border-gold p-3 text-center">
                  <p className="font-body text-xs text-muted uppercase tracking-wider leading-tight">{e}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white border border-border-gold">
              <p className="font-body text-xs text-muted uppercase tracking-widest mb-2">Leadership</p>
              {siteConfig.leadership.map((l) => (
                <p key={l} className="font-body text-sm text-charcoal font-medium">{l}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="btn-gold flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={siteConfig.developerWebsite} target="_blank" rel="noopener noreferrer" className="btn-outline-gold flex items-center gap-2">
                yagantigroup.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Previous Projects */}
          <div>
            <div className="bg-charcoal p-8 lg:p-10">
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-6">Previous Projects</h3>
              <div className="flex flex-wrap gap-2">
                {previousProjects.map((p) => (
                  <span key={p} className="font-body text-xs text-white/60 border border-white/10 px-2 py-1 hover:border-gold hover:text-gold transition-colors cursor-default">
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-heading text-4xl text-gold italic">{siteConfig.completedProjects}+</p>
                <p className="font-body text-xs text-white/60 uppercase tracking-widest mt-1">Completed Residential Projects in Guntur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

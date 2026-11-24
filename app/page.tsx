import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { HeroSlider } from '@/src/components/home/HeroSlider';
import { ProjectHighlights } from '@/src/components/home/ProjectHighlights';
import { AboutSection } from '@/src/components/home/AboutSection';
import { InteriorsSlider } from '@/src/components/home/InteriorsSlider';
import { FloorPlansPreview } from '@/src/components/home/FloorPlansPreview';
import { AmenitiesSection } from '@/src/components/home/AmenitiesSection';
import { SpecsPreview } from '@/src/components/home/SpecsPreview';
import { LocationSection } from '@/src/components/home/LocationSection';
import { DeveloperSection } from '@/src/components/home/DeveloperSection';
import { GalleryPreview } from '@/src/components/home/GalleryPreview';
import { EnquiryCTA } from '@/src/components/home/EnquiryCTA';
import { FloatingButtons } from '@/src/components/shared/FloatingButtons';
import { AskSignature } from '@/src/components/chatbot/AskSignature';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yaganti Signature Suites | Luxury Apartments in Guntur',
  description: 'Discover Yaganti Signature Suites by Yaganti Constructions — spacious luxury residences spanning 3,400–3,550 sq. ft. with premium interiors, dedicated home theatre and east & west facing floor plans in Guntur.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <ProjectHighlights />
        <AboutSection />
        <InteriorsSlider />
        <FloorPlansPreview />
        <AmenitiesSection />
        <SpecsPreview />
        <LocationSection />
        <DeveloperSection />
        <GalleryPreview />
        <EnquiryCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <AskSignature />
    </>
  );
}

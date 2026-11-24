'use client';

import { useSearchParams } from 'next/navigation';
import { EnquiryForm } from './EnquiryForm';

export function ContactEnquiryForm() {
  const searchParams = useSearchParams();
  return <EnquiryForm sourcePage="contact" initialEnquiryType={searchParams.get('type') === 'site-visit' ? 'site-visit' : undefined} />;
}

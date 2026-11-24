'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/src/config/site';
import { apartmentAreaOptions, facingOptions, enquiryTypeOptions, visitTimeOptions } from '@/src/types/index';

const schema = z.object({
  full_name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^(\+91|91|0)?[6-9]\d{9}$/, 'Please enter a valid Indian mobile number'),
  email: z.string().email('Please enter a valid email address').or(z.literal('')).optional(),
  apartment_area: z.string().min(1, 'Please select an apartment area'),
  preferred_facing: z.string().min(1, 'Please select a preferred facing'),
  enquiry_type: z.string().min(1, 'Please select an enquiry type'),
  preferred_visit_date: z.string().optional(),
  preferred_visit_time: z.string().optional(),
  message: z.string().max(500).optional(),
  consent: z.boolean().refine((v) => v === true, 'Please provide your consent to continue'),
  honeypot: z.string().max(0, ''),
});

type FormData = z.infer<typeof schema>;

export function EnquiryForm({ sourcePage = 'contact', initialEnquiryType, onSuccess }: { sourcePage?: string; initialEnquiryType?: string; onSuccess?: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, honeypot: '', enquiry_type: initialEnquiryType ?? '' },
  });

  const enquiryType = watch('enquiry_type');

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source_page: sourcePage }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');
      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-12 h-12 text-gold mb-4" />
        <h3 className="font-heading text-2xl text-charcoal mb-3">Thank You!</h3>
        <p className="font-body text-muted max-w-sm leading-relaxed">
          Your enquiry has been received. Our sales team will get in touch with you shortly.
        </p>
        <p className="font-body text-xs text-muted mt-4 italic">
          For immediate assistance, call us at {siteConfig.phones[0].display}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <input type="text" {...register('honeypot')} className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label" htmlFor="full_name">Full Name *</label>
          <input id="full_name" type="text" {...register('full_name')} placeholder="Your full name" className="form-input" />
          {errors.full_name && <p className="mt-1 font-body text-xs text-red-600">{errors.full_name.message}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="phone">Mobile Number *</label>
          <input id="phone" type="tel" {...register('phone')} placeholder="+91 98765 43210" className="form-input" />
          {errors.phone && <p className="mt-1 font-body text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="email">Email Address</label>
        <input id="email" type="email" {...register('email')} placeholder="your@email.com" className="form-input" />
        {errors.email && <p className="mt-1 font-body text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label" htmlFor="apartment_area">Interested Apartment Area *</label>
          <select id="apartment_area" {...register('apartment_area')} className="form-input">
            <option value="">Select area</option>
            {apartmentAreaOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.apartment_area && <p className="mt-1 font-body text-xs text-red-600">{errors.apartment_area.message}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="preferred_facing">Preferred Facing *</label>
          <select id="preferred_facing" {...register('preferred_facing')} className="form-input">
            <option value="">Select facing</option>
            {facingOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.preferred_facing && <p className="mt-1 font-body text-xs text-red-600">{errors.preferred_facing.message}</p>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="enquiry_type">Enquiry Type *</label>
        <select id="enquiry_type" {...register('enquiry_type')} className="form-input">
          <option value="">Select enquiry type</option>
          {enquiryTypeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        {errors.enquiry_type && <p className="mt-1 font-body text-xs text-red-600">{errors.enquiry_type.message}</p>}
      </div>

      {/* Site visit fields */}
      {enquiryType === 'site-visit' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label" htmlFor="preferred_visit_date">Preferred Date</label>
            <input id="preferred_visit_date" type="date" {...register('preferred_visit_date')} className="form-input" min={new Date().toISOString().split('T')[0]} />
          </div>
          <div>
            <label className="form-label" htmlFor="preferred_visit_time">Preferred Time</label>
            <select id="preferred_visit_time" {...register('preferred_visit_time')} className="form-input">
              <option value="">Select time</option>
              {visitTimeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
      )}

      <div>
        <label className="form-label" htmlFor="message">Message</label>
        <textarea id="message" {...register('message')} rows={3} placeholder="Any specific requirements or questions?" className="form-input resize-none" />
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" {...register('consent')} className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0" />
        <label htmlFor="consent" className="font-body text-xs text-muted leading-relaxed cursor-pointer">
          I consent to Yaganti Constructions contacting me regarding Yaganti Signature Suites. I understand my information will be used solely for this purpose and not shared with third parties.
        </label>
      </div>
      {errors.consent && <p className="font-body text-xs text-red-600">{errors.consent.message}</p>}

      {serverError && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p className="font-body text-xs">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Enquiry
          </>
        )}
      </button>

      <p className="font-body text-xs text-muted text-center italic">
        Submitting this form does not constitute a confirmed booking or appointment.
      </p>
    </form>
  );
}

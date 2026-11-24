import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['full_name', 'phone', 'apartment_area', 'preferred_facing', 'enquiry_type'];
    if (required.some((field) => typeof body[field] !== 'string' || !body[field].trim())) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }
    if (!body.consent) return NextResponse.json({ error: 'Consent is required.' }, { status: 400 });
    if (body.honeypot) return NextResponse.json({ ok: true });

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      return NextResponse.json({ error: 'Enquiry service is not configured yet. Please call our sales team.' }, { status: 503 });
    }

    const supabase = createClient(url, key);
    const { error } = await supabase.from('enquiries').insert({
      full_name: body.full_name.trim(),
      phone: body.phone.trim(),
      email: typeof body.email === 'string' ? body.email.trim() : null,
      apartment_area: body.apartment_area,
      preferred_facing: body.preferred_facing,
      enquiry_type: body.enquiry_type,
      preferred_visit_date: body.preferred_visit_date || null,
      preferred_visit_time: body.preferred_visit_time || null,
      message: typeof body.message === 'string' ? body.message.trim() : null,
      source_page: typeof body.source_page === 'string' ? body.source_page : 'contact',
    });

    if (error) {
      console.error('Enquiry insert failed:', error.message);
      return NextResponse.json({ error: 'We could not submit your enquiry. Please try again or call our sales team.' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid enquiry request.' }, { status: 400 });
  }
}

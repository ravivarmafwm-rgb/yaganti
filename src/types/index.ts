export type EnquiryFormData = {
  full_name: string;
  phone: string;
  email: string;
  apartment_area: string;
  preferred_facing: string;
  enquiry_type: string;
  preferred_visit_date?: string;
  preferred_visit_time?: string;
  message?: string;
  source_page?: string;
  consent: boolean;
};

export type EnquiryRecord = EnquiryFormData & {
  id: string;
  created_at: string;
  status: string;
};

export const apartmentAreaOptions = [
  { value: '3400', label: '3,400 sq. ft.' },
  { value: '3550', label: '3,550 sq. ft.' },
  { value: 'assistance', label: 'Need Assistance' },
];

export const facingOptions = [
  { value: 'east', label: 'East Facing' },
  { value: 'west', label: 'West Facing' },
  { value: 'no-preference', label: 'No Preference' },
];

export const enquiryTypeOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'pricing', label: 'Request Pricing' },
  { value: 'site-visit', label: 'Schedule Site Visit' },
  { value: 'floor-plan', label: 'Floor Plan Enquiry' },
  { value: 'callback', label: 'Request Callback' },
];

export const visitTimeOptions = [
  { value: 'morning', label: 'Morning (10 AM – 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM – 3 PM)' },
  { value: 'evening', label: 'Evening (3 PM – 6 PM)' },
];

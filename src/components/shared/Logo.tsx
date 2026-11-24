'use client';

import Link from 'next/link';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-charcoal';
  const goldColor = 'text-gold';

  return (
    <Link href="/" className="flex flex-col leading-none group" aria-label="Yaganti Signature Suites Home">
      <span className={`font-body text-[10px] font-semibold uppercase tracking-[0.25em] ${goldColor} transition-opacity group-hover:opacity-80`}>
        Yaganti
      </span>
      <span className={`font-heading text-2xl font-light italic ${goldColor} leading-none`}>
        Signature
      </span>
      <span className={`font-body text-[10px] font-semibold uppercase tracking-[0.35em] ${textColor} transition-opacity group-hover:opacity-80`}>
        Suites
      </span>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <Link href="/" className="hover:text-gold transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 opacity-50" />
          {item.href ? (
            <Link href={item.href} className="hover:text-gold transition-colors">{item.label}</Link>
          ) : (
            <span className="text-gold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

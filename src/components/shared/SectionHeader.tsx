interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  variant?: 'dark' | 'light';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  variant = 'dark',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const textColor = variant === 'light' ? 'text-white' : 'text-charcoal';
  const subColor = variant === 'light' ? 'text-white/70' : 'text-muted';

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">{eyebrow}</span>
      )}
      <h2 className={`section-heading text-3xl sm:text-4xl lg:text-5xl ${textColor}`}>
        {heading}
      </h2>
      <span className={`${align === 'center' ? 'gold-divider-center' : 'gold-divider'}`} />
      {subheading && (
        <p className={`mt-2 font-body text-base leading-relaxed max-w-2xl ${subColor}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}

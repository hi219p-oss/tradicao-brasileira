type BrandLockupProps = {
  logoSrc: string;
  href?: string;
  name?: string;
  descriptor?: string;
  variant?: 'header' | 'footer';
};

export function BrandLockup({
  logoSrc,
  href = '#inicio',
  name = 'Tradição Brasileira',
  descriptor,
  variant = 'header',
}: BrandLockupProps) {
  const isFooter = variant === 'footer';
  const content = (
    <>
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className={`block shrink-0 object-contain ${
          isFooter ? 'h-9 w-9' : 'h-12 w-12'
        }`}
      />
      <span className="flex flex-col gap-1">
        <span
          className={`font-semibold uppercase leading-tight tracking-[0.16em] text-foreground ${
            isFooter ? 'text-[9px]' : 'text-[11px]'
          }`}
        >
          {name}
        </span>
        {descriptor ? (
          <span className="text-[10px] uppercase tracking-[0.16em] text-accent">
            {descriptor}
          </span>
        ) : null}
      </span>
    </>
  );

  return (
    <a
      href={href}
      aria-label={`${name} — início`}
      className={`inline-flex items-center no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${
        isFooter ? 'gap-2' : 'gap-3'
      }`}
    >
      {content}
    </a>
  );
}

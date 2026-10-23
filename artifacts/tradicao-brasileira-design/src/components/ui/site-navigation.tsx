import { useId, useState } from 'react';

export type SiteNavigationItem = {
  label: string;
  href: string;
};

type SiteNavigationProps = {
  items: SiteNavigationItem[];
  ariaLabel?: string;
  menuLabel?: string;
};

export function SiteNavigation({
  items,
  ariaLabel = 'Navegação principal',
  menuLabel = 'Menu',
}: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const generatedId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const navigationId = `site-navigation-${generatedId}`;

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex min-h-10 items-center gap-2 border border-accent/60 px-3 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:hidden"
        aria-expanded={isOpen}
        aria-controls={navigationId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? 'Fechar' : menuLabel}
        <span aria-hidden="true" className="text-lg leading-none text-accent">
          {isOpen ? '×' : '＋'}
        </span>
      </button>
      <nav
        id={navigationId}
        aria-label={ariaLabel}
        className={`${
          isOpen ? 'flex' : 'hidden md:flex'
        } absolute right-0 top-12 z-10 min-w-56 flex-col border border-border bg-card p-3 text-card-foreground shadow-lg md:static md:min-w-0 md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        {items.map((item) => (
          <a
            key={`${item.href}-${item.label}`}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="border-b border-border/70 px-2 py-3 text-xs font-semibold tracking-[0.1em] text-foreground no-underline transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring last:border-0 md:border-0 md:px-0 md:py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

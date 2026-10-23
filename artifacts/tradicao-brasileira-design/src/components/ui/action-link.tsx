type ActionLinkProps = {
  href: string;
  label: string;
  direction?: 'down' | 'up';
};

export function ActionLink({
  href,
  label,
  direction = 'down',
}: ActionLinkProps) {
  return (
    <a
      className="group inline-flex items-center gap-4 border-b border-accent px-0 py-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground no-underline transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      href={href}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`text-xl text-accent transition-transform motion-reduce:transition-none ${
          direction === 'down'
            ? 'group-hover:translate-y-1'
            : 'group-hover:-translate-y-1'
        }`}
      >
        {direction === 'down' ? '↓' : '↑'}
      </span>
    </a>
  );
}

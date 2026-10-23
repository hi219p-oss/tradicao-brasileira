type EditorialLabelProps = {
  children: string;
  variant?: 'section' | 'number';
};

export function EditorialLabel({
  children,
  variant = 'section',
}: EditorialLabelProps) {
  const color =
    variant === 'number' ? 'text-accent' : 'text-muted-foreground';

  return (
    <p
      className={`m-0 text-xs font-semibold uppercase tracking-[0.14em] ${color}`}
    >
      {children}
    </p>
  );
}

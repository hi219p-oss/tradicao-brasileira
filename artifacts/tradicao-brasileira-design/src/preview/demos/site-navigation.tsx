import { SiteNavigation } from '../../components/ui/site-navigation';

const items = [
  { label: 'Início', href: '#demo-inicio' },
  { label: 'Nossa História', href: '#demo-historia' },
  { label: 'Os Pratos', href: '#demo-pratos' },
  { label: 'Fontes', href: '#demo-fontes' },
];

export function SiteNavigationDemo() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 max-w-sm text-sm leading-6 text-muted-foreground">
          Em telas largas, os destinos ficam visíveis. Em telas estreitas, o
          botão abre a mesma lista e informa seu estado para tecnologias assistivas.
        </p>
        <SiteNavigation items={items} />
      </section>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <section
            id={item.href.slice(1)}
            key={item.href}
            className="rounded-lg border border-border bg-card p-4 text-card-foreground"
          >
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Destino
            </p>
            <h2 className="mb-0 mt-2 font-serif text-2xl font-medium">
              {item.label}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
}

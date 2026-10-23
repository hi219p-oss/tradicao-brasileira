import { ActionLink } from '../../components/ui/action-link';

export function ActionLinkDemo() {
  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Avançar
        </p>
        <ActionLink href="#action-link-destination" label="Conheça as histórias" />
      </section>
      <section
        id="action-link-destination"
        className="rounded-lg border border-border bg-muted p-6"
      >
        <p className="m-0 text-sm text-muted-foreground">
          O destino fica na própria página, então o link tem uma ação real.
        </p>
        <ActionLink
          href="#"
          label="Voltar ao início"
          direction="up"
        />
      </section>
    </div>
  );
}

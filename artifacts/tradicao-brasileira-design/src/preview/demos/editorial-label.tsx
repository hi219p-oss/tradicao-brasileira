import { EditorialLabel } from '../../components/ui/editorial-label';

export function EditorialLabelDemo() {
  return (
    <div className="space-y-6">
      <section className="space-y-3 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="m-0 text-xs text-muted-foreground">Índice de seção</p>
        <EditorialLabel>01 — Nossa História</EditorialLabel>
      </section>
      <section className="dark space-y-3 rounded-lg border border-border bg-background p-6 text-foreground">
        <p className="m-0 text-xs text-muted-foreground">Numeração sobre imagem escura</p>
        <EditorialLabel variant="number">Caderno de sabores / 01</EditorialLabel>
      </section>
    </div>
  );
}

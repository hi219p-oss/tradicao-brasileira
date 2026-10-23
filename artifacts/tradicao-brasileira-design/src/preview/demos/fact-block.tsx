import { EditorialFactBlock } from '../../components/ui/fact-block';

export function FactBlockDemo() {
  return (
    <div className="grid gap-8 border-t border-border pt-6 md:grid-cols-2">
      <EditorialFactBlock
        title="Uma história"
        body="Uma preparação pode ser apresentada pelo lugar onde é feita, pelos ingredientes disponíveis e pelos costumes que a acompanham."
      />
      <EditorialFactBlock
        title="Um cuidado"
        body="Quando a pesquisa não confirma uma origem, o texto deve dizer isso com clareza em vez de completar a história com suposições."
      />
    </div>
  );
}

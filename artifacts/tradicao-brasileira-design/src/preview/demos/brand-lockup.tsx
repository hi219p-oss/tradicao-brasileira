import { BrandLockup } from '../../components/ui/brand-lockup';

const logoSrc = `${import.meta.env.BASE_URL}logo-oficial.png`;

export function BrandLockupDemo() {
  return (
    <div id="inicio" className="space-y-5">
      <section className="space-y-6 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Cabeçalho
          </p>
          <BrandLockup
            logoSrc={logoSrc}
            descriptor="Projeto escolar de empreendedorismo cultural"
          />
        </div>
        <div className="border-t border-border pt-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Rodapé · versão compacta
          </p>
          <BrandLockup
            logoSrc={logoSrc}
            variant="footer"
            descriptor="2º Reg 3"
          />
        </div>
      </section>
      <p className="m-0 text-sm leading-6 text-muted-foreground">
        O arquivo oficial é exibido sem redesenho ou recoloração; o nome também
        permanece como texto para leitura e acessibilidade.
      </p>
    </div>
  );
}

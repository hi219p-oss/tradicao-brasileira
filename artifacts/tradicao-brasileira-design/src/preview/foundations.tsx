import { ActionLink } from '../components/ui/action-link';
import { BrandLockup } from '../components/ui/brand-lockup';
import { EditorialFactBlock } from '../components/ui/fact-block';
import { EditorialLabel } from '../components/ui/editorial-label';
import { SiteNavigation } from '../components/ui/site-navigation';
import { Guidelines } from './parts';

const logoSrc = `${import.meta.env.BASE_URL}logo-oficial.png`;
const navigationItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa História', href: '#nossa-historia' },
  { label: 'Os Pratos', href: '#os-pratos' },
  { label: 'Fontes', href: '#fontes' },
];

const CORE_SWATCHES = [
  { name: 'Primária', className: 'bg-primary text-primary-foreground' },
  { name: 'Secundária', className: 'bg-secondary text-secondary-foreground' },
  { name: 'Destaque', className: 'bg-accent text-accent-foreground' },
] as const;

const SUPPORTING_SWATCHES = [
  { name: 'Fundo', className: 'border border-border bg-background text-foreground' },
  { name: 'Cartão', className: 'border border-border bg-card text-card-foreground' },
  { name: 'Suave', className: 'bg-muted text-foreground' },
  { name: 'Aviso', className: 'bg-destructive text-destructive-foreground' },
  { name: 'Borda', className: 'border border-border bg-background text-foreground' },
] as const;

const TYPE_SCALE = [
  { label: 'Destaque', className: 'font-serif text-5xl font-medium tracking-tight' },
  { label: 'Título', className: 'font-serif text-3xl font-medium' },
  { label: 'Texto', className: 'font-sans text-base leading-7' },
  { label: 'Marcador', className: 'font-mono text-xs uppercase tracking-[0.14em]' },
] as const;

const SPACING_SCALE = [
  { label: '4', className: 'w-4' },
  { label: '8', className: 'w-8' },
  { label: '12', className: 'w-12' },
  { label: '16', className: 'w-16' },
  { label: '24', className: 'w-24' },
] as const;

function Swatch({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`flex min-h-20 items-end rounded-md p-3 text-xs font-semibold ${className}`}>
        <span>{name}</span>
      </div>
      <p className="m-0 text-sm font-medium">{name}</p>
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <section
        id="inicio"
        className="grid gap-6 rounded-xl border border-border bg-card p-6 text-card-foreground md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center"
      >
        <div>
          <EditorialLabel>Projeto cultural · Brasil</EditorialLabel>
          <h2 className="mb-3 mt-4 max-w-xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Uma identidade para contar histórias à mesa
          </h2>
          <p className="m-0 max-w-prose text-sm leading-7 text-muted-foreground">
            Verde profundo, dourado discreto, papel natural e tipografia
            editorial dão unidade às histórias da Tradição Brasileira.
          </p>
        </div>
        <div className="flex min-h-36 items-center justify-center rounded-lg bg-secondary p-6">
          <BrandLockup
            logoSrc={logoSrc}
            descriptor="Projeto cultural"
          />
        </div>
      </section>

      <section className="space-y-5 rounded-xl border border-border bg-card p-6 text-card-foreground">
        <div>
          <EditorialLabel>Componentes do piloto</EditorialLabel>
          <h2 className="mb-0 mt-2 font-serif text-2xl font-medium">
            Padrões para orientar a leitura
          </h2>
        </div>
        <div className="flex flex-col gap-5 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
          <BrandLockup logoSrc={logoSrc} descriptor="Identidade do projeto" />
          <SiteNavigation items={navigationItems} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-lg bg-muted p-5">
            <EditorialLabel>01 — Nossa História</EditorialLabel>
            <ActionLink
              href="#piloto-destino"
              label="Conheça as histórias"
            />
          </div>
          <EditorialFactBlock
            title="Conteúdo com contexto"
            body="Cada história pode organizar contexto, informações complementares e curiosidades em blocos claros, sem transformar a leitura em ficha técnica."
          />
        </div>
        <div
          id="piloto-destino"
          className="rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground"
        >
          Os componentes mantêm o texto e os destinos sob controle do aplicativo.
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Paleta principal</EditorialLabel>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div>
          <h2 className="m-0 font-serif text-2xl font-medium">Paleta principal</h2>
          <p className="mb-0 mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Verde profundo e dourado vêm da identidade já presente no projeto;
            tons de papel e tinta sustentam a leitura longa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-border bg-card p-5 text-card-foreground">
        <div>
          <h2 className="m-0 font-serif text-2xl font-medium">Superfícies e estados</h2>
          <p className="mb-0 mt-2 text-sm text-muted-foreground">
            Papéis semânticos para fundo, cartões, texto, bordas e avisos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {SUPPORTING_SWATCHES.map((swatch) => (
            <Swatch key={swatch.name} {...swatch} />
          ))}
        </div>
      </section>

      <section className="dark space-y-4 rounded-xl border border-border bg-background p-5 text-foreground">
        <div>
          <h2 className="m-0 font-serif text-2xl font-medium">Modo escuro derivado</h2>
          <p className="mb-0 mt-2 text-sm leading-6 text-muted-foreground">
            Uma extensão da paleta para superfícies escuras; não substitui a
            apresentação em papel claro da página existente.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CORE_SWATCHES.map((swatch) => (
            <Swatch key={`dark-${swatch.name}`} {...swatch} />
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 text-card-foreground">
        <Guidelines
          items={[
            { kind: 'do', text: 'Use o dourado em detalhes e chamadas curtas.' },
            { kind: 'do', text: 'Mantenha texto longo sobre superfícies de papel.' },
            { kind: 'dont', text: 'Evite cores saturadas e referências visuais folclóricas em excesso.' },
          ]}
        />
      </section>
    </div>
  );
}

export function FontsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4 rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Fraunces · títulos editoriais</EditorialLabel>
        <p className="m-0 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          Sabores que contam histórias
        </p>
        <p className="m-0 max-w-prose text-sm leading-7 text-muted-foreground">
          Fraunces dá personalidade a títulos e aberturas sem competir com o
          conteúdo.
        </p>
      </section>

      <section className="space-y-5 rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>DM Sans · leitura e interface</EditorialLabel>
        <p className="m-0 max-w-3xl font-sans text-lg leading-8">
          A culinária brasileira guarda histórias de povos, famílias, encontros
          e costumes transmitidos ao longo das gerações.
        </p>
        <p className="m-0 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          01 — CADERNO DE SABORES · MENLO
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Escala tipográfica</EditorialLabel>
        <div className="mt-5 space-y-5">
        {TYPE_SCALE.map((entry) => (
          <div key={entry.label} className="grid gap-2 border-t border-border pt-4 sm:grid-cols-[100px_1fr]">
            <span className="pt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {entry.label}
            </span>
            <p className="m-0">
              <span className={entry.className}>Sabores brasileiros</span>
            </p>
          </div>
        ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 text-card-foreground">
        <Guidelines
          items={[
            { kind: 'do', text: 'Reserve a serifada para títulos e momentos de abertura.' },
            { kind: 'do', text: 'Use a sem serifa em parágrafos longos e elementos de interface.' },
            { kind: 'dont', text: 'Não use a tipografia decorativa em blocos inteiros de texto.' },
          ]}
        />
      </section>
    </div>
  );
}

export function LayoutPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Espaçamento · base 4 px</EditorialLabel>
        <h2 className="mb-0 mt-3 font-serif text-2xl font-medium">Ritmo e respiro</h2>
        <p className="mb-0 mt-2 text-sm leading-6 text-muted-foreground">
          A página alterna leitura e imagem com margens generosas, sem compactar
          o conteúdo em uma sequência de cartões.
        </p>
        <div className="mt-6 space-y-4">
          {SPACING_SCALE.map((space) => (
            <div key={space.label} className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground">
                {space.label}
              </span>
              <div className={`h-3 rounded-full bg-primary ${space.className}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Contornos</EditorialLabel>
        <h2 className="mb-0 mt-3 font-serif text-2xl font-medium">Raio base · 8 px</h2>
        <p className="mb-0 mt-2 text-sm leading-6 text-muted-foreground">
          Cantos discretos apoiam a navegação e os exemplos; a composição
          editorial continua aberta.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            { label: 'Pequeno', className: 'rounded-sm' },
            { label: 'Médio', className: 'rounded-md' },
            { label: 'Base', className: 'rounded-lg' },
            { label: 'Amplo', className: 'rounded-xl' },
          ].map((radius) => (
            <div
              key={radius.label}
              className={`flex h-24 items-end border border-border bg-muted p-3 ${radius.className}`}
            >
              <span className="text-xs font-medium text-foreground">{radius.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 text-card-foreground lg:col-span-2">
        <Guidelines
          items={[
            { kind: 'do', text: 'Alterne a posição de texto e fotografia para dar ritmo às histórias.' },
            { kind: 'do', text: 'Mantenha largura confortável para leitura em celulares.' },
            { kind: 'dont', text: 'Evite cartões idênticos repetidos como catálogo de restaurante.' },
          ]}
        />
      </section>
    </div>
  );
}

export function BrandPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Arquivo oficial</EditorialLabel>
        <div className="my-6 flex min-h-52 items-center justify-center rounded-lg bg-secondary p-6">
          <img
            src={logoSrc}
            alt="Logo oficial do projeto Tradição Brasileira"
            className="h-40 w-40 object-contain"
          />
        </div>
        <p className="m-0 max-w-2xl text-sm leading-7 text-muted-foreground">
          Use o arquivo enviado pelo projeto sem redesenhar, recolorir ou
          substituir a marca. Como a arte tem fundo verde próprio, preserve
          espaço ao redor e prefira superfícies claras.
        </p>
      </section>
    </div>
  );
}

export function ContentGuidelinesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Recorte editorial</EditorialLabel>
        <h2 className="mb-3 mt-3 max-w-2xl font-serif text-3xl font-medium">
          Histórias brasileiras, com os pés no cotidiano
        </h2>
        <p className="m-0 max-w-3xl text-sm leading-7 text-muted-foreground">
          O conteúdo deve partir de práticas alimentares no Brasil — em casa,
          nas cidades, nos estados e nas regiões — e apoiar cada detalhe em
          fontes consultáveis.
        </p>
      </section>
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <Guidelines
          items={[
            { kind: 'do', text: 'Valorize práticas domésticas, encontros e a transmissão de conhecimentos culinários quando documentada.' },
            { kind: 'do', text: 'Reconheça contribuições indígenas, africanas, europeias e transformações regionais sem reduzir a história a uma só origem.' },
            { kind: 'do', text: 'Indique incertezas e cite fontes que sustentem afirmações históricas.' },
            { kind: 'dont', text: 'Não invente histórias de família, costumes locais, datas ou origens regionais.' },
          ]}
        />
      </section>
    </div>
  );
}

export function MotionGuidelinesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <EditorialLabel>Movimento</EditorialLabel>
        <h2 className="mb-3 mt-3 font-serif text-3xl font-medium">
          Discreto e opcional
        </h2>
        <p className="m-0 max-w-2xl text-sm leading-7 text-muted-foreground">
          Transições breves podem orientar a navegação, mas não devem competir
          com as histórias nem esconder informação.
        </p>
      </section>
      <section className="rounded-xl border border-border bg-card p-6 text-card-foreground">
        <Guidelines
          items={[
            { kind: 'do', text: 'Respeite a preferência do sistema por movimento reduzido.' },
            { kind: 'do', text: 'Mantenha transições curtas e funcionais, como o deslocamento sutil de uma seta.' },
            { kind: 'dont', text: 'Evite animações contínuas, efeitos chamativos ou movimento necessário para compreender a interface.' },
          ]}
        />
      </section>
    </div>
  );
}

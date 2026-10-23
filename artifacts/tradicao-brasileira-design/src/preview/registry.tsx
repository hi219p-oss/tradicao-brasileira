import { lazy, type ComponentType } from 'react';
import {
  BrandPage,
  ColorsPage,
  ContentGuidelinesPage,
  FontsPage,
  LayoutPage,
  MotionGuidelinesPage,
  OverviewPage,
} from './foundations';

function lazyPage(load: () => Promise<ComponentType>) {
  return lazy(async () => ({ default: await load() }));
}

const SiteNavigationDemo = lazyPage(() =>
  import('./demos/site-navigation').then(({ SiteNavigationDemo }) => SiteNavigationDemo),
);
const EditorialLabelDemo = lazyPage(() =>
  import('./demos/editorial-label').then(({ EditorialLabelDemo }) => EditorialLabelDemo),
);
const FactBlockDemo = lazyPage(() =>
  import('./demos/fact-block').then(({ FactBlockDemo }) => FactBlockDemo),
);
const ActionLinkDemo = lazyPage(() =>
  import('./demos/action-link').then(({ ActionLinkDemo }) => ActionLinkDemo),
);
const BrandLockupDemo = lazyPage(() =>
  import('./demos/brand-lockup').then(({ BrandLockupDemo }) => BrandLockupDemo),
);

export type PreviewEntry = {
  // Globally unique across every group — it is the deep-link slug and active-page key.
  id: string;
  name: string;
  description: string;
  Page: ComponentType;
};

export type NavGroup = {
  name: string;
  entries: PreviewEntry[];
};

export const DESIGN_SYSTEM = {
  title: 'Tradição Brasileira',
  description:
    'Sistema de design editorial criado a partir do logo oficial e dos estilos da página existente, para apresentar histórias alimentares brasileiras com acolhimento e cuidado com as fontes.',
} as const;

export const OVERVIEW_ENTRY: PreviewEntry = {
  id: 'overview',
  name: 'Visão geral',
  description: 'A base visual e os princípios que organizam este sistema.',
  Page: OverviewPage,
};

export const NAV_GROUPS: NavGroup[] = [
  {
    name: 'Identidade',
    entries: [
      {
        id: 'brand-guidance',
        name: 'Logo oficial',
        description: 'Uso da marca enviada pelo responsável do projeto.',
        Page: BrandPage,
      },
      {
        id: 'brand-lockup',
        name: 'Assinatura da marca',
        description: 'Composição do logo oficial e do nome do projeto.',
        Page: BrandLockupDemo,
      },
    ],
  },
  {
    name: 'Fundamentos',
    entries: [
      {
        id: 'color-roles',
        name: 'Cores',
        description: 'Paleta principal, superfícies e estados de contraste.',
        Page: ColorsPage,
      },
      {
        id: 'type-scale',
        name: 'Tipografia',
        description: 'Famílias tipográficas e hierarquia de leitura.',
        Page: FontsPage,
      },
      {
        id: 'spacing-radius',
        name: 'Espaçamento e contornos',
        description: 'Ritmo, respiro, espaçamento e raio dos cantos.',
        Page: LayoutPage,
      },
      {
        id: 'content-guidelines',
        name: 'Diretrizes editoriais',
        description: 'Como escrever histórias brasileiras com fontes e contexto.',
        Page: ContentGuidelinesPage,
      },
      {
        id: 'motion-guidelines',
        name: 'Movimento e acessibilidade',
        description: 'Animação discreta e respeito à preferência por movimento reduzido.',
        Page: MotionGuidelinesPage,
      },
    ],
  },
  {
    name: 'Navegação',
    entries: [
      {
        id: 'site-navigation',
        name: 'Navegação do site',
        description: 'Links principais e menu responsivo com estado acessível.',
        Page: SiteNavigationDemo,
      },
    ],
  },
  {
    name: 'Leitura editorial',
    entries: [
      {
        id: 'editorial-label',
        name: 'Marcador editorial',
        description: 'Índices de seção e numeração de histórias.',
        Page: EditorialLabelDemo,
      },
      {
        id: 'fact-block',
        name: 'Bloco editorial',
        description: 'Título curto e texto corrido para organizar uma história.',
        Page: FactBlockDemo,
      },
    ],
  },
  {
    name: 'Ações',
    entries: [
      {
        id: 'action-link',
        name: 'Link de ação',
        description: 'Link de navegação editorial com seta e foco visível.',
        Page: ActionLinkDemo,
      },
    ],
  },
];

export const ALL_ENTRIES: PreviewEntry[] = [
  OVERVIEW_ENTRY,
  ...NAV_GROUPS.flatMap((group) => group.entries),
];

const duplicateIds = ALL_ENTRIES.map((entry) => entry.id).filter(
  (id, index, ids) => ids.indexOf(id) !== index,
);
if (duplicateIds.length > 0) {
  throw new Error(
    `IDs duplicados na prévia: ${[...new Set(duplicateIds)].join(
      ', ',
    )}. Cada página deve ter um id exclusivo.`,
  );
}

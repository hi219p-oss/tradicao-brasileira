# Inventário de componentes

O código existente concentra as composições da página em `App.tsx` e estilos em
`src/index.css`; não há biblioteca publicada nem histórias de Storybook. Este
inventário separa os padrões visuais reutilizáveis e mantém composições específicas
da feira no aplicativo que consome o sistema.

| Ordem | Família | Referência | Dependências | Evidência de uso | Bloco | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Navegação do site | `components/site-navigation.md` | Nenhuma; React | Cabeçalho global, navegação desktop e menu móvel | 1 — piloto | implemented |
| 2 | Marcador editorial | `components/editorial-label.md` | Nenhuma | Marcadores de seção e numeração editorial em várias seções | 1 — piloto | implemented |
| 3 | Bloco editorial | `components/fact-block.md` | Nenhuma | Três blocos de título e texto por história | 1 — piloto | implemented |
| 4 | Link de ação | `components/action-link.md` | Nenhuma | Chamada para os pratos e retorno à seção | 1 — piloto | implemented |
| 5 | Assinatura da marca | `components/brand-lockup.md` | Logo oficial | Identidade no cabeçalho e no rodapé | 1 — piloto | implemented |
| 6 | Link de fonte | `components/source-link.md` | Nenhuma | Componente previsto para referências externas de cada história | 2 | pending |

O piloto implementa somente o primeiro bloco. A composição `DishEditorial` não é
incluída: ela organiza dados específicos dos pratos e permanece no aplicativo.

---
name: Navegação do site
description: Navegação principal com links diretos e menu compacto em telas estreitas.
---

## Evidência de origem

- `artifacts/tradicao-brasileira/src/App.tsx:81-86` define os destinos da navegação.
- `artifacts/tradicao-brasileira/src/App.tsx:170-186` mostra o botão de menu, os
  estados aberto/fechado, os atributos ARIA e o fechamento ao selecionar um link.
- `artifacts/tradicao-brasileira/src/index.css:338-352,422-428` define as versões
  desktop e móvel.

## Contrato do componente

- Recebe uma lista de `{ label, href }`; rótulos e destinos continuam sendo dados
  do aplicativo consumidor.
- Em telas estreitas, oferece um botão com estado `aria-expanded` e uma região
  identificada por `aria-controls`.
- Fecha o menu depois que um destino é selecionado.
- Mantém links simples, sem submenus ou comportamento de loja.

## Fidelidade

O componente transforma o padrão inline existente em uma unidade reutilizável; a
responsividade e os estados acessíveis seguem a implementação original.

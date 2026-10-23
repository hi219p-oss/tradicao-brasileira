---
name: Marcador editorial
description: Rótulos curtos em caixa alta que organizam capítulos e sequências.
---

## Evidência de origem

- `artifacts/tradicao-brasileira/src/App.tsx:191-194,208-210,233-234` usa índices
  editoriais nas seções.
- `artifacts/tradicao-brasileira/src/App.tsx:90-92` usa numeração nos conteúdos.
- `artifacts/tradicao-brasileira/src/index.css:363-364,373-374,394` define escala,
  espaçamento entre letras e cores.

## Contrato do componente

- Recebe um texto já formatado pelo aplicativo, como `01 — Nossa História`.
- A variante `section` representa o índice de uma seção; `number` acompanha uma
  sequência editorial.
- Não cria números, nomes ou conteúdo de navegação.

## Fidelidade

Preserva a tipografia pequena, a caixa alta e o espaçamento aberto do padrão
existente. O dourado fica reservado aos índices de seção.

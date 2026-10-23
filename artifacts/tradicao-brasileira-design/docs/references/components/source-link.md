---
name: Link de fonte
description: Link externo de referência com indicador visual de saída.
---

## Evidência de origem

- `artifacts/tradicao-brasileira/src/App.tsx:121-132` mapeia as fontes de cada
  história e abre links externos em nova aba.
- `artifacts/tradicao-brasileira/src/index.css:404-407` define o estilo do link.

## Contrato do componente

- Recebe rótulo e URL; o aplicativo deve fornecer fontes verificadas.
- Identifica visualmente que o destino é externo e usa `noopener noreferrer`.
- Não cria fontes nem substitui a bibliografia de cada história.

## Fidelidade

Está no bloco 2 porque a versão atual ainda não tem fontes preenchidas nos dados.
Implementar depois da aprovação do piloto.

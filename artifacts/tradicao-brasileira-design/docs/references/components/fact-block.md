---
name: Bloco editorial
description: Unidade de leitura com título curto e texto corrido.
---

## Evidência de origem

- `artifacts/tradicao-brasileira/src/App.tsx:109-120` repete seções semânticas
  para história, complemento factual e curiosidade.
- `artifacts/tradicao-brasileira/src/index.css:401-403` define largura, ritmo
  vertical e hierarquia tipográfica.

## Contrato do componente

- Recebe título e conteúdo como props; não guarda dados de pratos.
- Mantém um título de nível apropriado ao contexto e texto de leitura confortável.
- A composição de artigo, imagens e fontes continua no aplicativo consumidor.

## Fidelidade

Esse padrão é uma divisão de conteúdo repetida dentro das histórias. Não deve
virar um cartão independente nem receber bordas decorativas que não existem na
referência.

---
name: Link de ação
description: Link editorial sublinhado com seta para orientar a leitura.
---

## Evidência de origem

- `artifacts/tradicao-brasileira/src/App.tsx:199-201,260-262` usa o padrão para
  avançar até as histórias e retornar à seção dos pratos.
- `artifacts/tradicao-brasileira/src/index.css:368-370` define sublinhado, caixa
  alta, seta e movimento discreto.

## Contrato do componente

- É um link de navegação, não um botão de compra ou ação comercial.
- Recebe rótulo, destino e direção da seta.
- Mantém foco visível e não depende do movimento para comunicar direção.

## Fidelidade

Preserva a linha dourada, a tipografia compacta e o ícone de seta do padrão
original; o movimento desaparece quando o usuário prefere menos animação.

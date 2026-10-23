# Tradição Brasileira

Site desenvolvido com React, TypeScript e Vite para apresentar a barraca Tradição Brasileira.

## Requisitos

- Node.js instalado
- pnpm instalado

Para verificar se as ferramentas estão disponíveis:

```powershell
node --version
pnpm --version
```

## Instalar dependências

Abra o terminal na pasta `TradicaoBrasileira` (a pasta que contém este README) e execute:

```powershell
pnpm install
```

## Rodar o site

Na mesma pasta, inicie o servidor de desenvolvimento:

```powershell
pnpm --filter @workspace/tradicao-brasileira dev
```

Abra [http://localhost:4173](http://localhost:4173) no navegador. O servidor atualiza a página automaticamente quando os arquivos são alterados. Para encerrá-lo, pressione `Ctrl+C` no terminal.

## Verificar e gerar a versão de produção

Para verificar os tipos do projeto:

```powershell
pnpm --filter @workspace/tradicao-brasileira typecheck
```

Para gerar os arquivos otimizados de produção:

```powershell
pnpm --filter @workspace/tradicao-brasileira build
```

Para visualizar localmente a versão de produção, depois de gerar o build:

```powershell
pnpm --filter @workspace/tradicao-brasileira serve
```

O preview também fica disponível em [http://localhost:4173](http://localhost:4173). Se o servidor de desenvolvimento ainda estiver aberto, encerre-o com `Ctrl+C` antes de iniciar o preview, pois ambos usam a mesma porta.

## Conteúdo do site

- Os textos, imagens e fontes dos pratos estão organizados em `artifacts/tradicao-brasileira/src/data/dishes.ts`.
- As imagens e a logo usadas pelo site ficam em `artifacts/tradicao-brasileira/public`.
- A interface principal está em `artifacts/tradicao-brasileira/src/App.tsx`; os estilos ficam em `artifacts/tradicao-brasileira/src/index.css`.

## Acessibilidade

- O site identifica o idioma como português do Brasil e inclui um link para pular direto ao conteúdo.
- O botão **Ouvir página** usa a leitura em voz alta do navegador, quando disponível.
- O TalkBack é um leitor de tela do Android e precisa ser ativado nas configurações de acessibilidade do dispositivo. O site não consegue ativá-lo por conta própria; ele foi estruturado para funcionar com leitores de tela.

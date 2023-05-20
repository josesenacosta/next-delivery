# Aplicação de Delivery Multi Tenancy utilizando React e Next.js

## Descrição

Este é um projeto de uma aplicação de delivery multi tenancy desenvolvida utilizando React e Next.js. A aplicação permite que os usuários façam pedidos de alimentos de restaurantes locais. Além disso, a aplicação aplica estilizações diferentes para cada tenant, proporcionando uma experiência personalizada para cada restaurante.

A aplicação é construída utilizando o framework Next.js, que combina o desenvolvimento de frontend com server-side rendering (SSR) e geração estática (Static Generation), proporcionando uma experiência de carregamento rápido e otimizada para mecanismos de busca.

## Funcionalidades

- Visualizcao de cardapio de acordo com o restaurante
- Adição de itens ao carrinho de compras
- Realização de pedidos
- Histórico de pedidos
- Registro e autenticação de usuários

## Multi Tenancy

A aplicação utiliza o conceito de multi tenancy para aplicar estilizações diferentes para cada tenant (restaurante). Cada restaurante possui sua própria identidade visual, como cores, logotipos e estilos de fonte, proporcionando uma experiência única para os usuários.

## Tecnologias utilizadas

React: biblioteca JavaScript para a construção de interfaces de usuário
Next.js: framework React para criação de aplicações SSR e Static Generation
CSS Modules: sistema de estilização modular para componentes React

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

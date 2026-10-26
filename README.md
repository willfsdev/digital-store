# Digital Store

Projeto final de Front-end (Geração Tech) — loja virtual desenvolvida em **React**, seguindo a
[documentação do Digital Store](https://github.com/digitalcollegebr/projeto-digital-store) e o design do Figma.

## Equipe

- Willian Ferreira da Silva

## Tecnologias

- React 18 + Vite
- React Router DOM 6
- CSS puro (um arquivo `.css` por componente, cores definidas como variáveis em `src/styles/global.css`)

## Como rodar o projeto

Pré-requisito: Node.js 18 ou superior.

```bash
npm install      # instala as dependências
npm run dev      # inicia em modo desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # visualiza a versão de produção
```

## Páginas e rotas

| Rota                     | Página                            |
| ------------------------ | --------------------------------- |
| `/`                      | Página inicial (Home)             |
| `/produtos`              | Listagem de produtos              |
| `/products?filter=termo` | Listagem filtrada pela busca      |
| `/produto/:id`           | Visualização do produto           |

## Estrutura de pastas

```
src/
├── assets/            # SVGs (logo, ícones, redes sociais)
├── components/
│   ├── BuyBox/
│   ├── FilterGroup/
│   ├── Footer/
│   ├── Gallery/
│   ├── Header/
│   ├── Information/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/products.js   # produtos e imagens usados nas páginas
├── pages/
│   ├── Layout/        # Header + children + Footer
│   ├── HomePage/
│   ├── ProductListingPage/
│   ├── ProductViewPage/
│   └── ComingSoonPage/
├── styles/global.css  # paleta de cores e estilos base
├── App.jsx            # rotas
└── main.jsx
```

## Funcionalidades

- **Header:** logo, campo de busca (lupa ou Enter → `/products?filter=...`), links "Cadastre-se" e "Entrar", ícone de carrinho e navegação com destaque na página ativa (`NavLink`).
- **Footer:** logo branca, descrição, redes sociais, colunas de informações renderizadas a partir de arrays e direitos autorais com o ano atual.
- **Gallery:** slide com setas (desabilitadas no início/fim), animação de deslizar, miniaturas opcionais (`showThumbs`) com borda `primary` na selecionada; props `width`, `height`, `radius`, `className` e `images`.
- **Section, ProductCard, ProductListing:** componentes reutilizáveis com as props da documentação.
- **Listagem de produtos:** ordenação por menor/maior preço e filtros por marca, gênero e estado (funcionando), além do filtro vindo da busca.
- **Visualização do produto:** galeria com miniaturas, BuyBox com avaliação, preços, descrição, opções de tamanho (square) e cor (circle) e produtos recomendados.
- Layout responsivo (desktop, tablet e celular).

## Deploy

O projeto já inclui `vercel.json` (Vercel) e `public/_redirects` (Netlify) para que as rotas funcionem ao recarregar a página.

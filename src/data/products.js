// Base de produtos fictícia usada nas páginas.
// As imagens ficam na pasta /public (servidas a partir da raiz "/").
// As imagens da pasta /public/figma foram exportadas do design no Figma.

const shoe = '/figma/product-shoe.png';

export const products = [
  { id: 1, name: 'K-Swiss V8 - Masculino', category: 'Tênis', brand: 'K-Swiss', style: 'Casual', gender: 'Masculino', condition: 'Novo', image: shoe, price: 200, priceDiscount: 100 },
  { id: 2, name: 'Nike Revolution 6', category: 'Tênis', brand: 'Nike', style: 'Corrida', gender: 'Feminino', condition: 'Novo', image: shoe, price: 349, priceDiscount: 259 },
  { id: 3, name: 'Adidas Runfalcon 3', category: 'Tênis', brand: 'Adidas', style: 'Esporte e lazer', gender: 'Unisex', condition: 'Novo', image: shoe, price: 299, priceDiscount: 219 },
  { id: 4, name: 'Puma Smash V2', category: 'Tênis', brand: 'Puma', style: 'Casual', gender: 'Masculino', condition: 'Usado', image: shoe, price: 189 },
  { id: 5, name: 'Balenciaga Triple S', category: 'Tênis', brand: 'Balenciaga', style: 'Utilitário', gender: 'Feminino', condition: 'Novo', image: shoe, price: 459 },
  { id: 6, name: 'K-Swiss Court - Unisex', category: 'Tênis', brand: 'K-Swiss', style: 'Esporte e lazer', gender: 'Unisex', condition: 'Novo', image: shoe, price: 249 },
  { id: 7, name: 'Nike Air Max SC', category: 'Tênis', brand: 'Nike', style: 'Corrida', gender: 'Masculino', condition: 'Novo', image: shoe, price: 599 },
  { id: 8, name: 'Adidas Grand Court', category: 'Tênis', brand: 'Adidas', style: 'Casual', gender: 'Feminino', condition: 'Usado', image: shoe, price: 129 },
  { id: 9, name: 'Puma Carina 2.0', category: 'Tênis', brand: 'Puma', style: 'Casual', gender: 'Feminino', condition: 'Novo', image: shoe, price: 279, priceDiscount: 239 },
  { id: 10, name: 'Nike Downshifter 12', category: 'Tênis', brand: 'Nike', style: 'Corrida', gender: 'Masculino', condition: 'Novo', image: shoe, price: 219 },
  { id: 11, name: 'Balenciaga Track', category: 'Tênis', brand: 'Balenciaga', style: 'Utilitário', gender: 'Masculino', condition: 'Usado', image: shoe, price: 389 },
  { id: 12, name: 'K-Swiss Ultra - Fem.', category: 'Tênis', brand: 'K-Swiss', style: 'Esporte e lazer', gender: 'Feminino', condition: 'Novo', image: shoe, price: 229, priceDiscount: 179 },
  { id: 13, name: 'Adidas Ultraboost', category: 'Tênis', brand: 'Adidas', style: 'Corrida', gender: 'Unisex', condition: 'Novo', image: shoe, price: 699 },
  { id: 14, name: 'Puma RS-X - Masculino', category: 'Tênis', brand: 'Puma', style: 'Utilitário', gender: 'Masculino', condition: 'Novo', image: shoe, price: 499 },
  { id: 15, name: 'Nike Court Vision', category: 'Tênis', brand: 'Nike', style: 'Casual', gender: 'Feminino', condition: 'Usado', image: shoe, price: 159 },
];

// 5.1 - Slides da home (layout do Figma: texto à esquerda + produto à direita)
export const homeSlides = [
  {
    src: '/figma/hero-sneaker.png',
    subtitle: 'Melhores ofertas personalizadas',
    title: 'Queima de estoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
  },
  {
    src: '/figma/hero-sneaker.png',
    subtitle: 'Lançamentos da semana',
    title: 'Novidades com até 30% OFF',
    description: 'Aproveite os modelos mais procurados da temporada com frete grátis para todo o Brasil.',
  },
  {
    src: '/figma/hero-sneaker.png',
    subtitle: 'Só no app',
    title: 'Cupom de 10% na 1ª compra',
    description: 'Baixe o aplicativo da Digital Store e ganhe desconto exclusivo no seu primeiro pedido.',
  },
  {
    src: '/figma/hero-sneaker.png',
    subtitle: 'Coleção 2026',
    title: 'Estilo para o dia a dia',
    description: 'Conforto e design em tênis pensados para acompanhar a sua rotina, do trabalho ao treino.',
  },
];

// 7.1 - Imagens da galeria do produto (cada uma com a cor de fundo do Figma)
export const productImages = [
  { src: '/figma/product-sneaker.png', background: '#e2e3ff' },
  { src: '/figma/product-sneaker.png', background: '#ffe8bc' },
  { src: '/figma/product-sneaker.png', background: '#ffc0bc' },
  { src: '/figma/product-sneaker.png', background: '#dec699' },
  { src: '/figma/product-sneaker.png', background: '#e8dfcf' },
];

// 5.2 - Coleções em destaque
export const collections = [
  { title: 'Novo drop Supreme', image: '/figma/collection-supreme.png' },
  { title: 'Coleção Adidas', image: '/figma/collection-adidas.png' },
  { title: 'Novo Beats Bass', image: '/figma/collection-beats.png' },
];

// Categorias com ícones (seção abaixo das coleções no Figma)
export const categories = [
  { name: 'Camisetas', icon: '/figma/icon-tshirt.png' },
  { name: 'Calças', icon: '/figma/icon-pants.png' },
  { name: 'Bonés', icon: '/figma/icon-cap.svg' },
  { name: 'Headphones', icon: '/figma/icon-headphones.png' },
  { name: 'Tênis', icon: '/figma/icon-sneakers.svg' },
];

// Formato dos cards do Figma: "$200"
export const formatPrice = (value) =>
  `$${Number.isInteger(value) ? value : value.toFixed(2).replace('.', ',')}`;

export const discountPercent = (price, priceDiscount) =>
  Math.round((1 - priceDiscount / price) * 100);

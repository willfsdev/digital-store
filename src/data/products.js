// Base de produtos fictícia usada nas páginas.
// As imagens estão na pasta /public (servidas a partir da raiz "/").

export const products = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    brand: 'K-Swiss',
    gender: 'Masculino',
    condition: 'Novo',
    image: '/product-thumb-1.jpeg',
    price: 200,
    priceDiscount: 149.9,
  },
  {
    id: 2,
    name: 'Nike Revolution 6 - Feminino',
    category: 'Tênis',
    brand: 'Nike',
    gender: 'Feminino',
    condition: 'Novo',
    image: '/product-thumb-2.jpeg',
    price: 349.9,
  },
  {
    id: 3,
    name: 'Adidas Runfalcon 3.0 - Unissex',
    category: 'Tênis',
    brand: 'Adidas',
    gender: 'Unissex',
    condition: 'Novo',
    image: '/product-thumb-3.jpeg',
    price: 299.9,
    priceDiscount: 219.9,
  },
  {
    id: 4,
    name: 'Puma Smash V2 - Masculino',
    category: 'Tênis',
    brand: 'Puma',
    gender: 'Masculino',
    condition: 'Usado',
    image: '/product-thumb-4.jpeg',
    price: 189.9,
  },
  {
    id: 5,
    name: 'Calvin Klein Classic - Feminino',
    category: 'Tênis',
    brand: 'Calvin Klein',
    gender: 'Feminino',
    condition: 'Novo',
    image: '/product-thumb-5.jpeg',
    price: 459.9,
    priceDiscount: 399.9,
  },
  {
    id: 6,
    name: 'K-Swiss Court Express - Unissex',
    category: 'Tênis',
    brand: 'K-Swiss',
    gender: 'Unissex',
    condition: 'Novo',
    image: '/product-thumb-1.jpeg',
    price: 249.9,
  },
  {
    id: 7,
    name: 'Nike Air Max SC - Masculino',
    category: 'Tênis',
    brand: 'Nike',
    gender: 'Masculino',
    condition: 'Novo',
    image: '/product-thumb-2.jpeg',
    price: 599.9,
    priceDiscount: 479.9,
  },
  {
    id: 8,
    name: 'Adidas Grand Court - Feminino',
    category: 'Tênis',
    brand: 'Adidas',
    gender: 'Feminino',
    condition: 'Usado',
    image: '/product-thumb-3.jpeg',
    price: 129.9,
  },
  {
    id: 9,
    name: 'Puma Carina 2.0 - Feminino',
    category: 'Tênis',
    brand: 'Puma',
    gender: 'Feminino',
    condition: 'Novo',
    image: '/product-thumb-4.jpeg',
    price: 279.9,
    priceDiscount: 239.9,
  },
  {
    id: 10,
    name: 'Calvin Klein Runner - Masculino',
    category: 'Tênis',
    brand: 'Calvin Klein',
    gender: 'Masculino',
    condition: 'Novo',
    image: '/product-thumb-5.jpeg',
    price: 389.9,
  },
];

export const homeSlides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

// Os arquivos no repositório base se chamam "produc-image-N.jpeg"
export const productImages = [
  { src: '/produc-image-1.jpeg' },
  { src: '/produc-image-2.jpeg' },
  { src: '/produc-image-3.jpeg' },
  { src: '/produc-image-4.jpeg' },
  { src: '/produc-image-5.jpeg' },
];

export const collections = [
  { src: '/collection-1.png', alt: 'Coleção 1' },
  { src: '/collection-2.png', alt: 'Coleção 2' },
  { src: '/collection-3.png', alt: 'Coleção 3' },
];

export const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

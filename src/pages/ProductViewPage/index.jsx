import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { products, productImages } from '../../data/products';
import './ProductViewPage.css';

// 7 - Página de visualização do produto (rota "/produto/:id")
const ProductViewPage = () => {
  const { id } = useParams();
  const [added, setAdded] = useState(false);

  const product = products.find((item) => String(item.id) === id) ?? products[0];
  const recommended = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container product-view">
        <nav className="product-view__breadcrumb" aria-label="Navegação">
          <Link to="/" className="product-view__breadcrumb-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/produtos">Produtos</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span>{product.brand}</span>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-view__main">
          {/* 7.1 - Galeria do produto (key reinicia a galeria ao trocar de produto) */}
          <Gallery
            key={product.id}
            className="product-view__gallery"
            images={productImages}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
          />

          {/* 7.3 - Buy Box com 7.2 - Opções do produto */}
          <div className="product-view__buybox">
            <BuyBox
              name={product.name}
              reference={`${product.style} | ${product.brand} | REF:38416711`}
              stars={4.7}
              rating={90}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              onBuy={() => setAdded(true)}
            >
              <div>
                <h3>Tamanho</h3>
                <ProductOptions
                  options={['39', '40', '41', '42', '43']}
                  shape="square"
                  radius="4px"
                  type="text"
                  defaultSelected="41"
                />
              </div>
              <div>
                <h3>Cor</h3>
                <ProductOptions
                  options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
                  shape="circle"
                  type="color"
                  defaultSelected="#FF6969"
                />
              </div>
            </BuyBox>

            {added && (
              <p className="product-view__added" role="status">
                Produto adicionado ao carrinho!
              </p>
            )}
          </div>
        </div>

        {/* 7.4 - Produtos recomendados */}
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
          className="product-view__related"
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;

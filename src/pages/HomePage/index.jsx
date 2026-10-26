import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { products, homeSlides, collections } from '../../data/products';
import './HomePage.css';

// 5 - Página inicial (rota "/")
const HomePage = () => {
  return (
    <Layout>
      {/* 5.1 - Slide de imagens */}
      <Gallery images={homeSlides} width="1440px" height="681px" />

      <div className="container home">
        {/* 5.2 - Coleções em destaque */}
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {collections.map((collection) => (
              <img key={collection.src} src={collection.src} alt={collection.alt} />
            ))}
          </div>
        </Section>

        {/* 5.3 - Produtos em alta */}
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;

import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { products, homeSlides, collections, categories } from '../../data/products';
import './HomePage.css';

// Conteúdo de cada slide do banner, no layout do Figma
const HeroSlide = ({ slide }) => (
  <div className="hero-slide">
    <div className="container hero-slide__text">
      <span className="hero-slide__subtitle">{slide.subtitle}</span>
      <h1 className="hero-slide__title">{slide.title}</h1>
      <p className="hero-slide__description">{slide.description}</p>
      <Link to="/produtos" className="btn btn--primary hero-slide__button">
        Ver Ofertas
      </Link>
    </div>
    <img className="hero-slide__ornament" src="/figma/ornament-dots.png" alt="" />
    <img className="hero-slide__image" src={slide.src} alt="Tênis em destaque" />
  </div>
);

// 5 - Página inicial (rota "/")
const HomePage = () => {
  const heroImages = homeSlides.map((slide) => ({
    src: slide.src,
    content: <HeroSlide slide={slide} />,
  }));

  return (
    <Layout>
      {/* 5.1 - Slide de imagens */}
      <Gallery className="home-hero" images={heroImages} width="1440px" height="681px" />

      <div className="container home">
        {/* 5.2 - Coleções em destaque */}
        <Section title="Coleções em destaque" titleAlign="left" className="home__collections-section">
          <div className="home__collections">
            {collections.map((collection) => (
              <article key={collection.title} className="collection-card">
                <img className="collection-card__image" src={collection.image} alt="" />
                <span className="badge">30% OFF</span>
                <h3 className="collection-card__title">{collection.title}</h3>
                <Link to="/produtos" className="btn btn--secondary collection-card__button">
                  Comprar
                </Link>
              </article>
            ))}
          </div>
        </Section>

        {/* Categorias em destaque (ícones) */}
        <Section title="Coleções em destaque" titleAlign="center" className="home__categories-section">
          <ul className="home__categories">
            {categories.map((category, index) => (
              <li key={category.name}>
                <Link
                  to="/produtos"
                  className={`category-item ${index === 0 ? 'category-item--active' : ''}`}
                >
                  <span className="category-item__circle">
                    <span
                      className="category-item__icon"
                      style={{ '--icon': `url(${category.icon})` }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="category-item__name">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* 5.3 - Produtos em alta */}
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}
          className="home__products-section"
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>

      {/* Oferta especial */}
      <section className="special-offer">
        <div className="container special-offer__inner">
          <div className="special-offer__visual">
            <img className="special-offer__ellipse" src="/figma/offer-ellipse.png" alt="" />
            <img className="special-offer__image" src="/figma/air-jordan.png" alt="Air Jordan" />
          </div>
          <div className="special-offer__text">
            <span className="special-offer__label">Oferta especial</span>
            <h2 className="special-offer__title">Air Jordan edição de colecionador</h2>
            <p className="special-offer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
            </p>
            <Link to="/produtos" className="btn btn--primary special-offer__button">
              Ver Oferta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

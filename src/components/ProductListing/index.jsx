import ProductCard from '../ProductCard';
import './ProductListing.css';

// 4.3 - Listagem: recebe "products" e renderiza um <ProductCard /> para cada item
const ProductListing = ({ products = [], columns = 4 }) => {
  if (products.length === 0) {
    return <p className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? index}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;

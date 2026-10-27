import { Link } from 'react-router-dom';
import { formatPrice, discountPercent } from '../../data/products';
import './ProductCard.css';

// 4.2 - Cartão de produto: imagem, nome, preço e preço com desconto
const ProductCard = ({ id, image, name, category, price, priceDiscount }) => {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <Link to={id ? `/produto/${id}` : '#'} className="product-card">
      <div className="product-card__image">
        {hasDiscount && (
          <span className="badge product-card__badge">
            {discountPercent(price, priceDiscount)}% OFF
          </span>
        )}
        <img src={image} alt={name} />
      </div>

      {category && <span className="product-card__category">{category}</span>}
      <h3 className="product-card__name">{name}</h3>

      <div className="product-card__prices">
        <span className={hasDiscount ? 'product-card__price--old' : 'product-card__price'}>
          {formatPrice(price)}
        </span>
        {hasDiscount && <span className="product-card__price">{formatPrice(priceDiscount)}</span>}
      </div>
    </Link>
  );
};

export default ProductCard;

import starIcon from '../../assets/star-icon.svg';
import { formatPrice } from '../../data/products';
import './BuyBox.css';

// 7.3 - Buy Box: informações do produto + children (ex.: <ProductOptions />)
const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}) => {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      {reference && <span className="buy-box__reference">{reference}</span>}

      <div className="buy-box__rating">
        <span className="buy-box__stars">
          {stars}
          <img src={starIcon} alt="" />
        </span>
        <span className="buy-box__reviews">({rating} avaliações)</span>
      </div>

      <div className="buy-box__prices">
        {hasDiscount ? (
          <>
            <span className="buy-box__price">{formatPrice(priceDiscount)}</span>
            <span className="buy-box__price--old">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buy-box__price">{formatPrice(price)}</span>
        )}
      </div>

      <div className="buy-box__description">
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>

      {children && <div className="buy-box__children">{children}</div>}

      <button type="button" className="buy-box__button" onClick={onBuy}>
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;

import starIcon from '../../assets/star-icon.svg';
import './BuyBox.css';

const Star = ({ filled }) => (
  <svg width="15" height="14" viewBox="0 0 24 23" aria-hidden="true">
    <path
      d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9z"
      fill={filled ? '#F6AA1C' : 'none'}
      stroke="#F6AA1C"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

// "219,90" -> { inteiro: "219", centavos: ",90" }
const splitPrice = (value) => {
  const [integer, cents] = value.toFixed(2).split('.');
  return { integer, cents: `,${cents}` };
};

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
  const current = splitPrice(hasDiscount ? priceDiscount : price);

  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      {reference && <span className="buy-box__reference">{reference}</span>}

      <div className="buy-box__rating">
        <span className="buy-box__star-list" aria-label={`Nota ${stars} de 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} filled={n <= Math.floor(stars)} />
          ))}
        </span>
        <span className="buy-box__stars">
          {stars}
          <img src={starIcon} alt="" />
        </span>
        <span className="buy-box__reviews">({rating} avaliações )</span>
      </div>

      <div className="buy-box__prices">
        <span className="buy-box__price">
          <span className="buy-box__currency">R$</span>
          <span className="buy-box__integer">{current.integer}</span>
          <span className="buy-box__cents">{current.cents}</span>
        </span>
        {hasDiscount && (
          <span className="buy-box__price--old">{price.toFixed(2).replace('.', ',')}</span>
        )}
      </div>

      <div className="buy-box__description">
        <h3 className="buy-box__label">Descrição do produto</h3>
        <p>{description}</p>
      </div>

      {children && <div className="buy-box__children">{children}</div>}

      <button type="button" className="btn btn--warning buy-box__button" onClick={onBuy}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;

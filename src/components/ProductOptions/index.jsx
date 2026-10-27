import { useState } from 'react';
import './ProductOptions.css';

// 7.2 - Opções do produto (tamanhos/cores) em formato square ou circle
const ProductOptions = ({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  defaultSelected = null,
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const isColor = type === 'color';

  return (
    <div className={`product-options product-options--${shape}`}>
      {options.map((option) => {
        const isSelected = selected === option;
        const style = {
          borderRadius: shape === 'square' ? radius : '50%',
          ...(isColor && { backgroundColor: option }),
        };

        return (
          <button
            key={option}
            type="button"
            className={[
              'product-options__item',
              `product-options__item--${shape}`,
              isColor ? 'product-options__item--color' : 'product-options__item--text',
              isSelected ? 'product-options__item--selected' : '',
            ].join(' ')}
            style={style}
            onClick={() => setSelected(option)}
            aria-pressed={isSelected}
            aria-label={isColor ? `Cor ${option}` : `Tamanho ${option}`}
          >
            {!isColor && option}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;

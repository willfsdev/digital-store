import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './Gallery.css';

// 4.4 - Galeria de imagens (slide com setas e miniaturas opcionais)
const Gallery = ({
  images = [],
  className = '',
  width = '100%',
  height = 'auto',
  radius = '0px',
  showThumbs = false,
}) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const isFirst = current === 0;
  const isLast = current === images.length - 1;
  const toCss = (value) => (typeof value === 'number' ? `${value}px` : value);
  // proporção usada em telas menores para não distorcer o slide
  const ratio =
    parseFloat(width) && parseFloat(height)
      ? `${parseFloat(width)} / ${parseFloat(height)}`
      : 'auto';

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: toCss(width) }}>
      <div
        className="gallery__slide"
        style={{
          '--gallery-height': toCss(height),
          '--gallery-ratio': ratio,
          borderRadius: radius,
        }}
      >
        <div
          className="gallery__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={`Imagem ${index + 1}`}
              className="gallery__image"
              aria-hidden={index !== current}
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrent((prev) => prev - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrent((prev) => prev + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>

        {!showThumbs && (
          <div className="gallery__dots">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`gallery__dot ${index === current ? 'gallery__dot--active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`gallery__thumb ${index === current ? 'gallery__thumb--active' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;

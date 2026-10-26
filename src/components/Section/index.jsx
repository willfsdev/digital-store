import { Link } from 'react-router-dom';
import './Section.css';

// 4.1 - Seção com título (left | center), link opcional e children
const Section = ({ title, titleAlign = 'left', link, children, className = '' }) => {
  const align = titleAlign === 'center' ? 'center' : 'left';
  const isInternal = link?.href?.startsWith('/');

  return (
    <section className={`section ${className}`}>
      <div className={`section__header section__header--${align}`}>
        {title && <h2 className="section__title">{title}</h2>}

        {link &&
          (isInternal ? (
            <Link to={link.href} className="section__link">
              {link.text} →
            </Link>
          ) : (
            <a href={link.href} className="section__link">
              {link.text} →
            </a>
          ))}
      </div>

      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;

import { Link } from 'react-router-dom';
import './Section.css';

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 4.1 - Seção com título (left | center), link opcional e children
const Section = ({ title, titleAlign = 'left', link, children, className = '' }) => {
  const align = titleAlign === 'center' ? 'center' : 'left';
  const isInternal = link?.href?.startsWith('/');
  const linkContent = (
    <>
      {link?.text} <ArrowRight />
    </>
  );

  return (
    <section className={`section ${className}`}>
      <div className={`section__header section__header--${align}`}>
        {title && <h2 className="section__title">{title}</h2>}

        {link &&
          (isInternal ? (
            <Link to={link.href} className="section__link">
              {linkContent}
            </Link>
          ) : (
            <a href={link.href} className="section__link">
              {linkContent}
            </a>
          ))}
      </div>

      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;

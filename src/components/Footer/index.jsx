import Logo from '../Logo';
import Information from '../Information';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const socials = [
  { name: 'Facebook', icon: facebookIcon, href: 'https://facebook.com' },
  { name: 'Instagram', icon: instagramIcon, href: 'https://instagram.com' },
  { name: 'Twitter', icon: twitterIcon, href: 'https://twitter.com' },
];

const infoColumns = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe conosco', link: '/careers' },
      { text: 'Meus Pedidos', link: '/meus-pedidos' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '/produtos' },
      { text: 'Calças', link: '/produtos' },
      { text: 'Bonés', link: '/produtos' },
      { text: 'Headphones', link: '/produtos' },
      { text: 'Tênis', link: '/produtos' },
    ],
  },
  {
    title: 'Contato',
    informations: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '#' },
      { text: '(85) 3051-3411', link: '#' },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Logo variant="white" />
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
            <div className="footer__socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          {infoColumns.map((column) => (
            <Information
              key={column.title}
              title={column.title}
              informations={column.informations}
              compact={column.title === 'Contato'}
            />
          ))}
        </div>

        <hr className="footer__divider" />
        <p className="footer__copyright">© {year} Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;

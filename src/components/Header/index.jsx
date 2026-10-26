import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo';
import cartIcon from '../../assets/mini-cart.svg';
import './Header.css';

const navLinks = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/produtos' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/meus-pedidos' },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('filter') ?? '');

  // 3.1.2 - Busca: clique na lupa ou Enter -> /products?filter=...
  const handleSubmit = (event) => {
    event.preventDefault();
    const term = search.trim();
    navigate(term ? `/products?filter=${encodeURIComponent(term)}` : '/products');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Logo />

          <form className="header__search" onSubmit={handleSubmit} role="search">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Pesquisar produto"
            />
            <button type="submit" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {/* 3.1.3 - Área de redirecionamento */}
          <div className="header__actions">
            <Link to="/cadastro" className="header__signup">
              Cadastre-se
            </Link>
            <Link to="/login" className="header__login">
              Entrar
            </Link>

            {/* 3.1.4 - Carrinho (somente ícone, sem ação) */}
            <span className="header__cart" aria-label="Carrinho de compras">
              <img src={cartIcon} alt="" />
              <span className="header__cart-badge">2</span>
            </span>
          </div>
        </div>

        {/* 3.1.5 - Navegação principal */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                // "/products" (destino da busca) também marca o link Produtos
                isActive || (link.to === '/produtos' && pathname === '/products')
                  ? 'header__link header__link--active'
                  : 'header__link'
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo';
import './Header.css';

const navLinks = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/produtos' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/meus-pedidos' },
];

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11.2" cy="11.2" r="8" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16.8 17.2 20 20.4" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2.75 3.25 4.83 3.61l.96 11.48a1.8 1.8 0 0 0 1.8 1.65h10.91a1.8 1.8 0 0 0 1.78-1.54l.95-6.56a1.34 1.34 0 0 0-1.33-1.53H5.17"
      stroke="#C92071"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.13 10.8h2.77" stroke="#C92071" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7.15" cy="20.2" r="0.75" stroke="#C92071" strokeWidth="1.5" />
    <circle cx="18.4" cy="20.2" r="0.75" stroke="#C92071" strokeWidth="1.5" />
  </svg>
);

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
              <SearchIcon />
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
          </div>

          {/* 3.1.4 - Carrinho (somente ícone, sem ação) */}
          <span className="header__cart" aria-label="Carrinho de compras">
            <CartIcon />
            <span className="header__cart-badge">2</span>
          </span>
        </div>

        {/* 3.1.5 - Navegação principal */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                // "/products" (destino da busca) e "/produto/:id" também marcam "Produtos"
                isActive ||
                (link.to === '/produtos' &&
                  (pathname === '/products' || pathname.startsWith('/produto/')))
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

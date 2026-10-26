import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import ComingSoonPage from './pages/ComingSoonPage';

// Volta ao topo sempre que a rota muda
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        {/* o campo de busca redireciona para /products?filter=... (seção 3.1.2) */}
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
        <Route path="/categorias" element={<ComingSoonPage title="Categorias" />} />
        <Route path="/meus-pedidos" element={<ComingSoonPage title="Meus Pedidos" />} />
        <Route path="/login" element={<ComingSoonPage title="Entrar" />} />
        <Route path="/cadastro" element={<ComingSoonPage title="Cadastre-se" />} />
        <Route path="*" element={<ComingSoonPage title="Página não encontrada" />} />
      </Routes>
    </>
  );
};

export default App;

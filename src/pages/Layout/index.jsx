import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 3 - Layout: Header + conteúdo da página (children) + Footer
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

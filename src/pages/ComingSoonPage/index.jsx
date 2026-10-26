import { Link } from 'react-router-dom';
import Layout from '../Layout';

// Página simples para as rotas que não fazem parte dos requisitos mínimos
const ComingSoonPage = ({ title = 'Página em construção' }) => {
  return (
    <Layout>
      <div
        className="container"
        style={{ padding: '120px 0', textAlign: 'center', display: 'grid', gap: 16 }}
      >
        <h1 style={{ fontSize: 32, color: 'var(--dark-gray)' }}>{title}</h1>
        <p>Esta página ainda está em desenvolvimento.</p>
        <Link to="/" style={{ color: 'var(--primary)', fontWeight: 700 }}>
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
};

export default ComingSoonPage;

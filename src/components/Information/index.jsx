import { Link } from 'react-router-dom';
import './Information.css';

// 3.2.1 - Componente de informações do rodapé
const Information = ({ title, informations = [], compact = false }) => {
  return (
    <div className={`information ${compact ? 'information--compact' : ''}`}>
      <h3 className="information__title">{title}</h3>
      <ul className="information__list">
        {informations.map((item) => (
          <li key={item.text}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;

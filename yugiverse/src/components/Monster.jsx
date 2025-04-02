// Monster.jsx
import { useNavigate } from 'react-router-dom';
import './css/Monster.css';

function Monster({ id, name, image, monsterData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/monster/${id}`, { state: { monster: monsterData } });
  };

  return (
    <section className="monster" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </section>
  );
}

export default Monster;

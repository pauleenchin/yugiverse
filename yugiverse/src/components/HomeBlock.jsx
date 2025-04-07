import { useNavigate } from 'react-router-dom';
import './css/HomeBlock.css';

function HomeBlock({ image, title, alt, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link, {
      state: { title }
    });
  };

  return (
    <div className="home-block" onClick={handleClick}>
      <img src={image} alt={alt} />
      <h4 className="block-title">{title}</h4>
    </div>
  );
}

export default HomeBlock;
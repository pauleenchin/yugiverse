import { useNavigate } from 'react-router-dom';
import './css/TopicBlock.css';

function TopicBlock({ title, content, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/forums/post/${encodeURIComponent(title)}`, {
      state: { title, content }
    });
  };

  return (
    <div className="topic-block" onClick={handleClick}>
      <h4 className="discussion-title">{title}</h4>
      <p className="discussion-content">{content}</p>
    </div>
  );
}

export default TopicBlock;
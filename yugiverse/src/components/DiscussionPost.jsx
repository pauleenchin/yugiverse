import { useNavigate } from 'react-router-dom';
import './css/DiscussionPost.css';

function DiscussionPost({ id, title, content, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/forums/post/${encodeURIComponent(title)}`, {
      state: { id, title, content, image }
    });
  };

  return (
    <div className="discussion-post" onClick={handleClick}>
      <h3 className="discussion-title">{title}</h3>
      <p className="discussion-content">{content}</p>
    </div>
  );
}

export default DiscussionPost;

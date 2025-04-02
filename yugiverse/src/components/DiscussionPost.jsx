// DiscussionPost.jsx
import { useNavigate } from 'react-router-dom';
import '../pages/css/Forums.css';

function DiscussionPost({ title, content }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/forums/post/${encodeURIComponent(title)}`, {
      state: { title, content }
    });
  };

  return (
    <div className="discussion-post clickable-box" onClick={handleClick}>
      <h3 className="discussion-title">{title}</h3>
      <p className="discussion-content">{content}</p>
    </div>
  );
}

export default DiscussionPost;

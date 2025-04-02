// DiscussionPostPage.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import './css/Forums.css';

function DiscussionPostPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>Post not found.</p>;

  return (
    <>
      <div id="back-header">
        <a id="back-btn" onClick={() => navigate(-1)}>&larr; Back to Forums</a>
      </div>
      <div id="page" className="columns">
        <div className="discussion-post five">
          <h3 id="forum-title">{state.title}</h3>
          <p id="forum-content">{state.content}</p>
        </div>
      </div>
    </>
  );
}

export default DiscussionPostPage;

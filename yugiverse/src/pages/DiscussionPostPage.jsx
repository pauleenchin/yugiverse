import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './css/Forums.css';

const baseUrl = "https://yugiverse-server.onrender.com";

function DiscussionPostPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state?.title || '');
  const [content, setContent] = useState(state?.content || '');
  const [editSuccess, setEditSuccess] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!state) return <p>Post not found.</p>;

  const handleEdit = async () => {
    if (title.trim().length < 3 || content.trim().length < 10) {
      return setErrorMessage('Title must be at least 3 characters and content at least 10 characters.');
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${baseUrl}/api/forum-posts/${state.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      });

      if (!res.ok) throw new Error(await res.text());
        await res.json();
        setEditSuccess('Post updated successfully!');
        setErrorMessage('');
        setIsEditing(false);

        setEditSuccess('Post updated successfully!');
        setErrorMessage('');
        setIsEditing(false);
        setIsSubmitting(false);
        setTimeout(() => setEditSuccess(''), 3000);
    } catch (err) {
        setErrorMessage(err.message);
        setEditSuccess('');
        setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${baseUrl}/api/forum-posts/${state.id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error(await res.text());
      setDeleteSuccess('Post deleted successfully!');
      setTimeout(() => navigate('/forums'), 2000);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <div id="back-header">
        <button id="back-btn" onClick={() => navigate(-1)}>&larr; Back to Forums</button>
      </div>

      <div id="page" className="columns">
        <div className="discussion-post five">
          {editSuccess && <p className="success-msg">{editSuccess}</p>}
          {deleteSuccess && <p className="success-msg">{deleteSuccess}</p>}
          {errorMessage && <p className="error-msg">{errorMessage}</p>}

          {!isEditing ? (
            <>
              <h3>{title}</h3>
              <p>{content}</p>
              {state.image && (
                <img
                  src={`${baseUrl}${state.image}`}
                  alt="Post attachment"
                  className="discussion-image"
                  style={{ marginTop: '10px', maxWidth: '100%' }}
                />
              )}
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          ) : (
            <>
              <h3>Edit Discussion</h3>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit title"
              />
              <textarea
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Edit content"
              ></textarea>

              {state.image && (
                <img
                  src={`${baseUrl}${state.image}`}
                  alt="Post attachment"
                  className="discussion-image"
                  style={{ marginTop: '10px', maxWidth: '100%' }}
                />
              )}

              <button onClick={handleEdit} disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleDelete}
                style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
              >
                Delete Post
              </button>
              <button
                onClick={() => setIsEditing(false)}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DiscussionPostPage;

import React, { useState } from 'react';
import '../pages/css/Forums.css';

function ForumsPostForm({ onPostAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      return setErrorMessage('Title must be at least 3 characters long.');
    }
    if (content.trim().length < 10) {
      return setErrorMessage('Content must be at least 10 characters long.');
    }

    try {
      const res = await fetch('https://yugiverse-server.onrender.com/api/forum-posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
      }

      const newPost = await res.json();
      onPostAdded(newPost);
      setSuccessMessage('Post added successfully!');
      setErrorMessage('');
      setTitle('');
      setContent('');
    } catch (err) {
      setSuccessMessage('');
      setErrorMessage(err.message);
    }
  };

  return (
    <form id="forum-form" onSubmit={handleSubmit}>
      <h3>Start a New Discussion</h3>
      {successMessage && <p className="success-msg">{successMessage}</p>}
      {errorMessage && <p className="error-msg">{errorMessage}</p>}

      <div id="post-title-input">
        <input
          id="post-title"
          placeholder="Subject"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      

      
      <textarea
        id="post-content"
        placeholder="Type here"
        rows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <button type="submit">Post</button>
    </form>
  );
}

export default ForumsPostForm;

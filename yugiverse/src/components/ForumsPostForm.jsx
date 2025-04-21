import React, { useState } from 'react';
import '../pages/css/Forums.css';

function ForumsPostForm({ onPostAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
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

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch('https://yugiverse-server.onrender.com/api/forum-posts', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
      }

      const newPost = await res.json();
      onPostAdded(newPost);
      setSuccessMessage('Posted successfully!');
      setErrorMessage('');
      setTitle('');
      setContent('');
      setImage(null);

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
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

      <div className="form-group">
        <label htmlFor="imageUpload">Upload Image:</label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button type="submit">Post</button>
    </form>
  );
}

export default ForumsPostForm;

import React, { useEffect, useState } from 'react';
import DiscussionPost from '../components/DiscussionPost';
import TopicBlock from '../components/TopicBlock';
import SectionTitle from '../components/SectionTitle';
import ForumsPostForm from '../components/ForumsPostForm';
import './css/Forums.css';

function Forums() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/forum-posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error loading posts:', err));
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <SectionTitle title="Forums" />
      <div id="page">
        <main id="content" className="columns">
          <section id="forums" className="five">
            <section id="forum-posts">
              {posts.map((post) => (
                <DiscussionPost
                  key={post.id}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </section>
          </section>
          <aside id="trending-topics-section" className="one">
            <ForumsPostForm onPostAdded={handleNewPost} />
            <h3 id="topic-title">Trending Topics</h3>
            <div id="topic-section">
                <TopicBlock
                title="New Banlist Announced – What Got Hit the Hardest?"
                content="The latest Yu-Gi-Oh! banlist just dropped. Did your deck survive, or do you need a full rebuild?"
                link="#"
                />
                <TopicBlock
                title="Best Tech Cards for the Current Meta"
                content="Hand Traps, Board Breakers, Floodgates — which tech cards dominate right now?"
                link="#"
                />
                <TopicBlock
                title="Most Expensive Cards of 2025 – Are They Worth It?"
                content="Some cards are skyrocketing in value. Are they worth the hype?"
                link="#"
                />
            </div>
         
        </aside>
        </main>
      </div>
    </>
  );
}

export default Forums;

// src/pages/DashboardPage/DashboardPage.js
import React, { useState } from 'react';
import PostForm from '../../components/PostForm';
import PostItem from '../../components/PostItem';
import './styles.css';

export default function DashboardPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ caption: '', imageUrl: '', user: 'userLogin' });
    const [showPostForm, setShowPostForm] = useState(false);

    const handleExitPostForm = () => {
        setShowPostForm(false); // Hide the post form
      };
  
    const handlePostChange = (event) => {
      setNewPost({ ...newPost, [event.target.name]: event.target.value });
    };
  
    const handleCreatePost = () => {
      setShowPostForm(true);
    };
  
    const handleSubmitPost = (event) => {
      event.preventDefault();
      setPosts([...posts, { ...newPost, timestamp: new Date().toLocaleString() }]);
      setNewPost({ caption: '', imageUrl: '', user: 'userLogin' });
      setShowPostForm(false);
    };

    const deletePost = (postToDelete) => {
        setPosts(posts.filter(post => post !== postToDelete));
      };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className='create-new-post' onClick={handleCreatePost}>Create a New Post </button>
      
      {showPostForm && (
        <PostForm 
          onSubmit={handleSubmitPost} 
          onChange={handlePostChange} 
          newPost={newPost}
          setNewPost={setNewPost}
          onExit={handleExitPostForm}
        />
      )}

      <div className="posts">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

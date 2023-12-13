import React from 'react';
import './styles.css';

const PostItem = ({ post, onDelete }) => {
  const imageUrl = post.imageFile ? URL.createObjectURL(post.imageFile) : '';
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const difference = Math.round((now - postDate) / 60000); // difference in minutes

    if (difference < 60) {
      return `${difference}m ago`;
    }
    return timestamp;
  };

  return (
    <div className="post">
      <div className="delete-icon" onClick={() => onDelete(post)}>&times;</div> 
      {post.imageFile && <img src={imageUrl} alt="Post" />}
      <div className="post-title">
        <span className="post-user"><b>{post.user}</b></span>
        <span className="post-caption">{post.caption}</span>
      </div>
      <div className="post-footer">
        <p className="timestamp">{formatTimeAgo(post.timestamp)}</p> {/* Formatted timestamp */}
        
      </div>
    </div>
  );
};

export default PostItem;

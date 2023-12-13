import React, { useState } from 'react';
import './styles.css';

const PostForm = ({ onSubmit, newPost, setNewPost, onExit }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const [showPostForm, setShowPostForm] = useState(false);

  const deletePost = (postToDelete) => {
    setPosts(posts.filter(post => post !== postToDelete));
  };

  const handleExitPostForm = () => {
    setShowPostForm(false); // Hide the post form
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImagePreview(URL.createObjectURL(img));
      setNewPost({ ...newPost, imageFile: img }); // Assuming you want to store the image name
    }
  };

  const handleFileButtonClick = () => {
    document.getElementById('imageUpload').click();
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setNewPost({ ...newPost, imageUrl: '' });
  };

  return (
    <form className="post-form" onSubmit={onSubmit}>
      <div className="form-group">
        <div className="close-icon" onClick={onExit}>&times;</div>
        <h2>Novo post</h2>
       
      </div>
      <div className="form-group">
        <input 
          type="text" 
          id="caption" 
          name="caption" 
          placeholder="Legenda" 
          onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })} 
          value={newPost.caption} 
          required 
        />
      </div>
        
        <input 
          type="file" 
          id="imageUpload" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: 'none' }}  // Hide the actual file input
        />
        <button type="button" onClick={handleFileButtonClick}><i className="fas fa-image"></i> Upload Image</button>
        {imagePreview && (
          <div className="remove-image-div">
            <img src={imagePreview} alt="Preview" className="image-preview" />
            <button type="button2" onClick={handleRemoveImage}>Remove Image</button>
          </div>
        )}
      <button type="submit">Publicar</button>
    </form>
  );
};

export default PostForm;

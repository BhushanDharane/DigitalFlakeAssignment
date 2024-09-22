import React, { useState } from 'react';

const Subcategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageUpload = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend API
    console.log('Category Name:', categoryName);
    console.log('Category Image:', categoryImage);
  };
  return (
     <div className="app">
     <div className="sidebar">
      <div className="logo">
        <span>D</span>
        digitalflake
      </div>
      <ul>
        <li>
          <a href="home">
            <i className="fas fa-home"></i>
            Home
          </a>
        </li>
        <li>
          <a href="category">
            <i className="fas fa-th-list"></i>
            Category
          </a>
        </li>
        <li>
          <a href="subcategory">
            <i className="fas fa-list-ul"></i>
            Subcategory
          </a>
        </li>
        <li>
          <a href="product">
            <i className="fas fa-box"></i>
            Products
          </a>
        </li>
      </ul>
    </div>
      <div className="main-content">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category-name">Category Name:</label>
            <input
              type="text"
              id="category-name"
              value={categoryName}
              onChange={handleCategoryNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category-image">Upload Image:</label>
            <input
              type="file"
              id="category-image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {categoryImage && (
              <div className="preview">
                <img src={URL.createObjectURL(categoryImage)} alt="Category Image Preview" />
              </div>
            )}
          </div>
          <button type="submit"style={{ backgroundColor: '#694293' }}>Save</button>
          <button type="button" onClick={() => { /* TODO: Handle cancel */ }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
   
  )
}

export default Subcategory
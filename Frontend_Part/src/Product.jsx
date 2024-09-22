import { useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('Active');

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Category Name:', categoryName);
    console.log('Image:', image);
    console.log('Status:', status);
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
          <a href="Product">
            <i className="fas fa-box"></i>
            Products
          </a>
        </li>
      </ul>
    </div>

    <div className="edit-category-container">
      <h2>Edit Category</h2>
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
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <p>Selected Image: {image.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <Link to = "/category"><button type="submit"style={{ backgroundColor: '#694293' }}>Save</button></Link>
        <button type="button" onClick={() => {/* Handle Cancel logic */}}>Cancel</button>
      </form>
    </div>
    </div>
  )
}

export default Product
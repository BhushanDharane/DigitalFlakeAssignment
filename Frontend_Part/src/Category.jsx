import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Category = () => {
    const [categories, setCategories] = useState([]);
    
      const [newCategoryName, setNewCategoryName] = useState('');
      const [newCategoryImage, setNewCategoryImage] = useState(null);
    
      const handleAddCategory = () => {
        if (newCategoryName && newCategoryImage) {
          const newCategory = {
            id: Math.floor(Math.random() * 1000),
            categoryName: newCategoryName,
            image: newCategoryImage,
            status: 'Active',
          };
          setCategories([...categories, newCategory]);
          setNewCategoryName('');
          setNewCategoryImage(null);
        }
      };
    
      const handleDeleteCategory = (id) => {
        setCategories(categories.filter((category) => category.id !== id));
      };
    
      const handleStatusChange = (id, status) => {
        setCategories(
          categories.map((category) =>
            category.id === id ? { ...category, status } : category
          )
        );
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
      <div className="content">
        <h1>Category</h1>
        <div className="add-category">
          <input
            type="text"
            placeholder="Category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewCategoryImage(e.target.files[0])}
          />
          <button style={{ backgroundColor: '#694293' }} onClick={handleAddCategory}>Add New</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category name</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.categoryName}</td>
                <td>
                  <img src={category.image} alt={category.categoryName} />
                </td>
                <td>
                  <select
                    value={category.status}
                    onChange={(e) =>
                      handleStatusChange(category.id, e.target.value)
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button style={{ backgroundColor: '#694293' }} onClick={() => handleDeleteCategory(category.id)}>
                delete
                  </button>
                  <Link to="/product">  <button >
                    Edit
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category
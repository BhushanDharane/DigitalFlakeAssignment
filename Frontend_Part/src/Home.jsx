import React, { useState } from 'react';


const Home = () => {
  return (
    <div className="app">
    <div className="sidebar">
      <div className="logo">
        <span>D</span>
        digitalflake
      </div>
      <ul>
        <li>
          <a href="#">
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
    <div className="content">
      <div className="header">
        <div className="user">
          <i className="fas fa-user"></i>
        </div>
      </div>
      <div className="main">
        <div className="logo ">
          <span>D</span>
          digitalflake
        </div>
        <p>Welcome to Digitalflake admin</p>
      </div>
    </div>
  </div>
  )
}

export default Home
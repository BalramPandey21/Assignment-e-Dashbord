// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">View Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;

// src/components/Header.jsx

import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <>
      {/* Верхняя полоса */}
      <div className="top-bar">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        {/* Здесь можно добавить переключатель языка, если нужно */}
      </div>

      {/* Основной Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <FiSearch className="search-icon" />
            </div>
            <div className="header-icons">
              <FiHeart />
              <FiShoppingCart />
              <FiUser />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
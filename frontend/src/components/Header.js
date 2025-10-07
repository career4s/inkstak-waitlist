import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">
          <i className="fas fa-palette"></i>
          InkStak
        </a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Printables</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
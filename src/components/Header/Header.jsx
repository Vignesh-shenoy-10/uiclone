import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Hiring Process</li>
          <li className="nav-item">Events</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

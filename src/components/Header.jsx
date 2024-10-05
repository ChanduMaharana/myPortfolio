import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="menu">
          <ul className="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons'; // Importing Boxicons if you're using them
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><i className='bx bxl-facebook-circle'></i></a>
        <a href="https://www.linkedin.com/in/chandu-maharana-0b49b72a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <i className='bx bxl-linkedin-square'></i>
        </a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="https://www.instagram.com/chandu_77?igsh=eXdlNW4wNG52Nnd1">
          <i className='bx bxl-instagram'></i>
        </a>
      </div>

      <ul className="li">
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>

      <p className="copyright">© 2024 chandu | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

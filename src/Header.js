import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src="your-logo-path.jpg" alt="Logo" className="logo" />
      <nav className="navbar">
        <ul className="navitems">
          <li className="navitem">
            <Link to="home">Home</Link> {/* Make sure paths start with / */}
          </li>
          <li className="navitem">
            <Link to="contact">Contact</Link>{' '}
            {/* Make sure paths start with / */}
          </li>
          <li className="navitem">
            <Link to="contact">Contact</Link>{' '}
            {/* Make sure paths start with / */}
          </li>
          <li className="navitem">
            <Link to="Home">Home</Link> {/* Make sure paths start with / */}
          </li>
          <li> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

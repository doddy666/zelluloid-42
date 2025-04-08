import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-section">

        <Link to="/">
          <img
          src="../Images/Z42_logo.jpg" 
            alt="Pleasure Dome Logo"
            className="header-logo"
          />
        </Link>
        <h1>Monthly 35/16mm double feature at Filmrauschpalast Berlin.</h1>   
      </div>
      <nav className="navbar">
      <ul className="nav-links">
  <li>
    <Link to="/">Home</Link>
  </li>
  <li className="dropdown">
  <a className="dropbtn" href="#">Tickets</a>
  <div className="dropdown-content">
    <a
      href="https://linktr.ee/zelluloid42"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pleasure Dome
    </a>
    <a
      href="https://zelluloid42.bigcartel.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Weekender Vinegar Syndrome
    </a>
  </div>
</li>

  <li>
    <Link to="/manifesto">Manifesto</Link>
  </li>

  <li>
    <Link to="/archives">Past Events</Link>
  </li>
</ul>

      </nav>
      <HamburgerMenu />
    </header>
  );
};

export default Header;


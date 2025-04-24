// ✅ HamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="hamburger-menu">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      {isOpen && (
        <div className="fullscreen-menu">
          <button className="close-button" onClick={closeMenu}>✕</button>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/festival" onClick={closeMenu}>Weekender</Link></li>
            <li>
              <button className="dropdown-toggle" onClick={toggleDropdown}>Tickets</button>
              {showDropdown && (
                <ul className="mobile-dropdown">
                  <li>
                    <a href="https://linktr.ee/zelluloid42" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Pleasure Dome</a>
                  </li>
                  <li>
                    <a href="https://zelluloid42.bigcartel.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Weekender</a>
                  </li>
                </ul>
              )}
            </li>
            <li><Link to="/about" onClick={closeMenu}>About us</Link></li>
            <li><Link to="/archives" onClick={closeMenu}>Past Events</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;

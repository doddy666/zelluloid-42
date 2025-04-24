import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

return (
  <div className="hamburger-menu">
    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </div>

    {isOpen && (
      <div className="fullscreen-menu">
        <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/festival" onClick={() => setIsOpen(false)}>Weekender</Link></li>
          <li>
            <button className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>Tickets</button>
            {showDropdown && (
              <ul className="mobile-dropdown">
                <li>
                  <a
                    href="https://linktr.ee/zelluloid42"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Pleasure Dome
                  </a>
                </li>
                <li>
                  <a
                    href="https://zelluloid42.bigcartel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Weekender
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li><Link to="/archives" onClick={() => setIsOpen(false)}>Past Events</Link></li>
        </ul>
      </div>
    )}
  </div>
);
}
export default HamburgerMenu;


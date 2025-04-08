import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="hamburger-menu">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      {isOpen && (
        <nav className="menu active">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                Tickets
              </button>
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
                      Weekender Vinegar Syndrome
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/manifesto" onClick={() => setIsOpen(false)}>Manifesto</Link>
            </li>
            <li>
              <Link to="/archives" onClick={() => setIsOpen(false)}>Past Events</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../page/assets/images/Z42_logo.jpg';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      clearTimeout(scrollTimeout);

      const timeout = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      }, 150);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <header className={`header-container ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Pleasure Dome Logo" className="header-logo" />
        </Link>
        <h1>Monthly 35/16mm double feature at Filmrauschpalast Berlin.</h1>
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <a
              href="https://linktr.ee/zelluloid42"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets
            </a>
          </li>
          <li>
            <a
              href="https://zelluloid42.bigcartel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Merch
            </a>
          </li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/archives">Past Events</Link></li>
        </ul>
      </nav>
      <HamburgerMenu />
    </header>
  );
};

export default Header;

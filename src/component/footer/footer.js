import React from 'react';
import './footer.css'; 
import SocialMediaButtons from '../socialMedia/socialMedia';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
        </div>

        <div className="footer-nav">
          <ul>
            <li><Link to="/homepage">Home</Link></li>
            <li>
              <a
                href="https://linktr.ee/zelluloid42"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets
              </a>
            </li>
            <li><Link to="/manifesto">Manifesto</Link></li>
            <li><Link to="/archives">Archives</Link></li>
            <li><Link to="/legalandprivacy">Legal</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <SocialMediaButtons /> 
        </div>

      </div>
    </footer>
  );
};

export default Footer;

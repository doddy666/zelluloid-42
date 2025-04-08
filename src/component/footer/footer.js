import React from 'react';
import './footer.css'; 
import SocialMediaButtons from '../socialMedia/socialMedia';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
         
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="/homepage">Home</a></li>
              <li><a href="https://linktr.ee/zelluloid42">Tickets</a></li>
              <li><a href="/manifesto">Manifesto</a></li>
              <li><a href="/archives">Archives</a></li>
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

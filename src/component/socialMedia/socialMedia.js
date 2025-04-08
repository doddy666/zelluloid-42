import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import './socialMedia.css'; 

function SocialMediaButtons() {
  return (
    <div className="social-media-buttons">
      <a 
        href="https://www.instagram.com/zelluloid42" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button instagram-button"
        aria-label="Follow us on Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a 
        href="https://www.facebook.com/zelluloid42" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button facebook-button"
        aria-label="Follow us on Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
      <a 
        href="https://www.youtube.com/@ZelluloidZweiundvierzig/videos" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button youtube-button"
        aria-label="Watch us on YouTube"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
    </div>
  );
}

export default SocialMediaButtons;

import React from 'react';
import './background.css';
import BannerHomepage from '../../assets/images/BannerHomepage.jpg'; 
import Logo from '../../assets/images/PDLogotransparent.png'; 

const Background = ({ children }) => {
  return (
    <div className="background" style={{ backgroundImage: `url(${BannerHomepage})` }}>
  <div className="logo-overlay">
    <img src={Logo} alt="Zelluloid42 Logo" className="logo-image" />
  </div>
  {children}
</div>
  );
};

export default Background;

import React from 'react';
import './background.css';
import BannerHomepage from '../../assets/images/BannerHomepage.jpg'; 

const Background = ({ children }) => {
  return (
    <div className="background" style={{ backgroundImage: `url(${BannerHomepage})` }}>
      {children}
    </div>
  );
};

export default Background;

import React from 'react';
import { Link } from 'react-router-dom';
import './promoBoxVs.css';
import demonWind from '../../assets/images/demon-wind.jpg';

const PromoBox = () => {
  return (
    <div className="promo-box-wrapper">
      <div className="promo-title">
      </div>

      <div className="program-banner">
        <Link to="/festival" className="program-banner-link">
          <img src={demonWind} alt="Weekender Program" className="program-image" />
          <div className="program-overlay">
            <span>Weekender Program</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PromoBox;

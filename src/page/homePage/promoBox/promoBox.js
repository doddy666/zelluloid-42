import React from 'react';
import './promoBox.css';
import pD12 from '../../assets/images/PDome12.jpg';
import Button from '../../../component/button/button';

const PromoBox = () => {
  return (
    <div className="promo-box-wrapper">
      <div className="promo-title">
        <h2>Upcoming Screenings</h2>
      </div>
      <div className="promo-item">
        <div className="promo-date-top">December 14th</div>
        <div className="promo-images-row">
          <a
            href="https://linktr.ee/zelluloid42"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pD12} alt="Pleasure Dome" className="promo-image" />
          </a>
        </div>
        <div className="button-group">
          <Button href="https://linktr.ee/zelluloid42">Buy Ticket</Button>
          <Button href="https://www.youtube.com/@ZelluloidZweiundvierzig/videos" className="button--black">Watch Trailer</Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;

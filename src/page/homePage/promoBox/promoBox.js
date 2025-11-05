import React from 'react';
import './promoBox.css';
import pD11 from '../../assets/images/PDome11.jpg';
import Button from '../../../component/button/button';

const PromoBox = () => {
  return (
    <div className="promo-box-wrapper">
      <div className="promo-title">
        <h2>Upcoming Screenings</h2>
      </div>
      <div className="promo-item">
        <div className="promo-date-top">October 19th</div>
        <div className="promo-images-row">
          <a
            href="https://linktr.ee/zelluloid42"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pD11} alt="Pleasure Dome" className="promo-image" />
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

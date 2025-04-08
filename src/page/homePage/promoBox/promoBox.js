import React from 'react';
import './promoBox.css';
import Button from '../../../component/button/button';

const PromoBox = () => {
  return (
    <div className="promo-box-wrapper">
      <div className="promo-title">
        <h2>Upcoming Screenings</h2>
        <p>All Shows Presented in Glorious 35mm (unless noted in 16mm)</p>
      </div>

      <div className="promo-box">
        <div className="promo-item">
          <div className="promo-date-top">April 13 – 5pm</div>
          <a
            href="https://linktr.ee/zelluloid42"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/PDome6.jpg"
              alt="Pleasure Dome"
              className="promo-image"
            />
          </a>
          <div className="button-group">
          <Button href="https://linktr.ee/zelluloid42">Buy Ticket</Button>
<Button href="https://youtube.com" className="button--black">Watch Trailer</Button>

          </div>
        </div>

        <div className="promo-item">
          <div className="promo-date-top">May 16 – 18</div>
          <a
            href="https://zelluloid42.bigcartel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/VinegarSyndrome.jpg"
              alt="Vinegar Syndrome"
              className="promo-image"
            />
          </a>
          <div className="button-group">
            <Button href="https://zelluloid42.bigcartel.com">Buy Ticket</Button>
<Button href="https://youtube.com" className="button--black">Watch Trailer</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;


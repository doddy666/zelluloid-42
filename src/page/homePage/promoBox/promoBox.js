import React from 'react';
import './promoBox.css';
import timeTable from '../../assets/images/Timetable_sw.jpg';
import vinegarImg from '../../assets/images/VinegarSyndrome.jpg';
import Button from '../../../component/button/button';

const PromoBox = () => {
  return (
    <div className="promo-box-wrapper">
      <div className="promo-title">
        <h2>Upcoming Screenings</h2>
      </div>
      <div className="promo-item">
        <div className="promo-date-top">May 16 – 18</div>
        <div className="promo-images-row">
          <a
            href="https://zelluloid42.bigcartel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vinegarImg} alt="Pleasure Dome" className="promo-image" />
          </a>
        </div>
        <div className="button-group">
          <Button href="https://zelluloid42.bigcartel.com">Buy Ticket</Button>
          <Button href="https://youtu.be/Ykr6ZVNQq0c?si=ZEodNy37LkxgA_Jq" className="button--black">Watch Trailer</Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;

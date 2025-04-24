import React from 'react';
import './festival.css';
import timelineImage from '../assets/images/Timetable_sw.jpg';
import Mausoleum from '../assets/images/Mausoleum.jpg';

const schedule = [
  { date: 'Friday, May 16', time: '19:00', title: 'MAUSOLEUM (1983, Michael Dugan, 97 min., DCP)' },
  { date: 'Friday, May 16', time: '21:30', title: 'DRACULA SUCKS (1978, Phillip Marshak, 95 min., 35mm)' },
  { date: 'Saturday, May 17', time: '12:00', title: 'PRISONER OF PARADISE (1980, Bob Chinn, 78 min., 35mm)' },
  { date: 'Saturday, May 17', time: '14:00', title: '*** GARTEN PARTY ***' },
  { date: 'Saturday, May 17', time: '17:00', title: 'PLEDGE NIGHT (1990, Paul Ziller, 86 min., DCP)' },
  { date: 'Saturday, May 17', time: '19:00', title: 'DEMON WIND (1990, Charles Philip Moore, 96 min., DCP)' },
  { date: 'Sunday, May 18', time: '13:30', title: 'NIGHT TRAIN TO TERROR (1985, Tom McGowan et al., 98 min., 35mm)' },
  { date: 'Sunday, May 18', time: '15:30', title: 'THE LAMP (1987, Tom Daley, 87 min., 35mm) + Q&A w/ Joe Rubin and Oscar Becher of Vinegar Syndrome' },
  { date: 'Sunday, May 18', time: '20:00', title: 'ANGEL (1984, Robert Vincent O’Neil, 93 min., DCP)' },
];

const Festival = () => {
    let lastDate = null;
  
    return (
      <div className="schedule-page">
        <header className="schedule-header">
          <h1>Vinegar Syndrome Weekender</h1>
          <p>May 16–18, 2025</p>
        </header>
  
        <div className="schedule-content">
  <div className="timeline-container">
    <img src={timelineImage} alt="Festival Timeline" className="timeline-image" />
  </div>

  <section className="schedule-list">
    {schedule.map((event, index) => {
      const showDateHeader = event.date !== lastDate;
      lastDate = event.date;

      return (
        <React.Fragment key={index}>
          {showDateHeader && (
            <div className="schedule-day-separator">{event.date}</div>
          )}
          <div className="schedule-item">
            <div className="schedule-date-time">
              <span className="schedule-time">{event.time}</span>
            </div>
            <div className="schedule-title">{event.title}</div>
          </div>
        </React.Fragment>
      );
    })}
  </section>
</div>


        <div className="ticket-banner">
  <a href="https://zelluloid42.bigcartel.com" target="_blank" rel="noopener noreferrer">
    <img src={Mausoleum} alt="Buy Tickets" className="ticket-image" />
    <div className="ticket-overlay">
      <span>Buy Tickets</span>
    </div>
  </a>
</div>
      </div>
    );
    
  };
  
  export default Festival;
/*
import React from 'react';
import './tickets.css'; 

const ticketData = [
    {
      date: 'October 13, 2024',
      time: '6:00 pm',
      title: 'Fight for your life (1977) directed by Robert A. Endelson',
      imageUrl: '/Images/fightfor.jpg',
      description:
        'Fight for Your Life is a 1977 American blaxploitation thriller film directed by Robert A. Endelson and starring William Sanderson and Robert Judd.',
    },
    {
        date: 'October 13, 2024',
        time: '8:30 pm',
      title: 'Vigilante (1982) directed by William Lustig',
      imageUrl: '/Images/vigilante.jpg',
      description:
        'Vigilante, later released on video as Street Gang, is a 1982 American vigilante film directed by William Lustig and starring Robert Forster and Fred Williamson.',
    },
];
  
  const Tickets = () => {
    return (
      <div className="shows-container">
        {ticketData.map((show, index) => (
          <div key={index} className="show-item">
            <h2 className="show-date">{show.date}</h2>
            <div className="show-details">
              <img src={show.imageUrl} alt={show.title} className="show-image" />
              <div className="show-info">
                <h3 className="show-time">{show.time}</h3>
                <h3 className="show-title">{show.title}</h3>
                <p className="show-description">{show.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tickets;
  */
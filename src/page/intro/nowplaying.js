import React from 'react';
import './nowplaying.css';


const nowPlayingData = [
    {
        date: 'October 13, 2024',
        time: '8:30 pm',
      title: 'Vigilante (1982) directed by William Lustig',
      imageUrl: '/Images/vigilante.jpg',
      description:
        'Vigilante, later released on video as Street Gang, is a 1982 American vigilante film directed by William Lustig and starring Robert Forster and Fred Williamson.',
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

const NowPlaying = () => {
    return (
        <div className="nowplaying-container">
            <h2 className="nowplaying-title">Now Playing</h2>
            <div className="nowplaying-showcase">
                {nowPlayingData.map((show, index) => (
                    <div key={index} className="nowplaying-item">
                        <img src={show.imageUrl} alt={show.title} className="nowplaying-image" />
                        <div className="nowplaying-info">
                            <span className="nowplaying-date">{show.date}</span>
                            {show.times.map((time, idx) => (
                                <span key={idx} className="nowplaying-time">{time}</span>
                            ))}
                            <p className="nowplaying-description">{show.description}</p>
                            <div className="nowplaying-buttons">
                                <button className="more-info-btn">More Info</button>
                                <button className="buy-tickets-btn">Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NowPlaying;

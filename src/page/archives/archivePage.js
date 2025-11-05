import React, { useState, useEffect } from 'react';
import PDome1 from '../../page/assets/images/PDome1.jpg';
import PDome2 from '../../page/assets/images/PDome2.jpg';
import PDome3 from '../../page/assets/images/PDome3.jpg';
import PDome4 from '../../page/assets/images/PDome4.jpg';
import PDome5 from '../../page/assets/images/PDome5.jpg';
import PDome6 from '../../page/assets/images/PDome6.jpg';
import PDome7 from '../../page/assets/images/PDome7.jpg';
import PDome8 from '../../page/assets/images/PDome8.jpg';
import PDome9 from '../../page/assets/images/PDome9.jpg';
import PDome10 from '../../page/assets/images/PDome10.jpg';
import Weekender from '../../page/assets/images/Weekender.jpg';
import './archivePage.css';

const archiveData = [
  { title: 'October 2025', imageUrl: PDome10, description: 'Pleasure Dome 10' },
  { title: 'September 2025', imageUrl: PDome9, description: 'Pleasure Dome 9' },
  { title: 'July 2025', imageUrl: PDome8, description: 'Pleasure Dome 8' },
  { title: 'June 2025', imageUrl: PDome7, description: 'Pleasure Dome 7' },
  { title: 'Mai 2025', imageUrl: Weekender, description: 'Vinegar Syndrome Weekender' },
  { title: 'April 2025', imageUrl: PDome6, description: 'Pleasure Dome 6' },
  { title: 'November 2024', imageUrl: PDome5, description: 'Pleasure Dome 5' },
  { title: 'October 2024', imageUrl: PDome4, description: 'Pleasure Dome 4' },
  { title: 'September 2024', imageUrl: PDome3, description: 'Pleasure Dome 3' },
  { title: 'August 2024', imageUrl: PDome2, description: 'Pleasure Dome 2' },
  { title: 'July 2024', imageUrl: PDome1, description: 'Pleasure Dome 1' },
];

const ArchivePage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth > 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="archive-container">
        {archiveData.map((item, index) => (
          <div key={index} className="archive-item">
            <img
  src={item.imageUrl}
  alt={item.title}
  className="archive-image"
  loading="lazy"
  width="400"
  height="600"
  onLoad={(e) => e.target.classList.add('loaded')}
  onClick={() => {
    if (isDesktop) setModalImage(item.imageUrl);
  }}
  style={{ cursor: "default"}}
/>
            <h3 className="archive-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="image-modal active" onClick={closeModal}>
          <img src={modalImage} alt="Full view" />
        </div>
      )}
    </>
  );
};

export default ArchivePage;

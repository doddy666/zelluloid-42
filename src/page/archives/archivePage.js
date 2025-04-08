import React, { useState, useEffect } from 'react';
import './archivePage.css';

const archiveData = [
  { title: 'November 2024', imageUrl: "/Images/PDome5.jpg", description: 'Pleasure Dome 5' },
  { title: 'October 2024', imageUrl: "/Images/PDome4.jpg", description: 'Pleasure Dome 4' },
  { title: 'September 2024', imageUrl: "/Images/PDome3.jpg", description: 'Pleasure Dome 3' },
  { title: 'August 2024', imageUrl: "/Images/PDome2.jpg", description: 'Pleasure Dome 2' },
  { title: 'July 2024', imageUrl: "/Images/PDome1.jpg", description: 'Pleasure Dome 1' },
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
              onClick={() => {
                if (isDesktop) setModalImage(item.imageUrl);
              }}
              style={{ cursor: "default" }}

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

import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const ModaleContent = ({ images = [], title, description, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {images.length > 0 && (
          <>
            <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
              {images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img 
                    src={img} 
                    alt={`Slide ${index}`} 
                    className='img-fluid' 
                    style={{ height: '30vh', width: '100%', objectFit: 'contain' }} 
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="text-center mt-3">
              <p>{currentIndex + 1}/{images.length}</p>
            </div>
          </>
        )}

        {description}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </Modal.Footer>
      <style>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: black !important;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default ModaleContent;
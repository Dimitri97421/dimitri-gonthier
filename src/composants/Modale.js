import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import ModaleContent from './ModaleContent';

const Modale = ({ images, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='container'>
      <img src={images[0]} alt='Image d un projet' />
      <div className='content_modale'>
        <h3>{title}</h3>
        <button onClick={handleOpen}>Voir plus</button>
      </div>

      <Modal show={isOpen} onHide={handleClose} centered>
        <ModaleContent
          images={images}
          title={title}
          description={description}
          onClose={handleClose}
        />
      </Modal>
    </div>
  );
};

export default Modale;

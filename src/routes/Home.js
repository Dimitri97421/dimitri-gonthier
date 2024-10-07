import React, { useState } from 'react';
import PhotoProfile from '../img/moi.webp'
import Formulaire from '../composants/Formulaire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import gitHubLogo from '../img/github.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="accueil_section" className='accueil_section'>
        <div className='presentation'>
            <h1>
                Bonjour, je suis Dimitri ! 
                <span className="wave-hand">👋</span>
            </h1>
            <h2>Développeur web junior, avec des projets qui ne plantent presque jamais.</h2>
            <a href="https://github.com/Dimitri97421" target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} alt="GitHub Logo" />
            </a>
            <button onClick={handleOpen}>Contact</button>
            <Formulaire isOpen={isOpen} handleClose={handleClose}/>
        </div>
        <img src={PhotoProfile} alt='photo de moi'/>
    </section>
  );
};

export default Home;

import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPalette } from 'react-icons/fa';

const Header = ({colorChange, currentColor}) => {
  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 124) {
      setIsHovered(false);
    }
  };
  
  const hoverColor = currentColor === 'linear-gradient(to right, #e74c3c, #f39c12)' 
    ? 'linear-gradient(to right, #0f4b5b, #136a8a, #267871)' 
    : 'linear-gradient(to right, #e74c3c, #f39c12)'; 

  return (
    <header className="header">
      <div className="navbar">
        <Link to='/' 
          style={{
            color: location.pathname === '/' ? 'brown' : 'black'
          }}>
          Dimitri
        </Link>
        <Link to='/projects' 
          style={{
            color: location.pathname === '/projects' ? 'brown' : 'black'
          }}>
          Projets
        </Link>
        <Link to='/skills' 
          style={{
            color: location.pathname === '/skills' ? 'brown' : 'black'
          }}>
          Skills
        </Link>
        <button aria-label='change la couleur' onClick={colorChange} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} style={{background: isHovered ? hoverColor : currentColor}}><FaPalette color="white" /></button>
      </div>
    </header>
  );
};

export default Header;


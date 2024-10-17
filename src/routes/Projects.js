import React, { useState } from 'react';
import PhotoP4_1 from '../img/Prj4.1.webp';
import PhotoP4_2 from '../img/Prj4.2.webp';
import PhotoP6_1 from '../img/Prj6.1.webp';
import PhotoP6_2 from '../img/Prj6.2.webp';
import PhotoP7_1 from '../img/Prj7.1.webp';
import PhotoP7_2 from '../img/Prj7.2.webp';
import PhotoP8_1 from '../img/Prj8.1.webp';
import PhotoP8_2 from '../img/Prj8.2.webp';
import PhotoP8_3 from '../img/Prj8.3.webp';
import PhotoP9_1 from '../img/Prj9.1.webp';
import PhotoP9_2 from '../img/Prj9.2.webp';
import PhotoP10_1 from '../img/Prj10.1.webp';
import PhotoP10_2 from '../img/Prj10.2.webp';
import PhotoP11_1 from '../img/Prj11.1.webp';
import PhotoP11_2 from '../img/Prj11.2.webp';
import PhotoWeather_1 from '../img/Weather.1.webp';
import PhotoWeather_2 from '../img/Weather.2.webp';
import Modale from '../composants/Modale';

const Projects = () => {
  const [selectedYear, setSelectedYear] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(0);

  const imagesP4 = [PhotoP4_1, PhotoP4_2];
  const imagesP6 = [PhotoP6_1, PhotoP6_2];
  const imagesP7 = [PhotoP7_1, PhotoP7_2];
  const imagesP8 = [PhotoP8_1, PhotoP8_2, PhotoP8_3];
  const imagesP9 = [PhotoP9_1, PhotoP9_2];
  const imagesP10 = [PhotoP10_1, PhotoP10_2];
  const imagesP11 = [PhotoP11_1, PhotoP11_2];
  const imagesWeather = [PhotoWeather_1, PhotoWeather_2];

  const projects = [
    {
      img: imagesP11,
      title: "Front end d'une application bancaire avec React et Redux",
      description: <>Mise en oeuvre du front end d'une application bancaire via des appels API et avec Redux pour la gestion des données<br/><br/>Compétences : React / Redux / Swagger<br/><br/>Lien GitHub : <a href='https://github.com/Dimitri97421/Projet_11_OC' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_11_OC</a></>,
      year: 2024
    },
    {
      img: imagesP6,
      title: "Page web dynamique en JavaScript avec une API",
      description: <>Création d'un site web dynamique en communiquant avec une API<br/><br/>Compétences : JavaScript / Postman <br/><br/>Lien GitHub : <a href='https://github.com/Dimitri97421/Projet_6_OC' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_6_OC</a></>,
      year: 2023
    },
    {
      img: imagesWeather,
      title: "Application web de météo mondiale en TypeScript",
      description: <>Application web dynamique qui fournit des informations météorologiques précises et en temps réel pour les utilisateurs du monde entier.<br/><br/>Compétences : JavaScript / TypeScript <br/><br/>Lien GitHub Pages : <a href='https://dimitri97421.github.io/weather-app/' target="_blank" rel="noopener noreferrer">https://dimitri97421.github.io/weather-app/</a></>,
      year: 2024
    },
    {
      img: imagesP8,
      title: 'Application web de location immobilière en React',
      description: <>Implémentation du front end d'une application React moderne et réactive<br/><br/>Compétences : React / React Router<br/><br/>Lien GitHub Pages : <a href='https://dimitri97421.github.io/Projet_8_OC/' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_8_OC</a></>,
      year: 2024
    },
    {
      img: imagesP4,
      title: 'Site "mobile first" avec des animations CSS',
      description: <>Intégration d'une maquette en mobile-first afin d'améliorer l'interface d'un site avec des animations CSS/SCSS<br/><br/>Compétences : Html / Scss / Git / Figma<br/><br/>Lien GitHub Pages : <a href='https://dimitri97421.github.io/Projet_4_OC/' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_4_OC</a></>,
      year: 2023
    },
    {
      img: imagesP7,
      title: "Planification du développement d'une application",
      description: <>Entreprendre une veille technologique, rédiger les spécifications techniques et utiliser un outil de gestion de projet afin de planifier le développement du site d'un client<br/><br/>Compétences : Kanban (Trello) / Feedly </>,
      year: 2023
    },
    {
      img: imagesP9,
      title: "Optimisation du référencement d'un site",
      description: <>Optimisation du référencement et de l'accessibilité du site d'une photographe<br/><br/>Compétences : Lighhouse / SEO <br/><br/>Lien GitHub Pages : <a href='https://dimitri97421.github.io/Projet_9_OC/' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_9_OC</a></>,
      year: 2024
    },
    {
      img: imagesP10,
      title: "Débogage d'un site avec React Developer Tools",
      description: <>Déboger et finaliser le développement d'un site one-page en réalisant des tests unitaires et fonctionnels<br/><br/>Compétences : React Dev Tools / Jest<br/><br/>Lien GitHub : <a href='https://github.com/Dimitri97421/Projet_10_OC' target="_blank" rel="noopener noreferrer">github.com/Dimitri97421/Projet_10_OC</a></>,
      year: 2024
    }
  ];

  const filteredProjects = selectedYear === 'Tous' ? projects : projects.filter(project => project.year.toString() === selectedYear);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const visibleProjects = filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  // Gére le changement de page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='projects'>
      <div className='projects_filter'>
        <button style={{ backgroundColor: selectedYear === 'Tous' ? '#6F3F1F' : 'transparent'}} onClick={() => { setSelectedYear('Tous'); setCurrentPage(0); }}>Tous</button>
        <button style={{ backgroundColor: selectedYear === '2024' ? '#6F3F1F' : 'transparent' }} onClick={() => { setSelectedYear('2024'); setCurrentPage(0); }}>2024</button>
        <button style={{ backgroundColor: selectedYear === '2023' ? '#6F3F1F' : 'transparent' }} onClick={() => { setSelectedYear('2023'); setCurrentPage(0); }}>2023</button>
      </div>

      <section id="projects_section" className='projects_section'>
        <div className='projects_list'>
          {visibleProjects.map((project, index) => (
            <Modale 
              key={index}
              images={project.img} 
              title={project.title} 
              description={project.description}
            />
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index} 
              onClick={() => goToPage(index)}
              style={{ backgroundColor: currentPage === index ? '#fdf6e3' : 'transparent' }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

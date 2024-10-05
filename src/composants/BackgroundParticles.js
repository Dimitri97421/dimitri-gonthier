import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#6F3F1F",
      },
      links: {
        color: "#EEC66C",
        distance: 300,
        enable: true,
        opacity: 0.7,
        width: 2,
        triangles: {
          enable: true,
          color: '#EEC66C',
          opacity: 0.2,
        },
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        random: false,
        speed: 6,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          value_area: 2000,
        },
        value: 15,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: 'polygon',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }}
/>

  );
};

export default BackgroundParticles;
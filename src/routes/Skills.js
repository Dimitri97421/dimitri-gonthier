// Dashboard.js
import React from 'react';
import RadarChart from '../composants/RadarChart';

const Skills = () => {
  const dataSets = [80, 70, 40, 70, 40, 90];

  const labels = ['JAVASCRIPT', 'REACT', 'MONGO DB', 'TYPESCRIPT', 'NODE JS', 'HTML/CSS'];

  return (
    <div className='skills_section'>
      <RadarChart initialData={dataSets} labels={labels} />
    </div>
  );
};

export default Skills;

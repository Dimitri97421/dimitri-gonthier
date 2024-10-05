// Dashboard.js
import React from 'react';
import RadarChart from '../composants/RadarChart';

const Skills = () => {
  const dataSets = [70, 80, 70, 70, 40, 90];

  const labels = ['JAVASCRIPT', 'CSS', 'REACT', "TYPESCRIPT", 'NOJE JS', 'HTML'];

  return (
    <div className='skills_section'>
      <RadarChart initialData={dataSets} labels={labels} />
    </div>
  );
};

export default Skills;

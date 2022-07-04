import React from 'react';
import experiences from '../../data/experience';
import Experience from './Experience';

const Experiences = () => (
  <div className="experiences">
    <h1 className="experiences-title">Work Experience</h1>
    <div>
      {experiences.map(({
        key,
        logoImage,
        logoAlt,
        companyName,
        companyTitle,
        companyDate,
        workTasks,
      }) => (
        <Experience
          key={key}
          logoImage={logoImage}
          logoAlt={logoAlt}
          companyName={companyName}
          companyTitle={companyTitle}
          companyDate={companyDate}
          workTasks={workTasks}
        />
      ))}
    </div>
  </div>
);

export default Experiences;

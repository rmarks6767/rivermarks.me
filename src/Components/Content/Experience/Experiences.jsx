import { Typography } from '@mui/material';
import React from 'react';
import Experience from './Experience';
import EXPERIENCE from '../../../constants/experience';

const Experiences = () => (
  <div className="experiences">
    <Typography
      className="experiences-title"
      gutterBottom
      variant="h1"
      component="h1"
    >
      Experience
    </Typography>
    <div>
      {EXPERIENCE.map(({
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

import React from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';
import { Typography } from '@mui/material';

const Experience = ({
  logoImage,
  logoAlt,
  companyName,
  companyTitle,
  companyDate,
  workTasks,
}) => (
  <div className="experience">
    <div className="header">
      <img alt={logoAlt} className="logo" src={logoImage} />
      <div className="company">
        <Typography
          className="heading"
          variant="h2"
          component="h2"
        >
          {companyName}
        </Typography>
        <Typography
          className="heading"
          variant="h3"
          component="h3"
        >
          {companyTitle}
        </Typography>
        <Typography
          className="heading"
          variant="h4"
          component="h4"
        >
          {companyDate}
        </Typography>
      </div>
    </div>
    <div className="experience-content">
      <ul>
        {workTasks.map((task) => <li key={task}>{task}</li>)}
      </ul>
    </div>
  </div>
);

Experience.propTypes = {
  logoImage: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyTitle: PropTypes.string.isRequired,
  companyDate: PropTypes.string.isRequired,
  workTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;

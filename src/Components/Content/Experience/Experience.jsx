import React from 'react';
import PropTypes from 'prop-types';
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
    <div className="experience-header">
      <img
        alt={logoAlt}
        className="experience-logo"
        src={logoImage}
      />
      <div className="experience-info">
        <Typography
          className="experience-company"
          variant="h2"
          component="h2"
        >
          {companyName}
        </Typography>
        <Typography
          className="experience-role"
          variant="h3"
          component="h3"
        >
          {companyTitle}
        </Typography>
        <Typography
          className="experience-date"
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

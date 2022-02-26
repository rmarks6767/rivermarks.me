import React from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';

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
        <h1>{companyName}</h1>
        <h2>{companyTitle}</h2>
        <h3>{companyDate}</h3>
      </div>
    </div>
    <div className="content">
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

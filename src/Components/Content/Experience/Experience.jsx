import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';

const Experience = ({
  logoImage,
  logoAlt,
  companyName,
  companyTitle,
  companyDate,
  workTasks,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <div ref={ref} className={`experience fade-in-section ${visible ? 'is-visible' : ''}`}>
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
};
Experience.propTypes = {
  logoImage: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyTitle: PropTypes.string.isRequired,
  companyDate: PropTypes.string.isRequired,
  workTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;

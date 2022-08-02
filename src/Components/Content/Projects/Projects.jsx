import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import PROJECTS from '../../../constants/projects';

const Projects = ({ setTab, setTabs }) => {
  const clickHandler = (label, Component) => {
    setTab(label);
    setTabs((tabs) => {
      if (tabs.find((tab) => tab.label === label)) {
        return tabs;
      }

      const tabIndex = tabs.findIndex((tab) => tab.label === 'Projects');

      return [
        ...tabs.slice(0, tabIndex + 1),
        { label, Component, parent: 'Projects' },
        ...tabs.slice(tabIndex + 1),
      ];
    });
  };

  return (
    <div className="projects">
      <Typography
        className="projects-title"
        gutterBottom
        variant="h1"
        component="h1"
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {PROJECTS.map(({
          Component,
          Picture,
          pictureAlt,
          label,
          summary: {
            title,
            blurb,
            date,
          },
        }) => (
          <Grid
            key={label}
            item
            xs={12}
            lg={6}
            xl={4}
          >
            <div
              className="project"
              role="button"
              onClick={() => clickHandler(label, Component)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  clickHandler(label, Component);
                }
              }}
            >
              <img className="project-picture" alt={pictureAlt} src={Picture} />
              <CardContent>
                <Typography
                  gutterBottom
                  className="project-header"
                  variant="h3"
                  component="h3"
                >
                  {title}
                </Typography>
                <Typography
                  gutterBottom
                  className="project-date"
                  variant="h4"
                  component="h4"
                >
                  {date}
                </Typography>
                <Typography className="project-summary">
                  {blurb}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  setTab: PropTypes.func.isRequired,
  setTabs: PropTypes.func.isRequired,
};

export default Projects;

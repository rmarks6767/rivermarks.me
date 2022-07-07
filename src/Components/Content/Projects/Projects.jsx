import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import projects from '../../../data/projects';
import './Projects.scss';

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
        {projects.map(({
          Component,
          picture,
          pictureAlt,
          label,
          summary: { title, blurb, date },
        }) => (
          <Grid key={label} item xs={12} lg={6} xl={4}>
            <Card className="project">
              <CardActionArea
                className="project"
                onClick={() => clickHandler(label, Component)}
              >
                <LaunchIcon className="launch-icon" />
                <CardMedia
                  className="project-pic"
                  component="img"
                  alt={pictureAlt}
                  image={picture}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    className="header"
                    variant="h3"
                    component="div"
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {date}
                  </Typography>
                  <Typography className="summary">
                    {blurb}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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

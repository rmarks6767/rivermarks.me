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
import projects from '../../data/projects';
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
      <h1 className="projects-title">Projects</h1>
      <Grid container spacing={2}>
        {projects.map(({
          Component,
          picture,
          pictureAlt,
          label,
          summary: {
            title,
            summaryBlurb,
          },
        }) => (
          <Grid key={label} item xs={4}>
            <Card className="project">
              <CardActionArea
                onClick={() => clickHandler(label, Component)}
              >
                <CardMedia
                  className="project-pic"
                  component="img"
                  alt={pictureAlt}
                  image={picture}
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {title}
                  </Typography>
                  <Typography className="summary">
                    {summaryBlurb}
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

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, Chip, Avatar, Button, Stack,
} from '@mui/material';
import { GitHub, Web, List } from '@mui/icons-material';
import LANGUAGES from '../../../constants/langauges';

const ProjectPage = ({
  title,
  website,
  github,
  techStack,
  sections,
}) => {
  const tldrRef = createRef();

  return (
    <div className="project-page">
      <Grid className="project-sections">
        <Grid
          className="project-section"
          container
          spacing={2}
        >
          <Grid
            item
            className="project-section-part"
            xs={12}
            lg={12}
          >
            <Typography
              gutterBottom
              className="project-title"
              variant="h2"
              component="h2"
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            className="project-section-part"
            xs={12}
            lg={12}
          >
            <div className="project-topbar">
              <div className="project-buttons">
                <Button
                  target="_blank"
                  href={github}
                  endIcon={<GitHub />}
                >
                  GitHub
                </Button>
                {website && (
                  <Button
                    target="_blank"
                    href={website}
                    endIcon={<Web />}
                  >
                    Website
                  </Button>
                )}
                <Button
                  onClick={() => {
                    tldrRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  endIcon={<List />}
                >
                  TLDR
                </Button>
              </div>
              <Stack
                direction="row"
                className="tech-stack"
                spacing={1}
              >
                {techStack.map((language) => {
                  const { link, logo } = LANGUAGES[language];

                  return (
                    <Chip
                      key={language}
                      className="project-technology"
                      component="a"
                      href={link}
                      clickable
                      label={language}
                      avatar={<Avatar alt={language} src={logo} />}
                    />
                  );
                })}
              </Stack>
            </div>
          </Grid>
        </Grid>
        {sections
          .map(({ key: sectionKey, parts }) => (
            <Grid
              key={sectionKey}
              className="project-section"
              container
              spacing={2}
            >
              {parts
                .map((part) => {
                  const {
                    key,
                    body,
                    lg = 12,
                    titleLevel = 'h3',
                    shouldSoloRender = false,
                    title: sectionTitle,
                  } = part;

                  return (
                    <Grid
                      item
                      key={key}
                      className="project-section-part"
                      xs={12}
                      lg={lg}
                      ref={sectionKey === 'tldr' ? tldrRef : null}
                    >
                      {sectionTitle && (
                      <Typography
                        gutterBottom
                        className="project-title"
                        variant={titleLevel}
                        component={titleLevel}
                      >
                        {sectionTitle}
                      </Typography>
                      )}
                      {body && (
                      <div className="project-body-container">
                        {shouldSoloRender
                          ? body
                          : (
                            <Typography
                              gutterBottom
                              className="project-body"
                              variant="body1"
                              component="div"
                            >
                              {body}
                            </Typography>
                          )}
                      </div>
                      )}
                    </Grid>
                  );
                })}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

ProjectPage.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  website: PropTypes.string,
  techStack: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      parts: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          lg: PropTypes.number,
          title: PropTypes.string,
          titleLevel: PropTypes.string,
          shouldSoloRender: PropTypes.bool,
          body: PropTypes.node,
        }),
      ),
    }),
  ).isRequired,
};

ProjectPage.defaultProps = {
  website: null,
};

export default ProjectPage;

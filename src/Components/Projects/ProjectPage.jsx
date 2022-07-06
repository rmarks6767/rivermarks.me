import React, { createRef, isValidElement } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, Chip, Avatar, Button, Stack,
} from '@mui/material';
import { GitHub, Web, List } from '@mui/icons-material';
import ReactLogo from '../../public/assets/react.webp';
import NodeJSLogo from '../../public/assets/nodejs.webp';
import SassLogo from '../../public/assets/sass.webp';
import MySQLLogo from '../../public/assets/mysql.webp';
import JavaLogo from '../../public/assets/java.webp';
import GraphQLLogo from '../../public/assets/graphql.webp';
import MongoDBLogo from '../../public/assets/mongodb.webp';
import './ProjectPage.scss';

const LANGUAGES = {
  React: {
    logo: ReactLogo,
    link: 'https://reactjs.org',
  },
  NodeJS: {
    logo: NodeJSLogo,
    link: 'https://nodejs.org',
  },
  Sass: {
    logo: SassLogo,
    link: 'https://sass-lang.com',
  },
  MySQL: {
    logo: MySQLLogo,
    link: 'https://www.mysql.com',
  },
  Java: {
    logo: JavaLogo,
    link: 'https://www.java.com',
  },
  GraphQL: {
    logo: GraphQLLogo,
    link: 'https://graphql.org',
  },
  MongoDB: {
    logo: MongoDBLogo,
    link: 'https://www.mongodb.com',
  },
};

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
              <Stack direction="row" spacing={1}>
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
                        {isValidElement(body)
                          ? body
                          : (
                            <Typography
                              gutterBottom
                              className="project-body"
                              variant="body1"
                              component="p"
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
          body: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
          ]),
        }),
      ),
    }),
  ).isRequired,
};

ProjectPage.defaultProps = {
  website: null,
};

export default ProjectPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from '@mui/material';
import {
  Email, GitHub, LinkedIn, Phone,
} from '@mui/icons-material';
import TextPrint from '../../TextPrint';

const Home = ({ setTab }) => (
  <div className="home">
    <TextPrint
      text="River Marks"
    />
    <TextPrint
      keepCursor
      text="Software Engineer"
      headingLevel="h2"
      delay={11}
    />
    <hr className="separator" />
    <div className="quick-links">
      <Button
        className="link"
        aria-label="projects-tab"
        onClick={() => setTab('Projects')}
      >
        Projects
      </Button>
      <Button
        className="link"
        aria-label="experience-tab"
        onClick={() => setTab('Experience')}
      >
        Experience
      </Button>
      <Button
        className="link"
        aria-label="resume"
        href="https://github.com/rmarks6767/Resume/blob/master/RiverMarksResume.pdf"
        target="_blank"
      >
        Resume
      </Button>
    </div>
    <div>
      <IconButton
        aria-label="github"
        href="https://github.com/rmarks6767"
        target="_blank"
      >
        <GitHub className="icon" />
      </IconButton>
      <IconButton
        aria-label="linkedin"
        href="https://www.linkedin.com/in/rivermarks"
        target="_blank"
      >
        <LinkedIn className="icon" />
      </IconButton>
      <IconButton
        aria-label="phone"
        href="tel:570-620-8150"
      >
        <Phone className="icon" />
      </IconButton>
      <IconButton
        aria-label="email"
        href="mailto:rmarks6767@gmail.com"
      >
        <Email className="icon" />
      </IconButton>
    </div>
  </div>
);

Home.propTypes = {
  setTab: PropTypes.func.isRequired,
};

export default Home;

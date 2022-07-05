import React from 'react';
import {
  Typography, Chip,
} from '@mui/material';
import './Loremaster.scss';

export const title = 'Project Loremaster';
export const blurb = 'Web app designed to organize and automate parts of Dungeons & Dragons';
export const date = 'January 2019 - Present';

const TECH_STACK = ['React', 'JavaScript', 'NodeJS', 'Express', 'GraphQL', 'MongoDB'];

const Loremaster = () => (
  <div className="loremaster">
    <Typography gutterBottom variant="h2">
      Project Loremaster
    </Typography>
    <hr />
    <Typography variant="subtitle1">
      Project Loremaster is an automation of a DND campaign, with intentions to make a
      physical table to accompany the web application. The project is written in the below
      technologies, with the stack that I owned being  JavaScript, NodeJS, Express, GraphQL,
      and MongoDB
    </Typography>
    <hr />
    {TECH_STACK.map((tech, i) => (
      <Chip
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        color="primary"
        label={tech}
      />
    ))}
    <br />
  </div>
);

export default Loremaster;

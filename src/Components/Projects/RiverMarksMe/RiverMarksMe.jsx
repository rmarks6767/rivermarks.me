import { Typography } from '@mui/material';
import React from 'react';
import './RiverMarksMe.scss';

export const title = 'rivermarks.me';
export const blurb = 'Personal website designed like a terminal to offer a unique way to view my accomplishments';
export const date = 'January 2019 - Present';

const RiverMarksMe = () => (
  <div className="river-marks-me">
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  </div>
);

export default RiverMarksMe;

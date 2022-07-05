import { Typography } from '@mui/material';
import React from 'react';
import './MCS.scss';

export const title = 'Charity Stream';
export const blurb = 'Web app created to allow users to buy items and effects for players competing in Minecraft mini-games';
export const date = 'January 2019 - Present';

const MCS = () => (
  <div>
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  </div>
);

export default MCS;

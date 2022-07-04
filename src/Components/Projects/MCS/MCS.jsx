import { Typography } from '@mui/material';
import React from 'react';
import './MCS.scss';

export const title = 'Minecraft Charity Stream';
export const summaryBlurb = 'The Minecraft Charity Stream is an annual event hosted by CSH that features people competing in Minecraft mini-games, such as Bed Wars, to raise money for a chosen charity. Over the 4 years we have been running the event, we have raised over $3,500 for four different charities! With this event comes an ever evolving React web app that has been built upon for the last two years.';

const MCS = () => (
  <div>
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  </div>
);

export default MCS;

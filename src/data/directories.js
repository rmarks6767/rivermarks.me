import React from 'react';
import { Experiences } from '../Components/Experience';
import Loremaster from '../Components/Projects/Loremaster';
import Resume from '../Components/Resume';

export default {
  '~': {
    About: {},
    Experience: {
      display: <Experiences />,
    },
    Projects: {
      loremaster: { display: <Loremaster /> },
    },
    Resume: { display: <Resume /> },
  },
};

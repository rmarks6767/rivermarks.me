import React from 'react';
import { Experiences } from '../Components/Content/Experience';
import Loremaster from '../Components/Content/Projects/Loremaster';

export default {
  '~': {
    About: {},
    Experience: {
      display: <Experiences />,
    },
    Projects: {
      loremaster: { display: <Loremaster /> },
    },
  },
};

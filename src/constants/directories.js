import React from 'react';
import { Experiences } from '../Components/Content/Experience';
import Loremaster from '../Components/Content/Projects/Loremaster';

const DIRECTORIES = {
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

export default DIRECTORIES;

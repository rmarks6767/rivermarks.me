import React from 'react';
import Experience from '../Components/Experience';
import Loremaster from '../Components/Projects/Loremaster';
import Resume from '../Components/Resume';
import experiences from './experience';

export default {
  '~': {
    About: {},
    Experience: {
      ...(() => {
        const experienceDict = {};

        experiences.forEach((experience) => {
          const {
            key,
            logoImage,
            logoAlt,
            companyName,
            companyTitle,
            companyDate,
            workTasks,
          } = experience;

          experienceDict[key] = {
            display: (
              <Experience
                key={key}
                logoImage={logoImage}
                logoAlt={logoAlt}
                companyName={companyName}
                companyTitle={companyTitle}
                companyDate={companyDate}
                workTasks={workTasks}
              />
            ),
          };
        });

        return experienceDict;
      })(),
    },
    Projects: {
      loremaster: { display: <Loremaster /> },
    },
    Resume: { display: <Resume /> },
  },
};

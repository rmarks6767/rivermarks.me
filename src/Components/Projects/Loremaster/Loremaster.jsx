import React from 'react';
import './Loremaster.scss';
import ProjectPage from '../ProjectPage';

export const title = 'Project Loremaster';
export const blurb = 'Web app designed to organize and automate parts of Dungeons & Dragons';
export const date = 'January 2019 - Present';

const Loremaster = () => (
  <ProjectPage
    title={title}
    github="https://github.com/HeadassHouse/loremaster-backend"
    techStack={['React', 'NodeJS', 'GraphQL', 'MongoDB']}
    sections={[
      {
        key: 'under-construction',
        parts: [
          {
            key: 'under-construction',
            title: 'Under Construction',
            body: 'This page is currently under construction, come back later!',
          },
        ],
      },
      // {
      //   key: 'tldr',
      //   parts: [
      //     {
      //       key: 'tldr-content',
      //       title: 'TLDR',
      //       body: '',
      //     },
      //   ],
      // },
    ]}
  />
);

export default Loremaster;

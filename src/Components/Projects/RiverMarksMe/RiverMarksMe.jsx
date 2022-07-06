import React from 'react';
import ProjectPage from '../ProjectPage';
import './RiverMarksMe.scss';

export const title = 'rivermarks.me';
export const blurb = 'Personal website designed like a terminal to offer a unique way to view my accomplishments';
export const date = 'January 2019 - Present';

const RiverMarksMe = () => (
  <ProjectPage
    title={title}
    github="https://github.com/rmarks6767/rivermarks.me"
    website="https://rivermarks.me"
    techStack={['React', 'NodeJS', 'Sass']}
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

export default RiverMarksMe;

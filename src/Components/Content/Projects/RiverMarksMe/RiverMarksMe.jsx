import React from 'react';
import ProjectPage from '../ProjectPage';

const RiverMarksMe = () => (
  <ProjectPage
    title="rivermarks.me"
    github="https://github.com/rmarks6767/rivermarks.me"
    website="https://rivermarks.me"
    techStack={['React', 'NodeJS', 'Sass']}
    sections={[
      {
        key: 'tldr',
        parts: [
          {
            key: 'tldr-content',
            title: 'My Personal Website',
            body: (
              <div className="body-paragraph">
                This is my personal website, a UNIX-terminal themed
                view of my accomplishments and other fun things. It is written
                using React, Sass, and NodeJS. The files are built using Webpack
                and served on Digital Ocean&apos;s platform. Feel free to check
                out all the cool easter eggs scattered all about the site!
              </div>
            ),
          },
        ],
      },
    ]}
  />
);

export default RiverMarksMe;

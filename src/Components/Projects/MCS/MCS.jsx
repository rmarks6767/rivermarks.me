import React from 'react';
import ProjectPage from '../ProjectPage';
import Minecraft from '../../../public/assets/mcs.webp';
import MCSStore from '../../../public/assets/mcs-store.webp';
import './MCS.scss';

export const title = 'Charity Stream';
export const blurb = 'Web app created to allow users to buy items and effects for players competing in Minecraft mini-games';
export const date = 'January 2019 - Present';

const MCS = () => (
  <ProjectPage
    title="Minecraft Charity Stream"
    github="https://github.com/aidan-brown/Charity-Stream-Web-App"
    website="https://minecraftstream.csh.rit.edu"
    techStack={['React', 'NodeJS', 'Sass', 'MySQL']}
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
      //   key: 'intro',
      //   parts: [
      //     {
      //       key: 'mcs-logo',
      //       lg: 4,
      //       body: (
      //         <img
      //           style={{ borderRadius: '15px' }}
      //           height="300px"
      //           width="300px"
      //           src={Minecraft}
      //           alt="Minecraft"
      //         />
      //       ),
      //     },
      //     {
      //       key: 'what-is-the-stream',
      //       lg: 8,
      //       title: 'What is the Minecraft Charity Stream?',
      //       body: 'The Minecraft Charity Stream (MCS) is an annual event hosted by Computer Science House (CSH) that has players compete in Minecraft mini-games to raise money for a chosen charity. Over the 4 years this event has been going on, we have raised over $3,500 for various charities!',
      //     },
      //   ],
      // },
      // {
      //   key: 'frontend-app',
      //   parts: [
      //     {
      //       key: 'frontend-content',
      //       title: 'Frontend Application',
      //       body: 'The frontend application was the front facing portion of the event, allowing users to give items, effects, and spawn mobs on their favorite players. The application itself is written in React with SASS and other web technologies used.',
      //     },
      //     {
      //       key: 'frontend-store-image',
      //       body: (
      //         <img
      //           style={{ width: '85%', borderRadius: '15px' }}
      //           src={MCSStore}
      //           alt="Minecraft Charity Stream Store Page"
      //         />
      //       ),
      //     },
      //   ],
      // },
      // {
      //   key: 'backend-app',
      //   parts: [
      //     {
      //       key: 'backend-content',
      //       title: 'Backend Application',
      //       body: 'The backend application was what controlled running commands against the Minecraft server as well as processed payments through Just Giving',
      //     },
      //   ],
      // },
      // {
      //   key: 'tldr',
      //   parts: [
      //     {
      //       key: 'tldr-content',
      //       title: 'TLDR',
      //       body: 'TLDR: Charity Stream application written in React and NodeJS to facilitate purchases against Just Giving, a charity donation website. These donations were used to give players items, effects, and mobs while they played Minecraft mini-games. I personally wrote an admin panel allowing admins to change pricing for items, run commands against the Minecraft server, and many other related functions. I also wrote the entire backend utilizing MySQL and NodeJS. I also developed a pattern for ',
      //     },
      //   ],
      // },
    ]}
  />
);

export default MCS;

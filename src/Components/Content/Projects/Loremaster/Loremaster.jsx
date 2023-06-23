import React from 'react';
import ProjectPage from '../ProjectPage';

const Loremaster = () => (
  <ProjectPage
    title="Project Loremaster"
    github="https://github.com/HeadassHouse/loremaster-backend"
    techStack={['React', 'NodeJS', 'GraphQL', 'MongoDB']}
    sections={[
      {
        key: 'intro',
        parts: [
          {
            key: 'what-is-loremaster',
            title: 'What is Project Loremaster?',
            body: (
              <div className="body-paragraph">
                Project Loremaster is an automated Dungeons and Dragons (DND) system that allows
                players to manage their character, maps, encounters, and many
                other aspects of a DND campaign.
              </div>
            ),
          },
        ],
      },
      {
        key: 'backend-app',
        parts: [
          {
            key: 'graphql-backend',
            title: 'MongoDB and GraphQL Backend',
            body: (
              <div className="body-paragraph">
                The major piece that I worked on personally was the backend
                application, which was written in NodeJS with Express to serve
                HTTP requests. To access the data layer, a GraphQL middleware was
                introduced to make it easier to modularize what data was returned.
                This GraphQL middleware interacted with a MongoDB (which is the
                easiest database type to use with GraphQL).
              </div>
            ),
          },
          {
            key: 'graphql-backend-parts',
            body: (
              <div className="body-paragraph">
                GraphQL has three major parts, queries, mutations, and subscriptions.
                Each of these naturally played a large part in the design of
                the backend application. The most interesting and challenging part
                of the application was creating the subscription methods and making
                sure all of the clients stay up to date with the server. This was done
                by copying the GraphQL specification.
              </div>
            ),
          },
        ],
      },
      {
        key: 'tldr',
        parts: [
          {
            key: 'tldr-content',
            title: 'TLDR',
            body: (
              <div className="body-paragraph">
                Project Loremaster automates a lot of Dungeons and Dragons campaigns to
                make it easier on the Dungeon Master. Here are some of the things that I
                personally worked on:
                <ul>
                  <li>
                    Designed and developed a character sheet spec that would
                    encompass all types of role playing games
                  </li>
                  <li>
                    Implemented a real time update system for notifying other members
                    of a party that something had happened
                  </li>
                  <li>
                    Implemented a login system for the main website
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ]}
  />
);

export default Loremaster;

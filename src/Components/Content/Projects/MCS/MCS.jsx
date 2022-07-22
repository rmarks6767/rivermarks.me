import React from 'react';
import ProjectPage from '../ProjectPage';
import Minecraft from '../../../../../public/assets/mcs.webp';

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
        key: 'intro',
        parts: [
          {
            key: 'mcs-logo',
            lg: 4,
            shouldSoloRender: true,
            body: (
              <img
                className="mcs-header-image"
                src={Minecraft}
                alt="Minecraft"
              />
            ),
          },
          {
            key: 'what-is-the-stream',
            lg: 8,
            title: 'What is the Minecraft Charity Stream?',
            body: (
              <div className="body-paragraph">
                The Minecraft Charity Stream (MCS) is an annual event,
                hosted by Computer Science House (CSH), that has players
                compete in Minecraft mini-games to raise money for a chosen
                charity. Over the 4 years this event has been going on, we
                have raised over $3,500 for various charities!
              </div>
            ),
          },
        ],
      },
      {
        key: 'apps',
        parts: [
          {
            key: 'apps-in-the-stream',
            title: 'Now, what are the MCS Web Apps?',
            body: (
              <div className="body-paragraph">
                As most applications have nowadays, there is a React and Sass frontend
                with a NodeJS and MySQL backend. These two apps are used in conjunction
                to allow everything from purchasing to running commands against a Minecraft
                server. In the following sections, I will be diving into my roles in both
                applications as well as some of the most challenging parts of the application.
                {' '}
                <i>
                  Reminder that there&apos;s a TLDR at the bottom of the page if you don&apos;t
                  have time to read a lot ;)
                </i>
              </div>
            ),
          },
        ],
      },
      {
        key: 'frontend-app',
        parts: [
          {
            key: 'frontend-content',
            title: 'Frontend Application',
            body: (
              <div className="body-paragraph">
                The frontend application was for the most part designed and created by my good
                friend Aidan Brown, you can check out his site
                {' '}
                <a href="https://aidanbrown.me">here</a>
                .
                {' '}
                Most of my work stemmed from creating a dependent backend application that
                facilitated a lot of the functionality of the MCS. I also created an admin
                panel that would allow quick actions such as adding players, updating prices
                or disabling store items, running custom commands, and getting analytics about
                the backend. All of these interfaces sat behind a little login window that
                could be logged in using basic authentication.
              </div>
            ),
          },
        ],
      },
      {
        key: 'backend-app',
        parts: [
          {
            key: 'backend-content',
            title: 'Backend Application',
            body: (
              <div className="body-paragraph">
                The backend application was designed primarily by myself with influence and help
                from several other people. The application utilized the Express package to act as
                the web server with MySQL to save any data that needed to be propagated. There were
                several complex pieces that facilitated both Minecraft command running and store
                purchases. One of the particularly complex situations involved opening an RCON
                connection against the Minecraft server, which if done too frequently, would cause
                the server to both lag and not run commands. To solve this, I developed a cron job
                that would query a command table and run the top 20 commands every several seconds.
                If the RCON connection failed, which would be due to high command volume, it would
                save the commands that were not run and try again on another instance of the cron
                job. Other pieces of the application featured complex pieces of logic, such as
                processing shopping carts to make purchases and verifying purchases through the
                Just Giving API.
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
                The Minecraft Charity Stream leveraged two apps to allow users to
                interact with those playing mini-games in Minecraft. I personally
                contributed to the following functionality and designs.
                <ul>
                  <li>
                    Developed admin panel for managing various parts of the Minecraft
                    Server and store page
                  </li>
                  <li>
                    Designed and implemented resource efficient pattern for running
                    many Minecraft commands against the server using a cron job
                  </li>
                  <li>
                    Developed cart verifier to make sure all purchases were valid
                  </li>
                  <li>
                    Facilitated purchase verifications of Just Giving to ensure no
                    extraneous commands were run without purchase
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

export default MCS;

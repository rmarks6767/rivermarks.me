import React from 'react';
import './Home.scss';
import LMLogo from '../../../public/assets/lm-logo.png';
import TLLogo from '../../../public/assets/thor-labs-logo.png';
import CTCTLogo from '../../../public/assets/ctct-logo.png';
import Experience from '../Experience';

const Home = () => {
  const experiences = [{
    logoImage: LMLogo,
    logoAlt: 'Liberty Mutual Logo',
    companyName: 'Liberty Mutual Insurance',
    companyTitle: 'Software Engineer Intern',
    companyDate: 'May 2021 - Aug 2021',
    workTasks: [
      'Created several A/B tests with new experiences in an app for 3rd party aggregators (Shipwright)',
      "Developed pattern in Shipwright that didn't preemptively make expensive CarFax Calls",
      'Lead accessibility review of major update in Shipwright using Accessibility Insights for Web',
      'Utilized React, Jest, and TestCafe to add additional features and updates to Shipwright',
    ],
  },
  {
    logoImage: CTCTLogo,
    logoAlt: 'Constant Contact Logo',
    companyName: 'Constant Contact',
    companyTitle: 'Software Engineer Intern',
    companyDate: 'Aug 2020 - May 2021',
    workTasks: [
      'Piloted a new chatbot product offering, developing a rough prototype in NodeJS and React',
      "Implemented features as a wrapper around an existing AI company's API to assist in custom content injection, customer customization, and generalization of their product offering",
      'Rewrote prototyped NodeJS backend in Java Spring Boot with a MySQL database',
      "Solved complex problems that arose when generalizing the AI company's application",
      'Delivered product offering to head of engineering, giving greenlight for 2021 road map',
    ],
  },
  {
    logoImage: LMLogo,
    logoAlt: 'Liberty Mutual Logo',
    companyName: 'Liberty Mutual Insurance',
    companyTitle: 'Software Engineer Intern',
    companyDate: 'May 2020 - Aug 2020',
    workTasks: [
      'Designed and implemented a NodeJS AWS Lambda for shortening URLs',
      'Built mock of AWS Lex using React and NodeJS to hold state of conversation in a local env',
      'Built a method to run AWS Lambdas locally using SAM',
      'Wrote unit tests using the Jest framework',
    ],
  },
  {
    logoImage: TLLogo,
    logoAlt: 'Thor Labs Inc. Logo',
    companyName: 'Thor Labs Inc.',
    companyTitle: 'Software Engineer Intern',
    companyDate: 'May 2019 - Aug 2019',
    workTasks: [
      'Accomplished massive speed increase from C# .Net Core API by using GraphQL',
      'Developed a translation between GraphQL queries and SQL selects using LINQ',
      'Load tested C# API using Locust.IO and Python',
    ],
  }];

  return (
    <div className="home">
      <div className="intro">
        <h1 className="name">River Marks</h1>
        <h2 className="title">Full Stack Software Engineer</h2>
      </div>
      <div className="experiences">
        <h1 className="work-experience">Work Experience</h1>
        <div>
          {experiences.map(({
            logoImage,
            logoAlt,
            companyName,
            companyTitle,
            companyDate,
            workTasks,
          }) => (
            <Experience
              key={companyDate}
              logoImage={logoImage}
              logoAlt={logoAlt}
              companyName={companyName}
              companyTitle={companyTitle}
              companyDate={companyDate}
              workTasks={workTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

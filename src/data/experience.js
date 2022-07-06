import LMLogo from '../public/assets/lm-logo.webp';
import TLLogo from '../public/assets/thor-labs-logo.webp';
import CTCTLogo from '../public/assets/ctct-logo.webp';

const experiences = [{
  key: 'liberty-mutual_2021.exp',
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
  key: 'constant-contact_2020-2021.exp',
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
  key: 'liberty-mutual_2020.exp',
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
  key: 'thor-labs_2019.exp',
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

export default experiences;

import React from 'react';
import './Home.scss';
import { Experience, EXPERIENCES } from '../Experience';
import Mountains from '../../../public/assets/mountains.png';

const Home = () => (
  <div className="home">
    <div style={{ background: `url(${Mountains})` }} className="intro">
      <h1 className="name">River Marks</h1>
      <h2 className="title">Full Stack Software Engineer</h2>
    </div>
    <div className="experiences">
      <h1 className="work-experience">Work Experience</h1>
      <div>
        {EXPERIENCES.map(({
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

export default Home;

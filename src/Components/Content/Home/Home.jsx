import React from 'react';
import './Home.scss';
import { Parallax } from 'react-parallax';
import { Experience, EXPERIENCES } from '../Experience';
import Waterfall from '../../../public/assets/waterfall.png';

const Home = () => (
  <div className="home">
    <Parallax bgImage={Waterfall} bgImageAlt="Waterfall" strength={500} className="intro">
      <h1 className="name">River Marks</h1>
      <h2 className="title">Software Engineer</h2>
    </Parallax>
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

import React from 'react';
import './Home.scss';
import Experience from '../../Experience';
import experiences from '../../../data/experience';
import TextPrint from '../../TextPrint/TextPrint';

const Home = () => (
  <div className="home">
    <div className="intro">
      <TextPrint text="River Marks" />
      {/* <TextPrint text="Full Stack Software Engineer" delay={1.5} /> */}
    </div>

  </div>
);

export default Home;

import React from 'react';
import './Resume.scss';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../../public/resume.pdf';

const Resume = () => (
  <div className="resume">
    <Document file={resume}>
      <Page scale={1} pageNumber={1} />
    </Document>
  </div>
);

export default Resume;

import React from 'react';
import { Nav } from '../Nav';
import { ProjectImage } from '../ProjectImage';
import { data } from '../../data/projectsData';
import { Footer } from '../Footer';

const Work = () => (
  <div>
    <Nav/>
    <div className="flex flex-wrap">
      <ProjectImage projects={data} />
    </div>
    <Footer />
  </div>
);

export default Work;
import React from 'react';

import Header from '../components/Header';
import Project from '../components/Project';

const ProjectContainer = ({ project }) => (
  <div id="project-container" className={`project-wrapper project-${project.name}`}>
    <Header title={project.title} />
    <div id="page-body">
      <Project project={project} />
    </div>
  </div>
);

export default ProjectContainer;

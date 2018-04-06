import React from 'react';

import ProjectNavContainer from '../containers/ProjectNavContainer';

import Gallery from './Gallery';

const Project = ({ project }) => (
  <div id="project-page">
    <p>{project.body}</p>
    <Gallery images={project.gallery} />
    <ProjectNavContainer/>
  </div>
);

export default Project

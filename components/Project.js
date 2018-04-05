import React from 'react';

import ProjectsNavContainer from '../containers/ProjectsNavContainer';

import Gallery from './Gallery';

const Project = ({ project }) => (
  <div id="Project-page">
    <p>{project.body}</p>
    <Gallery images={project.gallery} />
    <ProjectsNavContainer/>
  </div>
);

export default Project

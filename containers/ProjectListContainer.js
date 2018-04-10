import React from 'react';

const ProjectListContainer = ({ project }) => (
  <div id="project-list-container" className={`project-wrapper project-${project.name}`}>
    <Header title={project.title} />
    <div id="page-body">
      <Project project={project} />
    </div>
  </div>
);

export default ProjectListContainer;

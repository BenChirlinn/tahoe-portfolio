import React from 'react';

const ProjectContainer = ({ match }) => (
  <div>
    <p>I'm a project! {match.params.name}</p>
  </div>
);

export default ProjectContainer;

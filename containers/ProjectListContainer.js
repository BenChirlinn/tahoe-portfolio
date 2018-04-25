import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import ProjectListItem from '../components/ProjectListItem';

const ProjectListContainer = ({ projectData }) => (
  <div id="project-list-container" className="homepage-section">
    <div className='project-list-body'>
      <h2>Experience</h2>
    </div>
    {
      _.map(projectData, (project, index, projectData) =>
        project.display && <ProjectListItem key={index} project={project} index={index} total={projectData.length} />
      )
    }
  </div>
);

ProjectListContainer.propType = {
  projectData: PropTypes.object.isRequired
};

export default ProjectListContainer;

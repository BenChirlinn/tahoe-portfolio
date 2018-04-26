import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import ExpandableListItem from '../components/ExpandableListItem';

const ProjectListContainer = ({ projectData }) => (
  <div id="project-list-container" className="homepage-section">
    <div className='project-list-body'>
      <h2>Projects</h2>
    </div>
    {
      _.map(projectData, (project, index, projectData) =>
        project.display && <ExpandableListItem key={index} item={project} itemType='project' index={index} total={projectData.length} />
      )
    }
  </div>
);

ProjectListContainer.propType = {
  projectData: PropTypes.object.isRequired
};

export default ProjectListContainer;

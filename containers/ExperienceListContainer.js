import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import ExperienceListItem from '../components/ExperienceListItem';

const ExperienceListContainer = ({ projectData }) => (
  <div id="project-list-container" className="homepage-section">
    <div className='project-list-body'>
      <h2>Experience</h2>
    </div>
    {
      _.map(projectData, (project, index, projectData) =>
        project.homeProject && <ExperienceListItem key={index} project={project} index={index} total={projectData.length} />
      )
    }
  </div>
);

ExperienceListContainer.propType = {
  projectData: PropTypes.object.isRequired
};

export default ExperienceListContainer;

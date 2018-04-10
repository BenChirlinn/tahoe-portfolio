import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import ExperienceListItem from '../components/ExperienceListItem';

const ExperienceListContainer = ({ experienceData }) => (
  <div id="experience-list-container" className="homepage-section">
    <div className='experience-list-body'>
      <h2>Experience</h2>
    </div>
    {
      _.map(experienceData, (experience, index, experienceData) =>
        experience.display && <ExperienceListItem key={index} experience={experience} index={index} total={experienceData.length} />
      )
    }
  </div>
);

ExperienceListContainer.propType = {
  experienceData: PropTypes.object.isRequired
};

export default ExperienceListContainer;

import React from 'react';
import PropTypes from 'prop-types';

import ExperienceListContainer from './ExperienceListContainer';
import ProjectListContainer from './ProjectListContainer';
import SocialContainer from './SocialContainer';
import FooterContainer from './FooterContainer';

import Header from '../components/Header';
import HomepageBody from '../components/HomepageBody';

const HomepageContainer = ({ experienceData, projectData }) => {
  return (
    <div id='homepage-container'>
      <Header title='Benjamin<br/>Chirlinn' />
      <div id='page-body'>
        <HomepageBody />
        <ExperienceListContainer experienceData={experienceData}/>
        <ProjectListContainer projectData={projectData}/>
        <SocialContainer />
        <FooterContainer />
      </div>
    </div>
  );
}

HomepageContainer.propType = {
  experienceData: PropTypes.object.isRequired
};

export default HomepageContainer;

import React from 'react';
import PropTypes from 'prop-types';

import SocialContainer from './SocialContainer';
import ExperienceListContainer from './ExperienceListContainer';
import FooterContainer from './FooterContainer';

import Header from '../components/Header';
import HomepageBody from '../components/HomepageBody';

const HomepageContainer = ({ experienceData }) => {
  return (
    <div id='homepage-container'>
      <Header title='Benjamin<br/>Chirlin' />
      <div id='page-body'>
        <HomepageBody />
        <ExperienceListContainer experienceData={experienceData}/>
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

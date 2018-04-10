import React from 'react';
import PropTypes from 'prop-types';

import SocialContainer from './SocialContainer';
import ExperienceListContainer from './ExperienceListContainer';
import FooterContainer from './FooterContainer';

import Header from '../components/Header';
import HomepageBody from '../components/HomepageBody';

const HomepageContainer = ({ projectData }) => {
  return (
    <div id="homepage-container">
      <Header title="Benjamin<br/>Chirlin" />
      <HomepageBody />
      <ExperienceListContainer projectData={projectData}/>
      <SocialContainer />
      <FooterContainer />
    </div>
  );
}

HomepageContainer.propType = {
  projectData: PropTypes.object.isRequired
};

export default HomepageContainer;

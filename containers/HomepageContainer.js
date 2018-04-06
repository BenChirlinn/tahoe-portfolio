import React from 'react';
import PropTypes from 'prop-types';

import ProjectListContainer from './ProjectListContainer'

import Header from '../components/Header';
import Homepage from '../components/Homepage';

const HomepageContainer = ({ projectData }) => {
  return (
    <div id="homepage-container">
      <Header title="Benjamin<br/>Chirlin" />
      <div id="page-body">
        <Homepage />
      </div>
      <ProjectListContainer projectData={projectData}/>
    </div>
  );
}

HomepageContainer.propType = {
  projectData: PropTypes.object.isRequired
};

export default HomepageContainer;

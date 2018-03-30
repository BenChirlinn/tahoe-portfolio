import React from 'react';

import Header from '../components/Header';
import UnderConstruction from '../components/UnderConstruction';

const Homepage = () => {
  return (
    <div id="homepage-container">
      <Header title="Benjamin<br/>Chirlin" />
      <div id="page-body">
        <UnderConstruction/>
      </div>
    </div>
  );
}

export default Homepage;

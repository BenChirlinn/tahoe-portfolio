import React from 'react';

import Header from '../components/Header';
import Homepage from '../components/Homepage';

const HomepageContainer = () => {
  return (
    <div id="homepage-container">
      <Header title="Benjamin<br/>Chirlin" />
      <div id="page-body">
        <Homepage />
      </div>
    </div>
  );
}

export default HomepageContainer;

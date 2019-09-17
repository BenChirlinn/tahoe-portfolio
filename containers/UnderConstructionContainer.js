import React from 'react';

import Header from '../components/Header';
import UnderConstruction from '../components/UnderConstruction';

const UnderConstructionContainer = ({ project }) => (
  <div id='under-construction-container'>
    <Header title='Benjamin<br/>Chirlinn' />
    <div id='page-body' className='under-construction-body'>
      <UnderConstruction />
    </div>
  </div>
);

export default UnderConstructionContainer;

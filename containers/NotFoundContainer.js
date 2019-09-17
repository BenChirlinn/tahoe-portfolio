import React from 'react';

import Header from '../components/Header';

const NotFoundContainer = ({ project }) => (
  <div id='not-found-container'>
    <Header title='Benjamin<br/>Chirlinn' />
    <div id='page-body'>
      <h2>Page Not Found</h2>
      <p>Sorry, that page couldn't be found. Please return to the <a href='/' title='Home again, home again!'>homepage</a> to find your way. Thanks for visiting!</p>
    </div>
  </div>
);

export default NotFoundContainer;

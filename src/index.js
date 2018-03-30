import React from 'react';
import ReactDOM from 'react-dom';

import style from "./styles/main.less";

import fbImage from './images/social/fb-image.jpg';
import twitterImage from './images/social/twitter-image.jpg';

// main app
import App from '../containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App env={process.env.NODE_ENV} />, document.getElementById('app'))

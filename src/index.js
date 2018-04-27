import React from 'react';
import ReactDOM from 'react-dom';

import style from "./styles/main.less";

import fbImage from './images/social/fb-image.jpg';
import twitterImage from './images/social/twitter-image.jpg';
import mechanismImage from './images/experience/mechanism.svg';
import mindsnacksImage from './images/experience/mindsnacks.svg';
import upennImage from './images/experience/upenn.svg';
import wiredImage from './images/experience/wired.svg';
import linkedinSprite from './images/sprites/linkedin.svg';
import githubSprite from './images/sprites/github.svg';
import twitterSprite from './images/sprites/twitter.svg';
import chevronSprite from './images/sprites/chevron.svg';

// main app
import App from '../containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App env={process.env.NODE_ENV} underConstruction={process.env.UNDER_CONSTRUCTION} />, document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';

import style from "./styles/main.less";

import fbImage from './images/file-loader/fb-image.jpg';
import twitterImage from './images/file-loader/twitter-image.jpg';
import mechanismImage from './images/url-loader/experience/mechanism.svg';
import mindsnacksImage from './images/url-loader/experience/mindsnacks.svg';
import upennImage from './images/url-loader/experience/upenn.svg';
import wiredImage from './images/url-loader/experience/wired.svg';
import linkedinSprite from './images/url-loader/sprites/linkedin.svg';
import githubSprite from './images/url-loader/sprites/github.svg';
import twitterSprite from './images/url-loader/sprites/twitter.svg';
import chevronSprite from './images/url-loader/sprites/chevron.svg';

// main app
import App from '../containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App env={process.env.NODE_ENV} underConstruction={process.env.UNDER_CONSTRUCTION} />, document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';

import style from "./styles/main.less";

import fbImage from './images/file-loader/fb-image.jpg';
import twitterImage from './images/file-loader/twitter-image.jpg';
import mechanismImage from './images/file-loader/experience/mechanism.svg';
import mindsnacksImage from './images/file-loader/experience/mindsnacks.svg';
import twitchImage from './images/file-loader/experience/twitch.svg';
import upennImage from './images/file-loader/experience/upenn.svg';
import wiredImage from './images/file-loader/experience/wired.svg';
import linkedinSprite from './images/file-loader/linkedin.svg';
import githubSprite from './images/file-loader/github.svg';
import twitterSprite from './images/file-loader/twitter.svg';
import chevronSprite from './images/file-loader/chevron.svg';

// main app
import App from '../containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App env={process.env.NODE_ENV} underConstruction={process.env.UNDER_CONSTRUCTION} />, document.getElementById('app'))

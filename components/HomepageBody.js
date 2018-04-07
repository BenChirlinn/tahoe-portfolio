import React from 'react';

import { socialLinks } from '../config/social';
import SocialLink from './SocialLink';

const HomepageBody = () => (
  <div id='homepage-component'>
    <div className='homepage-section'>
      <p>Welcome. I am a fullstack web developer in the Bay Area. Nothing makes me happier than beautiful site with beautiful code beneath the surface.</p>
      <p>Currently I’m looking for my next big move.</p>
      <p>You can find me elsewhere around the web at {
        socialLinks.map((platform, index, socialLinks) => <span key={index}>{index === socialLinks.length - 1 ? 'and ' : '' }<SocialLink title={platform.title} url={platform.url} icon={false} />{index <socialLinks.length - 1 ? ', ' : ''}</span>)
      }.</p>
    </div>
  </div>
);

export default HomepageBody

import React from 'react';

import { socialLinks } from '../config/social';
import SocialLink from './SocialLink';

const HomepageBody = () => (
  <div id='homepage-component'>
    <div className='homepage-section'>
      <p>Welcome. I am a full stack engineer in the Bay Area and nothing makes me happier than a beautiful site with gorgeous code beneath the surface. Most recently I've been working on Go microservices, Graph QL implementations, and exciting collaborative online tools all at massive scale.</p>
      <p>Currently I’m working on exciting creator - focused projects at <a href="https: //www.twitch.tv"> Twitch.tv </a>. If you contact me you can drop a line at <a title='Email me' href='mailto:info@benjaminchirlin.com' target='_blank'>info@benjaminchirlin.com</a>.</p>
      <p>You can find me elsewhere around the web at {
        socialLinks.map((platform, index, socialLinks) => <span key={index}>{index === socialLinks.length - 1 ? 'and ' : '' }<SocialLink title={platform.title} url={platform.url} icon={false} />{index <socialLinks.length - 1 ? ', ' : ''}</span>)
      }.</p>
    </div>
  </div>
);

export default HomepageBody

import React from 'react';

import { socialLinks } from '../config/social';
import SocialLink from '../components/SocialLink';

const SocialContainer = () => (
  <div id='social-container'>
    <p>You can find me elsewhere around the web below:</p>
    <div class='social-wrapper homepage-section'>
      {
        socialLinks.map((platform, index, socialLinks) =>
          <SocialLink title={platform.title} url={platform.url} index={index} total={socialLinks.length} />
        )
      }
    </div>
  </div>
);

export default SocialContainer;

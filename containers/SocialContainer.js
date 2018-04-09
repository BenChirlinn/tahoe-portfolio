import React from 'react';

import classNames from 'classnames';

import { socialLinks } from '../config/social';
import SocialLink from '../components/SocialLink';

const SocialContainer = () => (
  <div id='social-container'>
    <div className='social-wrapper'>
      {
        socialLinks.map((platform, index, socialLinks) =>
          <div key={index} className={classNames(
            'social-link',
            `social-link-${index}`,
            { 'first-social-link': index === 0 },
            { 'last-social-link': index >= socialLinks.length-1 }
          )}>
            <SocialLink title={platform.title} url={platform.url} icon={platform.icon} />
          </div>
        )
      }
    </div>
  </div>
);

export default SocialContainer;

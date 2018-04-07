import React from 'react';

const SocialLink = ({ title, url, icon }) => (
  <a href={url} title={title} target='_blank' className='social-link-anchor'>
    {icon ? (
      <img alt={title} title={title} src={`../src/images/sprites/${icon}`} />
    ) : title}
  </a>
);

export default SocialLink

import React from 'react';
import ReactSVG from 'react-svg';

const SocialLink = ({ title, url, icon }) => (
  <a href={url} title={title} target='_blank' className='social-link-anchor'>
    {icon ? (
      <ReactSVG path={`../src/images/url-loader/sprites/${icon}`} />
    ) : title}
  </a>
);

export default SocialLink

import React from 'react';

import classNames from 'classnames';

const SocialLink = ({ title, url, index, total }) => (
  <div className={classNames('social-link', `social-link-${index}`, { 'first-social-link': index === 0 }, { 'last-social-link': index >= total-1 })}>
    <a href={url} title={title} target='_blank'>{title}</a>
  </div>
);

export default SocialLink

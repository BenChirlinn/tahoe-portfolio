import React from 'react';

import classNames from 'classnames';

const Slide = ({ slide, index, total }) => (
  <div className={classNames('slide', `slide-${index}`, { 'first-slide': index === 0 }, { 'last-slide': index >= total-1 })}>
    <img src={slide.img} />
    <p dangerouslySetInnerHTML={{__html: slide.caption}}/>
  </div>
);

export default Slide

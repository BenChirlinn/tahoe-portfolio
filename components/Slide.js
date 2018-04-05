import React from 'react';

const Slide = ({slide, index, total}) => (
  <div className={`slide slide-${index}${index === 0 ? ' first' : ''}${index <= total-1 ? ' last' : ''}`}>
    <img src={slide.img} />
    <p dangerouslySetInnerHTML={{__html: slide.caption}}/>
  </div>
);

export default Slide

import React from 'react';

import Slide from './Slide';

const Gallery = ({ images }) => (
  <div className="gallery">
    {
      images.map((slide, index, images) => 
        <Slide slide={slide} index={index} total={images.length} />
      )
    }
  </div>
);

export default Gallery

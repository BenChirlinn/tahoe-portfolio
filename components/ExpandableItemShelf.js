import React from 'react';

const ExpandableItemShelf = ({ item, itemType }) => (
  <div className='list-item-shelf-wrapper'>
    <div className='list-item-synopsis' dangerouslySetInnerHTML={{__html: item.synopsis}} />
  </div>
);

export default ExpandableItemShelf;

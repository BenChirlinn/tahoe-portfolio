import React from 'react';

import _ from 'lodash';

const ExpandableItemTop = ({ item, itemType }) => (
  <div className='list-item-shelf-top'>
    {itemType === 'experience' && <img alt={`${item.title} Logo`} title={item.title} src={`../src/images/url-loader/experience/${item.logo}`} />}
    {itemType === 'project' && <h3 className='list-item-title'>{item.title}</h3>}
    <h4 className='list-item-subtitle' dangerouslySetInnerHTML={{__html: _.get(item, 'positionTitle', item.subtitle)}} />
  </div>
);

export default ExpandableItemTop

import React from 'react';

import _ from 'lodash';

const ExpandableItemShelf = ({ item, itemType }) => {
  let extraContent = '';
  if (itemType === 'project') {
    if (!_.isEmpty(item.skills)) {
      const skillList = item.skills.reduce((skillString, skill, index, skills) => (index < skills.length - 1 ? `${skillString}${skill}, ` : `${skillString}${skill}`), '');
      console.log(skillList);
      extraContent += `<p>Skills: ${skillList}</p>`;
    }

    if (_.get(item, 'link', false)) {
      extraContent += `<p><a href='${item.link}' title='${item.title}' target='_blank'>Visit Project</a></p>`;
    }
  }

  return <div className='list-item-shelf-wrapper'>
    <div className='list-item-synopsis' dangerouslySetInnerHTML={{__html: item.synopsis + extraContent}} />
    </div>
};

export default ExpandableItemShelf;

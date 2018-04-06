import React, {Component} from 'react';

import classNames from 'classnames';

class ProjectListItem extends Component {
  render() {
    const {project, index, total} = this.props;

    return (
      <div className={classNames('project-list-item', `project-project-${project.name}`, `project-${index}`, { 'first-project': index === 0 }, { 'last-project': index >= total-1 })}>
        <div className='project-header'>
          <div className='project-shelf-top'>
            <img alt={`${project.title} Logo`} title={project.title} src={`../src/images/projects/logos/${project.logo}`} />
            <h4 className='project-position' dangerouslySetInnerHTML={{__html: project.positionTitle}} />
          </div>
          <div className='project-shelf-open' />
        </div>
        <div className='project-synopsis-wrapper'>
          <div className='project-synopsis' dangerouslySetInnerHTML={{__html: project.synopsis}} />
        </div>
      </div>
    );
  }
};

export default ProjectListItem

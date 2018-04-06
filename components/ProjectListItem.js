import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.toggleShelf = this.toggleShelf.bind(this);
  }

  toggleShelf() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const {project, index, total, isOpen = false} = this.props;

    return (
      <div className={classNames('project-list-item', `project-project-${project.name}`, `project-${index}`, { 'first-project': index === 0 }, { 'last-project': index >= total-1 })}>
        <div className='project-header' onClick={this.toggleShelf}>
          <div className='project-shelf-top'>
            <img alt={`${project.title} Logo`} title={project.title} src={`../src/images/projects/logos/${project.logo}`} />
            <h4 className='project-position' dangerouslySetInnerHTML={{__html: project.positionTitle}} />
          </div>
          <button className={classNames(
            'project-shelf-toggle',
            {
              'toggle-inactive': !this.state.isToggleOn,
              'toggle-active': this.state.isToggleOn
            })} />
        </div>
        <div className={classNames(
            'project-shelf-wrapper',
            {
              'project-shelf-closed': !this.state.isToggleOn,
              'project-shelf-open': this.state.isToggleOn
            })}>
          <div className='project-synopsis' dangerouslySetInnerHTML={{__html: project.synopsis}} />
        </div>
      </div>
    );
  }
};

ProjectListItem.propType = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  isOpen: PropTypes.bool
};

ProjectListItem.defaultProps = {
  isOpen: false
};

export default ProjectListItem

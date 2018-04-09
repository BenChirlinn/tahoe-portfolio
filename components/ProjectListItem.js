import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.toggleShelf = this.toggleShelf.bind(this);
  }

  toggleShelf() {
    // Scroll shelf into view
    ReactDOM.findDOMNode(this).scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });

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
            'project-shelf-toggle',
            {
              'toggle-inactive': !this.state.isToggleOn,
              'toggle-active': this.state.isToggleOn
            })} path='../src/images/sprites/chevron.svg' />
        </div>
        <AnimateHeight duration={500} height={this.state.isToggleOn ? 'auto' : 0}>
          <div className='project-shelf-wrapper'>
            <div className='project-synopsis' dangerouslySetInnerHTML={{__html: project.synopsis}} />
          </div>
        </AnimateHeight>
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

ProjectListItem.defaultprops = {
  isOpen: false
};

export default ProjectListItem

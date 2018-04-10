import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

class ExperienceListItem extends Component {
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
    const {experience, index, total, isOpen = false} = this.props;

    return (
      <div className={
        classNames(
          'experience-list-item',
          `experience-${experience.name}`,
          `experience-${index}`,
          {
            'first-experience': index === 0 ,
            'last-experience': index >= total-1,
            'toggle-inactive': !this.state.isToggleOn,
            'toggle-active': this.state.isToggleOn
          }
        )
      }>
        <div className='experience-header' onClick={this.toggleShelf}>
          <div className='experience-shelf-top'>
            <img alt={`${experience.title} Logo`} title={experience.title} src={`../src/images/experience/${experience.logo}`} />
            <h4 className='experience-position' dangerouslySetInnerHTML={{__html: experience.positionTitle}} />
          </div>
          <ReactSVG className={classNames(
            'experience-shelf-toggle'
            )} path='../src/images/sprites/chevron.svg' />
        </div>
        <AnimateHeight duration={500} height={this.state.isToggleOn ? 'auto' : 0}>
          <div className='experience-shelf-wrapper'>
            <div className='experience-synopsis' dangerouslySetInnerHTML={{__html: experience.synopsis}} />
          </div>
        </AnimateHeight>
      </div>
    );
  }
};

ExperienceListItem.propType = {
  experience: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  isOpen: PropTypes.bool
};

ExperienceListItem.defaultprops = {
  isOpen: false
};

export default ExperienceListItem

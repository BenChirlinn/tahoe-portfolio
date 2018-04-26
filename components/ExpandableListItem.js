import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

import ExpandableItemTop from './ExpandableItemTop';
import ExpandableItemShelf from './ExpandableItemShelf';

class ExpandableListItem extends Component {
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
    const {item, itemType, index, total, isOpen = false} = this.props;

    return (
      <div className={
        classNames(
          'expandable-list-item',
          `${itemType}-list-item`,
          `${itemType}-${item.name}`,
          `${itemType}-${index}`,
          {
            'first-item': index === 0 ,
            'last-item': index >= total-1,
            'toggle-inactive': !this.state.isToggleOn,
            'toggle-active': this.state.isToggleOn
          }
        )
      }>
        <div className='list-item-header' onClick={this.toggleShelf}>
          <ExpandableItemTop item={item} itemType={itemType} />
          <ReactSVG className={classNames(
            'list-item-shelf-toggle'
            )} path='../src/images/sprites/chevron.svg' />
        </div>
        <AnimateHeight duration={500} height={this.state.isToggleOn ? 'auto' : 0}>
          <ExpandableItemShelf item={item} itemType={itemType} />
        </AnimateHeight>
      </div>
    );
  }
};

ExpandableListItem.propType = {
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  isOpen: PropTypes.bool
};

ExpandableListItem.defaultprops = {
  isOpen: false
};

export default ExpandableListItem

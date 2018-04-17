import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import _ from 'lodash';
import classNames from 'classnames';

import { initHeaderHeight } from '../config/layout';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollY: 0};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    const scrollY = window.scrollY;
    const headerHeight = initHeaderHeight - scrollY <= 40 ? 40 : initHeaderHeight - scrollY;
    // Cap top position such that 40px sticks out
    const headerTop = headerHeight <= 40 ? 40 - initHeaderHeight : -scrollY;
    console.log(headerHeight);

    this.setState(prevState => ({
      scrollY,
      headerTop,
      headerHeight,
      minified: headerHeight <= 40
    }));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {title} = this.props;

    return (
      <div>
        <div
          id='page-header'
          style={{
            height: this.state.headerHeight
          }}
          className={
            classNames('sunset-texture', {minified: this.state.minified})
          }>
          <div className='sun' />
          <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          <img className='mountains' src='../src/images/sprites/mountains.svg' />
        </div>
        <div id='page-header-spacer' />
      </div>
    );
  }
};

Header.propType = {
  title: PropTypes.string.isRequired
};

export default Header;

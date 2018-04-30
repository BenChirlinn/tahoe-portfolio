import React, {Component} from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import classNames from 'classnames';

import { minHeaderHeight, barHeaderHeight } from '../config/layout';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollY: 0};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    const scrollY = window.scrollY;
    const initHeaderHeight = Math.max(window.innerHeight / 2, minHeaderHeight);
    const headerHeight = Math.max(initHeaderHeight - scrollY, barHeaderHeight);

    this.setState(prevState => ({
      headerHeight,
      minified: headerHeight <= barHeaderHeight
    }));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  }

  render() {
    const {title} = this.props;

    return (
      <header>
        <div
          id='page-header'
          style={{
            height: this.state.headerHeight,
            minHeight: this.state.headerHeight
          }}
          className={
            classNames('sunset-texture', {minified: this.state.minified})
          }>
          <div className='sun' />
          <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
          <img className='mountains' src='../src/images/url-loader/sprites/mountains.svg' />
        </div>
        <div id='page-header-spacer' />
      </header>
    );
  }
};

Header.propType = {
  title: PropTypes.string.isRequired
};

export default Header;

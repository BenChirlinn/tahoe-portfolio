import React, {Component} from 'react';

import HomepageContainer from './HomepageContainer';

import Header from '../components/Header';
import Body from '../components/Body';

export default class App extends Component {
  render () {
    return (
      <HomepageContainer>
        <Header title="Benjamin Chirlin" />
        <Body/>
      </HomepageContainer>
    );
  }
}

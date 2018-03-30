import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';

class App extends Component {
  componentDidMount() {
    const projects = {
      nosey: {
        title: 'Nosey',
        body: 'A website for my animation',
        gallery: [
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          }
        ]
      },
      'paint-portfolio': {
        title: 'Paint Portfolio Site',
        body: 'A Wordpress website for my portfolio',
        gallery: [
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img caption'
          }
        ]
      }
    };
    this.setState({projects})
  }

  render() {
    // @todo repalce with separate var when no longer under construction
    if (this.props.env === 'production') {
      return <underConstructionContainer />;
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" component={HomepageContainer} />
            <Route path="/project/:name" component={ProjectContainer} />
          </div>
        </Router>
      );
    }
  }
};

App.propType = {
  env: PropTypes.string
};

export default App;

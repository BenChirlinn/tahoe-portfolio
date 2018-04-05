import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import _ from 'lodash';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';

class App extends Component {
  componentWillMount() {
    const projects = {
      nosey: {
        name: 'nosey',
        title: 'Nosey',
        body: 'A website for my animation',
        gallery: [
          {
            img: 'an-img.jpg',
            caption: 'A img 1 caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img 2 caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img 3 caption'
          }
        ]
      },
      'paint-portfolio': {
        name: 'paint-portfolio',
        title: 'Paint Portfolio Site',
        body: 'A Wordpress website for my portfolio',
        gallery: [
          {
            img: 'an-img.jpg',
            caption: 'A img 1 caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img 2 caption'
          },
          {
            img: 'an-img.jpg',
            caption: 'A img 3 caption'
          }
        ]
      }
    };
    this.setState({ projects });
  }

  render() {
    console.log(this.state);
    const { projects = {} } = this.state;
    // console.log(projects);
    // console.log(_.find(projects, p => p.name === 'nosey'));
    // @todo repalce with separate var when no longer under construction
    if (this.props.env === 'production') {
      return <underConstructionContainer />;
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" component={HomepageContainer} />
            {projects && (
              <Route path="/project/:name" render={({ match }) => (
                <ProjectContainer project={ _.find(projects, p => p.name === match.params.name) } />
              )} />
          )}
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

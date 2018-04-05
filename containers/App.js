import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import _ from 'lodash';
import projectData from '../content/projects';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';

class App extends Component {
  componentWillMount() {
    this.setState({ projectData });
  }

  render() {
    console.log(this.state);
    const { projectData = {} } = this.state;
    // console.log(projectData);
    // console.log(_.find(projectData, p => p.name === 'nosey'));
    // @todo repalce with separate var when no longer under construction
    if (this.props.env === 'production') {
      return <underConstructionContainer />;
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" component={HomepageContainer} />
            {projectData && (
              <Route path="/project/:name" render={({ match }) => (
                <ProjectContainer project={ _.find(projectData, p => p.name === match.params.name) } />
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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import _ from 'lodash';
import showdown from 'showdown';
import projectData from '../content/projects';

import { markdownFields } from '../config/content';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';

class App extends Component {
  componentWillMount() {
    this.setState({ projectData });
  }

  render() {
    let { projectData = {} } = this.state;
    const converter = new showdown.Converter();

    // Convert all fields configurated to contain markdown
    projectData = _.mapValues(projectData, project =>
      _.mapValues(project, (value, key) =>
        markdownFields.includes(key) ? converter.makeHtml(value) : value
      )
    );

    // @todo repalce with separate var when no longer under construction
    if (this.props.env === 'production') {
      return <underConstructionContainer />;
    } else {
      return (
        <Router>
          <div>
            {projectData && (
              <Route exact path="/" render={() => (
                <HomepageContainer projectData={projectData} />
              )} />
            )}
            {projectData && (
              <Route path="/project/:name" render={({ match }) => (
                <ProjectContainer project={_.find(projectData, p => p.name === match.params.name)} />
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

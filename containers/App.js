import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import _ from 'lodash';
import showdown from 'showdown';
import experienceData from '../content/experience';
import projectData from '../content/projects';

import { markdownFields } from '../config/content';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';

class App extends Component {
  componentWillMount() {
    this.setState({ experienceData, projectData });
  }

  render() {
    let { experienceData = {}, projectData = {} } = this.state;
    const converter = new showdown.Converter();

    // Convert all fields configurated to contain markdown
    experienceData = _.mapValues(experienceData, project =>
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
            {experienceData && (
              <Route exact path="/" render={() => (
                <HomepageContainer experienceData={experienceData} />
              )} />
            )}
            {experienceData && (
              <Route path="/project/:name" render={
                ({ match }) => {
                  const foundProject = _.find(projectData, p => p.name === match.params.name);

                  // If project should be displayed render route else redirect to 404
                  if(_.get(foundProject, 'display', false)) {
                    return <ProjectContainer project={foundProject} />
                  } else {
                    return <Redirect from='*' to='/404' />;
                  }
                }
              } />
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

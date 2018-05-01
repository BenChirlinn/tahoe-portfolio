import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import _ from 'lodash';
import showdown from 'showdown';
import experienceData from '../content/experience';
import projectData from '../content/projects';

import { markdownFields } from '../config/content';

import HomepageContainer from './HomepageContainer';
import NotFoundContainer from './NotFoundContainer';
import UnderConstructionContainer from './UnderConstructionContainer';
import FooterContainer from './FooterContainer';

class App extends Component {
  componentWillMount() {
    this.setState({ experienceData, projectData });
  }

  fireTracking() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    ReactGA.initialize('UA-21408311-2');
    this.fireTracking();
    let { experienceData = {}, projectData = {} } = this.state;
    const converter = new showdown.Converter({openLinksInNewWindow: true});

    // Filter out any non-displayed data
    experienceData = _.filter(experienceData, experience => experience.display);
    projectData = _.filter(projectData, project => project.display);

    // Convert all fields configurated to contain markdown
    experienceData = _.mapValues(experienceData, experience =>
      _.mapValues(experience, (value, key) =>
        markdownFields.includes(key) ? converter.makeHtml(value) : value
      )
    );
    projectData = _.mapValues(projectData, project =>
      _.mapValues(project, (value, key) =>
        markdownFields.includes(key) ? converter.makeHtml(value) : value
      )
    );

    // @todo replace with separate var when no longer under construction
    if (this.props.underConstruction) {
      return <UnderConstructionContainer />;
    } else {
      return (
        <BrowserRouter onUpdate={this.fireTracking}>
          <Switch>
            {experienceData && (
              <Route exact path="/" render={() => (
                <HomepageContainer experienceData={experienceData} projectData={projectData} />
              )} />
            )}
            <Route component={NotFoundContainer} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
};

App.propType = {
  env: PropTypes.string.isRequired,
  underConstruction: PropTypes.boolean
};

App.defaultprops = {
  underConstruction: false
};

export default App;

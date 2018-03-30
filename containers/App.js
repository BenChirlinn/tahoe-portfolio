import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomepageContainer from './HomepageContainer';
import ProjectContainer from './ProjectContainer';
import ProjectsNavContainer from './ProjectsNavContainer';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/project/:name" component={ProjectContainer} />
      <ProjectsNavContainer/>
    </div>
  </Router>
);

export default App;

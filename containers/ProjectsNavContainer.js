import React from 'react';
import { Link } from "react-router-dom";

const ProjectsNavContainer = () => (
  <div id="projcts-nav">
    <h2>Work & Projects</h2>
    <ul>
      <li>
        <Link to="/project/nosey">Nosey</Link>
      </li>
      <li>
        <Link to="/project/paint-portfolio">Paint Portfolio</Link>
      </li>
    </ul>
  </div>
);

export default ProjectsNavContainer;

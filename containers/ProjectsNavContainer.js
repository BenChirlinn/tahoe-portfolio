import React from 'react';
import { Link } from "react-router-dom";

const ProjectsNavContainer = () => (
  <ul>
    <li>
      <Link to="/project/nosey">Nosey</Link>
    </li>
    <li>
      <Link to="/project/paint-portfolio">Paint Portfolio</Link>
    </li>
  </ul>
);

export default ProjectsNavContainer;

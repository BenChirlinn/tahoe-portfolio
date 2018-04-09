import React from 'react';
import ReactSVG from 'react-svg';

const Header = ({title}) => {
  return (
    <div id="page-header" className="sunset-texture">
      <span className="sun sun-texture"></span>
      <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
      <ReactSVG wrapperClassName="mountains-wrapper" className="mountains" path='../src/images/sprites/mountains.svg' />
    </div>
  );
};

export default Header;

import React from 'react';

const Header = ({title}) => {
  return (
    <div id="page-header">
      <span className="texture sunset-texture"></span>
      <span className="sun"><span className="texture sun-texture"></span></span>
      <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
      <span className="mountains"></span>
    </div>
  );
};

export default Header;

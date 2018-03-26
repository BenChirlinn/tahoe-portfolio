import React from 'react';
import ReactDOM from 'react-dom';

import style from "./styles/main.less";

// main app
import App from '../containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Sally from './sally';

ReactDOM.render(<Sally />, document.getElementById('root2'));

serviceWorker.unregister();

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeSwitcher from './ThemeSwitcher';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

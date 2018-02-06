import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

import './index.css';
import './styles/font-awesome/css/font-awesome.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<Router>
<App />
</Router>
), document.getElementById('root'));
registerServiceWorker();

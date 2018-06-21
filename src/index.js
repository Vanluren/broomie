import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App/>,
// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
	<Router>
		<Route path='/'>
			<App />
		</Route>
	</Router>
	,
// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

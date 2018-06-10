import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Switch,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
			<Switch>
				<Route
					path='/'
					component={App}
				/>
				<Route path='/skader' component={App} />
				<Route path='/klager' component={App} />
			</Switch>
	</Router>
	,
// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

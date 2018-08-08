import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import Home from './views/HomeView/Home.container';
import store from './services/redux/reduxStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route
					path="/"
					component={Home}
				/>
			</Switch>
		</Router>
	</Provider>,
	// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

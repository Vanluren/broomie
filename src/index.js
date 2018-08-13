import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import store from './services/redux/reduxStore';
import PrivateRoute from './commonComponents/PrivateRoute/PrivateRoute.container';
import registerServiceWorker from './registerServiceWorker';
import HomeView from './views/HomeView/Home.container';
import LoginView from './views/LoginView/LoginView.container';
import WithLoadingSpinner from './commonComponents/LoadingSpinner/LoadingSpinner.container';
import { Routes } from './services/router/router';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<WithLoadingSpinner>
				<Switch>
					<Route
						path={Routes.LOGIN.path}
						exact
						component={LoginView}
					/>
					<PrivateRoute>
						<Route
							path={Routes.HOME.path}
							component={HomeView}
						/>
					</PrivateRoute>
				</Switch>
			</WithLoadingSpinner>
		</Router>
	</Provider>,
	// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

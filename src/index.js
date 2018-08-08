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
import Home from './views/HomeView/Home.container';
import LoginView from './views/LoginView/LoginView.container';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route
					path='/login'
					exact
					component={LoginView}
				/>
				<PrivateRoute>
					<Route
						path="/"
						component={Home}
					/>
				</PrivateRoute>
			</Switch>
		</Router>
	</Provider>,
	// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

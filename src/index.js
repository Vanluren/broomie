import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import App from './App';
import store from './services/redux/reduxStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App/>	
	</Provider>,
// eslint-disable-next-line no-undef
	document.getElementById('root'));
registerServiceWorker();

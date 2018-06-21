import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
const reducer = combineReducers({});
const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(...middleware),
	)
);

export default store;
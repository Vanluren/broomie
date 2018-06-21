import { combineReducers } from 'redux';
import data from '../../views/App/ducks/App.ducks';

const reducer = combineReducers({
	data,
});

export default reducer;
import { combineReducers } from 'redux';
import data from '../../views/HomeView/ducks/Home.ducks';

const reducer = combineReducers({
	data,
});

export default reducer;
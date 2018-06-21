import { combineReducers } from 'redux/index';
import tickets from '../../views/App/ducks/App.ducks';

const reducer = combineReducers({
	tickets,
});

export default reducer;
import { combineReducers } from 'redux';
import data from '../../views/HomeView/ducks/Home.ducks';
import auth from '../../views/LoginView/ducks/Authentication.ducks';

const reducer = combineReducers({
	auth,
	data
});

export default reducer;
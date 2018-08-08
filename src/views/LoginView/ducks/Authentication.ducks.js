import { USER_LOGIN } from '../../../services/redux/actionTypes';

export const userLogin = (username, password) => async (dispatch) => {
	dispatch({
		type: USER_LOGIN
	});
	try {
		// eslint-disable-next-line no-console
		console.log('Username:', username);
		// eslint-disable-next-line no-console
		console.log('Password:', password);
	}catch (e){
// eslint-disable-next-line no-console
		console.error(e);
	}
};

const DEFAULT_STATE = {
	isLoggedIn: false,
	isFetchingUser: false,
	userData: null,
	error: {
		type: null,
		message: null,
	}
};

//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case USER_LOGIN:
			return {
				...state,
				isLoggedIn: true,
			};
		default:
			return state;
	}
};

export default reducer;
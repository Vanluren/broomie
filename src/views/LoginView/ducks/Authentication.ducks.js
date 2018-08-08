import firebaseAuth from '../../../services/firebase/authentication';
import { LOGIN_ERROR, USER_LOGIN } from '../../../services/redux/actionTypes';

export const userLogin = (username, password) => async (dispatch) => {
	dispatch({
		type: USER_LOGIN
	});
	firebaseAuth
		.signInWithEmailAndPassword(username, password)
		.catch(
			(error) => {
				dispatch(handleLoginError(error.code));
			}
		);
};

const handleLoginError = (type) => dispatch => {
	let error = {};
	const USER = 'user';
	const PASS = 'pass';
	
	const USER_NOT_EXIST = 'Denne bruger findes ikke';
	const PASSWORD_INCORRECT = 'Forkert password';
	
	switch (type){
		case 'auth/invalid-email':
			error = {
				type: USER,
				message: USER_NOT_EXIST
			};
			break;
		case 'auth/wrong-password':
			error = {
				type: PASS,
				message: PASSWORD_INCORRECT
			};
			break;
		default:
			error = {
				type: USER,
				message: USER_NOT_EXIST
			};
	}
	
	dispatch({
		type: LOGIN_ERROR,
		error
	})
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
				error: {
					type: null,
					message: null
				}
			};
		case LOGIN_ERROR:
			return {
				...state,
				isLoggedIn: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default reducer;
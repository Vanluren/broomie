import firebaseAuth from '../../../services/firebase/authentication';
import { FETCH_USER, IS_FETCHING_STATUS, LOGIN_ERROR, USER_LOGIN, } from '../../../services/redux/actionTypes';

export const userLogin = (username, password) => async (dispatch) => {
	firebaseAuth
		.signInWithEmailAndPassword(username, password)
		.then(
			() => dispatch({
				type: USER_LOGIN
			}))
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

export const fetchUser = () => dispatch => {
	dispatch({
		type: IS_FETCHING_STATUS,
		status: true
	});
	firebaseAuth
		.onAuthStateChanged(
			(user) => {
				if (user){
					dispatch({
						type: FETCH_USER,
						user
					});
				} else {
					dispatch({
						type: LOGIN_ERROR
					})
				}
				dispatch({
					type: IS_FETCHING_STATUS,
					status: false
				});
			});
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
		case FETCH_USER:
			return {
				...state,
				isLoggedIn: true,
				userData: action.user
			};
		case IS_FETCHING_STATUS:
			return { ...state, isFetchingUser: action.status };
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
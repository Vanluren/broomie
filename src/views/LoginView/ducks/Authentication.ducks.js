import firebaseAuth from '../../../services/firebase/authentication';
import firestore from '../../../services/firebase/firestore';
import {
	FETCH_USER,
	IS_FETCHING_STATUS,
	LOGIN_ERROR,
	USER_LOGIN,
	USER_LOGOUT,
} from '../../../services/redux/actionTypes';

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
		case 'not-logged-in':
			error = {
				type: '',
				message: ''
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
					firestore
						.doc(`/users/${user.uid}/`)
						.get()
						.then(
							(doc) => {
								const deps = doc.data().departements;
								
								const userObj = {
									uid: user.uid,
									displayName: user.displayName,
									phoneNumber: user.phoneNumber,
									email: user.email,
									image: user.photoURL,
									visibleDeps: deps
								};
								
								dispatch({
									type: FETCH_USER,
									user: userObj
								});
								
								return dispatch({
									type: IS_FETCHING_STATUS,
									status: false
								});
							})
						.catch(
							//TODO: ADD ERRORHANDLING!
							// eslint-disable-next-line no-console
							(error) => console.error('Could not fetch user data from firestore: ', error)
						);
				} else {
					dispatch(handleLoginError('not-logged-in'));
				}
			});
};

export const userLogOut = () => {
	firebaseAuth.signOut();
	return ({
		type: USER_LOGOUT,
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
		case USER_LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				userData: null,
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
				error: action.error,
				isFetchingUser: false
			};
		default:
			return state;
	}
};

export default reducer;
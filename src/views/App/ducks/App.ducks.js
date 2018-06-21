import { RECEIVE_ALL_TICKETS, REQUEST_ALL_TICKETS } from '../../../services/redux/actionTypes';
import firebase from '../../../services/firebase/firestore';

const DEFAULT_STATE = {
	isFetching: false,
	tickets: []
};

const requestAllTickets = () => ({
	type: REQUEST_ALL_TICKETS
});

const receiveAllTickets = (tickets) => ({
	type: RECEIVE_ALL_TICKETS,
	tickets,
	receivedAt: Date.now()
})

export const fetchAllTickets = () => dispatch => {
	dispatch(requestAllTickets());
	firebase
		.firestore()
		.collection('/departments/76/tickets')
		.where('archived', '==', false)
		.get()
		.then(snapshot => {
			const tickets = [];
			snapshot.forEach((doc) => {
				tickets.push(doc.data());
			})
			return dispatch(receiveAllTickets(tickets));
		})
		.catch((error) => {
				console.log("Error getting documents: ", error);
			}
		);
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case REQUEST_ALL_TICKETS:
			return Object.assign({}, state, {
				isFetching: true,
			})
		case RECEIVE_ALL_TICKETS:
			return Object.assign({}, state, {
				isFetching: false,
				tickets: action.tickets,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
};

export default reducer;
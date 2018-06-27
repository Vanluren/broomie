import { RECEIVE_ALL_TICKETS, REQUEST_ALL_TICKETS } from '../../../services/redux/actionTypes';
import firebase from '../../../services/firebase/firestore';

const DEFAULT_STATE = {
	isFetching: false,
	tickets: {
		skader: [],
		klager: [],
	},
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

const sortByTicketsByType = (ticketsArr, type) => ticketsArr.filter((ticket) => {
	if (ticket.type === type){
		return true;
	}
	return false;
});

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case REQUEST_ALL_TICKETS:
			return {
				...state,
				isFetching: true,
			}
		case RECEIVE_ALL_TICKETS:
			return {
				...state,
				isFetching: false,
				tickets: {
					skader: sortByTicketsByType(action.tickets, 'skade'),
					klager: sortByTicketsByType(action.tickets, 'klage'),
				},
				lastUpdated: action.receivedAt
			}
		default:
			return state;
	}
};

export default reducer;
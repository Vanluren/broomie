import { RECEIVE_ALL_TICKETS, REQUEST_ALL_TICKETS } from '../../../services/redux/actionTypes';
import firestore from '../../../services/firebase/firestore';

const DEFAULT_STATE = {
	isFetchingTickets: false,
	tickets: {
		skader: [],
		klager: [],
	},
};

const requestAllTickets = () => ({
	type: REQUEST_ALL_TICKETS
});

const receiveAllTickets = (ticketArray) => {
	const tickets = {
		skader: sortByTicketsByType(ticketArray, 'skade'),
		klager: sortByTicketsByType(ticketArray, 'klage'),
	};
	return ({
		type: RECEIVE_ALL_TICKETS,
		tickets,
		receivedAt: Date.now()
	});
};

export const fetchAllTickets = (depArray) => (dispatch) => {
	dispatch(requestAllTickets());
	const tickets = [];
	let counter = 0;
	depArray.forEach(async (element) => {
		const currentDepRef = `departments/${element}/tickets`;
		firestore
			.collection(currentDepRef)
			.where('archived', '==', false)
			.get()
			.then(
				snapshot => {
					snapshot.forEach((doc) => tickets.push(doc.data()));
					counter+=1;
					if(counter === depArray.length){
						dispatch(receiveAllTickets(tickets));
					}
					return counter;
				})
			.catch((error) => {
					// eslint-disable-next-line no-console
					console.log("Error getting documents: ", error);
				}
			);
	});
};

const sortByTicketsByType = (ticketsArr, type) => ticketsArr.filter((ticket) => ticket.type === type);

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case REQUEST_ALL_TICKETS:
			return {
				...state,
				isFetchingTickets: true,
			};
		case RECEIVE_ALL_TICKETS:
			return {
				...state,
				isFetchingTickets: false,
				tickets: action.tickets,
				lastUpdated: action.receivedAt
			};
		default:
			return state;
	}
};

export default reducer;
import { RECEIVE_ALL_TICKETS, REQUEST_ALL_TICKETS, VIEW_TICKET } from '../../../services/redux/actionTypes';
import firestore from '../../../services/firebase/firestore';

const DEFAULT_STATE = {
	isFetchingTickets: false,
	tickets: null,
	viewingTicket: null,
};

const requestAllTickets = () => ({
	type: REQUEST_ALL_TICKETS
});


export const fetchAllTickets = (depArray) => (dispatch) => {
	dispatch(requestAllTickets());
	const tickets = {};
	let counter = 0;
	depArray.forEach(async (element) => {
		const currentDepRef = `departments/${element}/tickets`;
		firestore
			.collection(currentDepRef)
			.where('archived', '==', false)
			.get()
			.then(
				snapshot => {
					snapshot.forEach((doc)=> {tickets[doc.id] = doc.data()});
					counter += 1;
					if (counter === depArray.length){
						dispatch({
							type: RECEIVE_ALL_TICKETS,
							tickets,
							receivedAt: Date.now()
						});
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


export const viewTicket = ticketID => ({
	type: VIEW_TICKET,
	ticketID,
});

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
				tickets: {...state.ticket, ...action.tickets},
				lastUpdated: action.receivedAt,
			};
		case VIEW_TICKET:
			return {
				...state,
				viewingTicket: action.ticketID
			};
		default:
			return state;
	}
};

export default reducer;
import { createSelector } from 'reselect';

const getTickets = (state) => state.data.tickets;

export const getNumberOfTickets = createSelector(
	[getTickets],
	(tickets) => {
		if (tickets === null || tickets === undefined){
			return ({
				numSkader: null,
				numKlager: null,
			});
		}
		const returnTicketType = (key, type) => tickets[key].type === type;
		
		const skaderArr = Object.keys(tickets).filter(
			(key) => returnTicketType(key, 'skade')
		);
		const klageArr = Object.keys(tickets).filter(
			(key) => returnTicketType(key, 'klage')
		);
		return ({
			numSkader: skaderArr.length,
			numKlager: klageArr.length
		})
	}
);
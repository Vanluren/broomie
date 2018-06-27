import { createSelector } from 'reselect';

const getSkader = (state) => state.data.tickets.skader;
const getKlager = (state) => state.data.tickets.klager;

export const getNumberOfTickets = createSelector(
	[getSkader, getKlager],
	(skader, klager) => ({
		numSkader: skader.length,
		numKlager: klager.length
	})
);
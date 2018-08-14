import { Routes } from './router';

export const redirectToRequestedPath = (location, history) => {
	if (location.state === null ||
	    location.state === undefined ||
	    location.state.from === '/'){
		history.push(Routes.HOME.path);
	} else {
		history.push(location.state.from);
	}
};
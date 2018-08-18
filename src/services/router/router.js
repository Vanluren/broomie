import HomeView from '../../views/HomeView/Home.container';
import LoginView from '../../views/LoginView/LoginView.container';
import TicketView from '../../views/TicketView/TicketView.container';
import TicketOverView from '../../views/TicketOverView/TicketOverView.container';

export const Routes = {
	HOME: {
		menuTitle: 'Home',
		path: '/henvendelser',
		component: HomeView
	},
	SKADER: {
		menuTitle: 'Skader',
		path: '/henvendelser/skader',
		component: TicketOverView
	},
	KLAGER: {
		menuTitle: 'Klager',
		path: '/henvendelser/klager',
		component: TicketOverView
	},
	LOGIN: {
		menuTitle: 'Login',
		path: '/login',
		component: LoginView
	},
	TICKET: {
		SKADE: {
			menuTitle: 'Skade',
			path: '/skade/:id',
			component: TicketView
		},
		KLAGE: {
			menuTitle: 'Klage',
			path: '/klage/:id',
			component: TicketView
		}
	}
};
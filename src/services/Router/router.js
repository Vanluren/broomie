import App from '../../views/App/App';
import Skader from '../Skader/Skader.container';

export const viceRoutes = [
	
	{
		menuTitle: 'Home',
		path: '/',
		component: App
	},
	{
		menuTitle: 'Skader',
		path: '/skader',
		component: Skader
	},
	{
		menuTitle: 'Klager',
		path: '/klager',
		component: null
	}
];
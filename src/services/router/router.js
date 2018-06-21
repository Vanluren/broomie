import App from '../../views/App/App';
import Skader from '../../views/SkaderView/Skader.container';
import Klager from '../../views/KlagerView/KlagerView.container';

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
		component: Klager
	}
];
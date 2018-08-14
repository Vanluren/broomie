import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../../../services/router/router';
import TicketOverView from '../../TicketOverView/TicketOverView.container';

const HomeViewRouter = () => (
	<Switch>
		<Route
			path={Routes.HOME.path}
			component={TicketOverView}
			exact
		/>
		<Route
			path={Routes.SKADER.path}
			component={Routes.SKADER.component}
			exact
		/>
		<Route
			path={Routes.KLAGER.path}
			component={Routes.KLAGER.component}
			exact
		/>
		<Route
			path={Routes.TICKET.SKADE.path}
			component={Routes.TICKET.SKADE.component}
			exact
		/>
		<Route
			path={Routes.TICKET.KLAGE.path}
			component={Routes.TICKET.KLAGE.component}
			exact
		/>
	</Switch>
);

export default HomeViewRouter;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Header from '../../commonComponents/Header/Header.container';
import SidebarMenu from '../../commonComponents/SidebarMenu/SidebarMenu.container';
import { fetchAllTickets } from './ducks/Home.ducks';
import TicketOverView from '../TicketOverView/TicketOverView.container';
import TicketTypeNavigation from '../../commonComponents/TicketTypeNav/TicketTypeNavigation.container';
import { Routes } from '../../services/router/router';

class Home extends Component {
	
	componentDidMount() {
		// eslint-disable-next-line no-shadow
		const { isLoggedIn, userData, fetchAllTickets } = this.props;
		
		if (isLoggedIn && (userData !== null || userData !== undefined)){
			fetchAllTickets(userData.visibleDeps);
		}
	}
	
	render() {
		const SwitchRouter =
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
			</Switch>;
		
		return (
			<Container fluid>
				<Row>
					<Header />
				</Row>
				<Row>
					<SidebarMenu />
					<Col md={{ size: 10, offset: 1 }}>
						<TicketTypeNavigation />
						{SwitchRouter}
					</Col>
				</Row>
			</Container>
		);
	}
}

Home.propTypes = {
	fetchAllTickets: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	userData: PropTypes.object
};
Home.defaultProps = {
	data: null,
	userData: null || undefined
};

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
	userData: state.auth.userData,
	data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAllTickets: (depNumber) => dispatch(fetchAllTickets(depNumber))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Home));
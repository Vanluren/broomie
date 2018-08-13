import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Skader from '../SkaderView/Skader.container';
import Klager from '../KlagerView/KlagerView.container';
import Header from '../../commonComponents/Header/Header.container';
import SidebarMenu from '../../commonComponents/SidebarMenu/SidebarMenu.container';
import { fetchAllTickets } from './ducks/Home.ducks';
import TicketView from '../TicketView/TicketView.container';

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
					path='/skader'
					component={Skader}
					exact
				/>
				<Route
					path='/klager'
					component={Klager}
					exact
				/>
				<Route
					path='/skade/:id'
					component={TicketView}
					exact
				/>
				<Route
					path='/klage/:id'
					component={TicketView}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
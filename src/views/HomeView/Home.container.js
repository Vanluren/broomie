import React from 'react';
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
import { Container } from 'reactstrap';
import TicketCard from '../../commonComponents/TicketCard/TicketCard.container';

class Home extends Component {
	
	componentDidMount() {
		const {isLoggedIn, userData} = this.props;
		
		if (isLoggedIn && (userData !== null || userData !== undefined)){
			this.props.fetchAllTickets();
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
			</Switch>;
		
		return (
			<Container fluid>
				<Row>
					<Header />
				</Row>
				<Row>
					<SidebarMenu />
					<Col md={{ size: 10, offset: 2 }}>
						{SwitchRouter}
					</Col>
				</Row>
			</Container>
		);
	}
}

Home.propTypes = {
	data: PropTypes.shape({
		isFetching: PropTypes.bool.isRequired,
		tickets: PropTypes.shape(
			{
				skader: PropTypes.array.isRequired,
				klager: PropTypes.array.isRequired,
			}
		).isRequired,
	}),
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
	fetchAllTickets: () => dispatch(fetchAllTickets())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
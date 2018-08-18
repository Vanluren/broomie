import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Fade } from 'reactstrap';
import TicketCard from '../../commonComponents/TicketCard/TicketCard.container';
import { viewTicket } from '../HomeView/ducks/Home.ducks';
import { Routes } from '../../services/router/router';
import TicketTypeNavigation from '../../commonComponents/TicketTypeNav/TicketTypeNavigation.container';


class TicketOverView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTicketType: 'all',
		};
		this.ticketCardConstructor = this.ticketCardConstructor.bind(this);
		this.onTicketCardClick = this.onTicketCardClick.bind(this);
		this.setCurrentTicketType = this.setCurrentTicketType.bind(this);
	}
	
	
	componentDidMount() {
		const { location } = this.props;
		this.setCurrentTicketType(location);
	}
	
	componentDidUpdate(prevProps) {
		const { location } = this.props;
		if (prevProps.location !== location){
			this.setCurrentTicketType(location);
		}
	}
	
	setCurrentTicketType(currentLocation) {
		if (currentLocation.pathname === Routes.SKADER.path){
			this.setState({ currentTicketType: 'skade' });
		} else if (currentLocation.pathname === Routes.KLAGER.path){
			this.setState({ currentTicketType: 'klage' });
		} else {
			this.setState({ currentTicketType: 'all' });
		}
	};
	
	onTicketCardClick(type, id) {
		const { history, actions } = this.props;
		if (type === 'skade'){
			history.push(`/skade/${id}`);
		} else {
			history.push(`/klage/${id}`);
		}
		actions.viewTicket(id);
	}
	
	ticketCardConstructor() {
		const ticketCardArr = [];
		const { tickets } = this.props;
		if (tickets !== null || undefined){
			Object.keys(tickets).forEach((ticket) => {
				const currentTicket = tickets[ticket];
				if (this.state.currentTicketType === 'all' || this.state.currentTicketType === currentTicket.type){
					ticketCardArr.push(
						<TicketCard
							key={ticket}
							id={ticket}
							type={currentTicket.type}
							desc={currentTicket.ticketContent.desc}
							location={currentTicket.location}
							priority={currentTicket.priority}
							date={currentTicket.timeCreated}
							onClickHandler={this.onTicketCardClick}
						/>
					);
				}
			});
		}
		return ticketCardArr;
	}
	
	render() {
		const { location } = this.props;
		return (
			<Fade in>
				{location.pathname.includes(Routes.HOME.path) ? <TicketTypeNavigation /> : null}
				{this.ticketCardConstructor()}
			</Fade>
		);
	}
}

TicketOverView.propTypes = {
	tickets: PropTypes.shape({
		ticket: PropTypes.object
	}),
	history: PropTypes.shape({
		push: PropTypes.func,
	}),
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired,
	actions: PropTypes.shape({
		viewTicket: PropTypes.func.isRequired
	}).isRequired,
};
TicketOverView.defaultProps = {
	tickets: null,
	history: null
};

const mapStateToProps = state => ({
	tickets: state.data.tickets,
});
const mapDispatchToProps = dispatch => ({
	actions: {
		viewTicket: (id) => {
			dispatch(viewTicket(id))
		}
	}
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketOverView));




import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { viewTicket } from '../HomeView/ducks/Home.ducks';


class TicketView extends Component {
	componentDidMount() {
		const { currentTicket, location, actions } = this.props;
		
		if (currentTicket === null && location.pathname.includes('/skade/') || location.pathname.includes('/klage/')){
			const ticketID = location.pathname.split('/')[2];
			actions.viewTicket(ticketID)
		}
	};
	
	render() {
		return (
			<div>{this.props.currentTicket}</div>
		);
	}
}

TicketView.propTypes = {
	currentTicket: PropType.string,
	location: PropType.shape({
		pathname: PropType.string
	}).isRequired,
	actions: PropType.shape({
		viewTicket: PropType.func.isRequired
	}).isRequired
};
TicketView.defaultProps = {
	currentTicket: null,
};

const mapStateToProps = (state) => ({
	currentTicket: state.data.viewingTicket
});

const mapDispatchToProps = (dispatch)=>({
	actions: {
		viewTicket: (ticketID)=>dispatch(viewTicket(ticketID))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketView);
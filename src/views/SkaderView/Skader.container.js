import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketCard from '../../commonComponents/TicketCard/TicketCard.container';
import WithLoadingSpinner from '../../commonComponents/LoadingSpinner/LoadingSpinner.container';
import { viewTicket } from '../HomeView/ducks/Home.ducks';


class Skader extends Component {
	constructor(props) {
		super(props);
		this.renderTicketRows = this.renderTicketRows.bind(this);
		this.onTicketClick = this.onTicketClick.bind(this);
	}
	
	renderTicketRows() {
		const ticketCardArr = [];
		const tickets = this.props.tickets;
		if(tickets !== null || undefined){
// eslint-disable-next-line no-restricted-syntax
			for(const ticket in tickets) {
				if(ticket !== null || undefined){
					const currTicket = tickets[ticket];
					const content = currTicket.ticketContent;
					ticketCardArr.push(
						<TicketCard
							key={ticket}
							id={ticket}
							type={currTicket.type}
							desc={content.desc}
							location={currTicket.location}
							priority={currTicket.priority}
							date={currTicket.timeCreated}
							onClickHandler={this.onTicketClick}
						/>
					);
				}
			}
		}
		return ticketCardArr;
	};
	
	onTicketClick(type, id) {
		const { history , actions} = this.props;
		
		if (type === 'skade'){
			history.push(`/skade/${id}`);
		} else {
			history.push(`/klage/${id}`);
		}
		actions.viewTicket(id);
	}
	
	render() {
		return (
			<WithLoadingSpinner>
				<div>{this.renderTicketRows()}</div>
			</WithLoadingSpinner>
		
		);
	}
}

Skader.propTypes = {
	tickets: PropTypes.shape({
		ticket: PropTypes.object
	}),
	history: PropTypes.shape({
		push: PropTypes.func,
	}),
	actions: PropTypes.shape({
		viewTicket: PropTypes.func.isRequired
	}).isRequired,
};
Skader.defaultProps = {
	tickets: null,
	history: null
};

const mapStateToProps = state => ({
	tickets: state.data.tickets,
});
const mapDispatchToProps = dispatch => ({
	actions: {
		viewTicket: (id)=>{dispatch(viewTicket(id))}
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Skader);




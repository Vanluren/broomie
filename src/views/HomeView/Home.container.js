import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import TicketCard from '../../commonComponents/TicketCard/TicketCard.container';

const Home = ({ data }) => {
		
		const renderTicketRows = () => {
			const ticketArr = [];
			const tickets = data.tickets.skader
			tickets.forEach((ticket) => {
				const content = ticket.ticketContent;
				ticketArr.push(
					<TicketCard
						key={ticket.timeCreated}
						desc={content.desc}
						location={content.location}
						priority={content.priority}
						date={ticket.timeCreated}
					/>
				);
			});
			
			return ticketArr;
		}
		if (data.isFetching){
			return (
				<h1>Firebase is been fetching</h1>
			);
		}
		return (
			<Container
			>
				{renderTicketRows()}
			</Container>
		);
	}
;

Home.propTypes = {
	data: PropTypes.shape({
		isFetching: PropTypes.bool.isRequired,
		tickets: PropTypes.shape(
			{
				skader: PropTypes.array.isRequired,
				klager: PropTypes.array.isRequired,
			}
		).isRequired,
	}).isRequired
};
// Home.defaultProps = {};

const mapStateToProps = state => ({
	data: state.data,
});

export default connect(
	mapStateToProps
)(Home);
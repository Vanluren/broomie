import React, { Component } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import ContactInfoRow from './components/InfoRow/ContactInfo';
import { viewTicket } from '../HomeView/ducks/Home.ducks';
import InfoBoxRow from '../../commonComponents/TicketInfoRow/TicketInfoRow.container';
import InfoBox from '../../commonComponents/TicketInfoRow/components/InfoBox';
import InfoBoxText from '../../commonComponents/TicketInfoRow/components/InfoBoxText';
import ImageRow from './components/ImageRow/ImageRowWrapper';
import LoadingSpinner from '../../commonComponents/LoadingSpinner/LoadingSpinner.container';

class TicketView extends Component {
	componentDidMount() {
		const { viewingTicket, location, actions } = this.props;
		if (viewingTicket === null && (location.pathname.includes('/skade/') || location.pathname.includes('/klage/'))){
			const ticketID = location.pathname.split('/')[2];
			actions.viewTicket(ticketID);
		}
	};
	
	render() {
		const { tickets, viewingTicket } = this.props;
		if (tickets !== null){
			const shownTicket = tickets[viewingTicket];
			const content = shownTicket.ticketContent;
			const creator = shownTicket.creatorInfo;
			return (
				<Container>
					<ContactInfoRow
						name={creator.name}
						tel={creator.telephone}
						email={creator.email}
						location={content.location}
						priority={content.priority}
						timestamp={shownTicket.timeCreated}
					/>
					<InfoBoxRow
						header='Beskrivelse'
					>
						<InfoBox col={{ size: 12 }}>
							<InfoBoxText
								value={shownTicket.ticketContent.desc}
							/>
						</InfoBox>
					</InfoBoxRow>
					{!shownTicket.images ? '' : <ImageRow images={shownTicket.images} />}
				</Container>
			);
		}
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<SpinnerWrapper>
								<LoadingSpinner />
							</SpinnerWrapper>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const SpinnerWrapper = styled.div`
	margin-top: 40px;
`;

TicketView.propTypes = {
	viewingTicket: PropType.string,
	tickets: PropType.shape({
		ticketContent: PropType.shape(),
		creatorInfo: PropType.shape(),
		
	}),
	location: PropType.shape({
		pathname: PropType.string
	}).isRequired,
	actions: PropType.shape({
		viewTicket: PropType.func.isRequired
	}).isRequired
};
TicketView.defaultProps = {
	viewingTicket: null,
	currentTicket: null,
	tickets: null,
};

const mapStateToProps = (state) => ({
	viewingTicket: state.data.viewingTicket,
	tickets: state.data.tickets,
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		viewTicket: (ticketID) => dispatch(viewTicket(ticketID))
	}
});

export default connect(mapStateToProps, mapDispatchToProps,)(TicketView);
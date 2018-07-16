import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

const TicketCard = ({ desc, location, priority, date }) => {
	const dateObj = date.toDate();
	const prettyDate = dateObj.toLocaleString('dk-DK');
	return (
		<Ticket>
			<LeftWrapper md={9}>
				<Header>
					Lejlighed: Toldbodgade 30, 2. sal, lejl 1
				</Header>
				<Description>
					<p>{desc}</p>
				</Description>
			</LeftWrapper>
			<RightWrapper md={3}>
				<Info>
					Prioritering: {priority}
				</Info>
				<Info>
					Location: {location}
				</Info>
				<Info>
					Afdeling: 73
				</Info>
				<Info>{prettyDate}</Info>
			</RightWrapper>
		</Ticket>
	)
};


const Ticket = styled(Row)`
	cursor: pointer;
	width: 100%;
	    display: flex;
    background-color: lightgray;
    padding: 40px;
    margin-top: 30px;
    font-size: 18px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    color: #007BFF;
    &:hover{
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
`;

const LeftWrapper = styled(Col)`

`;
const RightWrapper = styled(Col)`

`;

const Header = styled.h2`

`;
const Description = styled.div`

`;
const Info = styled.div`

`;

TicketCard.propTypes = {};
TicketCard.defaultProps = {};

export default TicketCard;
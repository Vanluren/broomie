import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

const TicketInfoRow = ({ header, children }) => (
	<Row>
		<HeaderCol md={12}>
			<h2>{header}</h2>
		</HeaderCol>
		{children}
	</Row>
);
const HeaderCol = styled(Col)`
	margin-top: 30px;
	margin-bottom: 5px;
`;
TicketInfoRow.propTypes = {
	header: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
};
TicketInfoRow.defaultProps = {
	header: undefined,
	children: undefined
};

export default TicketInfoRow;
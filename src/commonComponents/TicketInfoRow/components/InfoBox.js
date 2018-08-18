import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

const InfoBox = ({ col, children }) => (
	<Col md={{ ...col }}>
		<InfoBoxWrapper>
			{children}
		</InfoBoxWrapper>
	</Col>
);

const InfoBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	padding: 10px;
`;
InfoBox.propTypes = {
	col: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};
InfoBox.defaultProps = {
	col: undefined,
	children: null
};

export default InfoBox;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoBoxText = ({ title, value }) => {
	if (value !== undefined){
		return (
			<TextWrapper>
				{title !== undefined ? <Title>{`${title}: `}</Title> : null}
				<Value>{value}</Value>
			</TextWrapper>
		);
	}
	return null;
};
const TextWrapper = styled.div`
	display: flex;
`;
const Title = styled.span`
	font-weight: bold;
	text-transform: capitalize;
`;
const Value = styled.span`
`;
InfoBoxText.propTypes = {
	title: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

InfoBoxText.defaultProps = {
	title: undefined,
};

export default InfoBoxText;
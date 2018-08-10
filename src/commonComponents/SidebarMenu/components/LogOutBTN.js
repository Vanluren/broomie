import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icon/Icon.container';

const LogOutBTN = ({ onClickHandler }) => (
	<ItemWrapper onClick={() => onClickHandler()}>
		<Text>Log Out <StyledIcon iconName='sign-out-alt' /></Text>
	</ItemWrapper>
);

const ItemWrapper = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	background: ${(props) => props.active ? 'darkgrey' : 'lightgrey'};
	
	&:hover{
		background-color: darkgrey;
	}
`;
const Text = styled.div`
 width: 100%;
    height: 100%;
    padding: 15px 20px;
    color: black;
    text-decoration: none;
   
    &:hover{
        color: #000000;
        text-decoration: none;
    }
`;
const StyledIcon = styled(Icon)`
	margin-left: 5px;
`;
LogOutBTN.propTypes = {
	onClickHandler: PropTypes.func.isRequired,
};
LogOutBTN.defaultProps = {};

export default LogOutBTN;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

const MenuItem = ({ link, itemName, num, }) => {
	let MENU_TITLE;
	if (num > 0){
		MENU_TITLE = `${itemName} (${num})`;
	} else {
		MENU_TITLE = `${itemName}`;
	}
	// eslint-disable-next-line react/prop-types
	const Item = ({ match }) => (
		<ItemWrapper
			active={match}
		>
			<StyledNavLink
				exact
				to={link}
			>
				{MENU_TITLE}
			</StyledNavLink>
		</ItemWrapper>
	);
	
	return (
		<Route
			path={link}
			exact
		>
			{Item}
		</Route>
	);
}
const ItemWrapper = styled.li`
	width: 100%;
	display: flex;
	cursor: pointer;
	background: ${(props) => props.active ? 'darkgrey' : 'lightgrey'};
	&:hover{
		background-color: darkgrey;
	}
`;
const StyledNavLink = styled(NavLink)`
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
MenuItem.propTypes = {
	link: PropTypes.string.isRequired,
	itemName: PropTypes.string.isRequired,
	num: PropTypes.number,
// eslint-disable-next-line react/no-unused-prop-types
	match: PropTypes.bool
};
MenuItem.defaultProps = {
	match: null,
	num: 0
};

export default MenuItem;
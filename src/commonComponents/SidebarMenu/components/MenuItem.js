import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import { Routes } from '../../../services/router/router';

const MenuItem = ({ path, itemName, location }) => {
	let isActive = false;
	if (location.pathname === path ||
	    (location.pathname === Routes.HOME.path ||
	    location.pathname === Routes.SKADER.path ||
	    location.pathname === Routes.KLAGER.path)){
		isActive = true;
	}
	
	return (
		<Route
			path={path}
			exact
		>
			<ItemWrapper
				active={isActive}
			>
				<StyledNavLink
					to={path}
				>
					{itemName}
				</StyledNavLink>
			</ItemWrapper>
		</Route>
	);
};

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
	path: PropTypes.string.isRequired,
	itemName: PropTypes.string.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired,
};
MenuItem.defaultProps = {
	match: null,
	num: 0
};

export default MenuItem;
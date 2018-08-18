import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Badge, Fade } from 'reactstrap';

const NavBarItem = ({ itemName, path, badgeNumber }) => (
		<div>
			{(badgeNumber !== null || undefined) ?
			 <Fade in><StyledBadge color='danger' pill>{badgeNumber}</StyledBadge></Fade> : ''}
			<StyledNavlink
				exact
				to={path}
				activeStyle={{
					opacity: 1,
					color: 'black'
				}}
			>
				
				{itemName}
			</StyledNavlink>
		</div>
	
	);

const StyledNavlink = styled(NavLink)`
	margin: 5px 15px;
	color: #000000;
	opacity: 0.4;
	&:hover{
		text-decoration: none;
		color: inherit;
		opacity: 1;
	}
`;

const StyledBadge = styled(Badge)`
	position: absolute;
    top: 18px;
    margin-left: 60px;
`;
NavBarItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	badgeNumber: PropTypes.number
};
NavBarItem.defaultProps = {
	badgeNumber: null,
};

export default NavBarItem;
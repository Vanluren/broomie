import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItem = ({link, itemName}) => (
		<ItemWrapper>
			<StyledNavLink
				exact
				to={link}
			>
				{itemName}
			</StyledNavLink>
		</ItemWrapper>
);
const ItemWrapper = styled.div`
width: 100%;
padding: 15px 0px;
`;
const StyledNavLink = styled(NavLink)`
 color: blue;
  &.active {
   background-color: yellow;
  }
`;
MenuItem.propTypes = {
};
MenuItem.defaultProps = {

};

export default MenuItem;
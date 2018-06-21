import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import { viceRoutes } from '../../services/router/router';


const SidebarMenu = () => (
	<SidebarWrapper>
		<SidebarList>
			{renderMenuItems()}
		</SidebarList>
	</SidebarWrapper>
);

const renderMenuItems = () => (
	viceRoutes.map(menuItem =>
		<MenuItem
			key={menuItem.menuTitle}
			link={menuItem.path}
			itemName={menuItem.menuTitle}
			component={menuItem.component}
		/>
	)
);


const SidebarWrapper = styled.aside`
    position: fixed !important;
    top: 149px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid gray;
    background-color: lightgrey;
`;
const SidebarList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

//SidebarMenu.propTypes = {};
//SidebarMenu.defaultProps = {};

export default SidebarMenu;
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import MenuItem from './components/MenuItem';

const menuItems = [
	{
		pathName: 'Home',
		path: '/',
		exact: true
	}, {
		pathName: 'Skader',
		path: '/skader',
		exact: false
	},{
		pathName: 'Klager',
		path: '/klager',
		exact:false
	}
];

class SidebarMenu extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
    return (
	    <Col md={2}>
		    <SidebarWrapper>
			    {menuItems.map(menuItem =>
				    <MenuItem
					    key={menuItem.pathName}
					    active={window.location.pathname === menuItem.path}
					    link={menuItem.path}
					    itemName={menuItem.pathName}
				    />
			    )}
		    </SidebarWrapper>
	    </Col>
    );
  }
}

const SidebarWrapper = styled.div`
    position: fixed !important;
    top: 149px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #eee;
    border-right: 1px solid gray;
    background-color: lightgrey;
`;

SidebarMenu.propTypes = {};
SidebarMenu.defaultProps = {};

export default SidebarMenu;
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import MenuItem from './components/MenuItem';

const menuItems = [
	'Home',
];
class SidebarMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {activeItem: 'Home'}
		this.chooseMenuItem.bind(this);
	}
	chooseMenuItem(menuItem){
		this.setState({activeItem: menuItem});
	}
	render() {
    return (
	    <Col md={2}>
		    <SidebarWrapper>
			    {menuItems.map(menuItem =>
				    <MenuItem
					    key={menuItem}
					    active={menuItem === this.state.activeItem}
					    link='#'
					    itemName={menuItem}
					    onClickFunc={()=>{this.chooseMenuItem()}}
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
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import { viceRoutes } from '../../services/Router/router';
import firebase from '../../services/firebase/firestore';

class SidebarMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numSkader: 0,
			numKlager: 0,
		};
	}
	
	componentDidMount() {
		this.getNumSkader = firebase
			.firestore()
			.collection('/departments/76/tickets')
			.where('type', '==', 'skade')
			.onSnapshot((snapshot)=>{
				const skader = [];
				snapshot.forEach((doc)=>{
					skader.push(doc.data());
				})
				this.setState({ numSkader: skader.length });
			});
		
		this.getNumKlager = firebase
			.firestore()
			.collection('/departments/76/tickets')
			.where('type', '==', 'skade')
			.onSnapshot((snapshot)=>{
				const skader = [];
				snapshot.forEach((doc)=>{
					skader.push(doc.data());
				})
				this.setState({ numSkader: skader.length });
			});
	}
	
	render() {
		return (
			<SidebarWrapper>
				<SidebarList>
					{renderMenuItems()}
				</SidebarList>
			</SidebarWrapper>
		);
	}
}

const
	renderMenuItems = () => (
		viceRoutes.map(menuItem =>
			<MenuItem
				key={menuItem.menuTitle}
				link={menuItem.path}
				itemName={menuItem.menuTitle}
			/>
		)
	);


const
	SidebarWrapper = styled.aside`
    position: fixed !important;
    top: 149px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #EEEEEE;
    border-right: 1px solid gray;
    background-color: lightgrey;
`;
const
	SidebarList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

SidebarMenu
	.propTypes = {};
SidebarMenu
	.defaultProps = {};

export default SidebarMenu;
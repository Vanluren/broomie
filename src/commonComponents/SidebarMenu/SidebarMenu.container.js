import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import { getNumberOfTickets } from '../../services/selectors/selectors';


const SidebarMenu = ({ numSkader, numKlager }) => (
	<SidebarWrapper>
		<SidebarList>
			<MenuItem
				link='/'
				itemName='Home'
			/>
			<MenuItem
				link='/skader'
				itemName='Skader'
				num={numSkader}
			/>
			<MenuItem
				link='/klager'
				itemName='Klager'
				num={numKlager}
			/>
		</SidebarList>
	</SidebarWrapper>
);

const SidebarWrapper = styled.aside`
    position: fixed !important;
    top: 149px;
    width: 125px;
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

SidebarMenu.propTypes = {
	numSkader: PropTypes.number.isRequired,
	numKlager: PropTypes.number.isRequired,
};
//SidebarMenu.defaultProps = {};
const makeMapStateToProps = () => {
	const mapStateToProps = (state) => (getNumberOfTickets(state))
	return mapStateToProps
}
export default withRouter(connect(makeMapStateToProps)(SidebarMenu));
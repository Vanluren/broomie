import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import { getNumberOfTickets } from '../../services/selectors/selectors';
import LogOutBTN from './components/LogOutBTN';
import { userLogOut } from '../../views/LoginView/ducks/Authentication.ducks';


const SidebarMenu = (props) => {
	const { numSkader, numKlager, actions, history } = props;
	
	const logOutBTNOnClick = () => {
		actions.userLogOut();
		history.push('/login');
	};
	
	return (
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
				<LogOutBTN
					itemName='Log Out'
					icon='->'
					onClickHandler={logOutBTNOnClick}
				/>
			</SidebarList>
		</SidebarWrapper>
	);
};

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
	actions: PropTypes.shape({
		userLogOut: PropTypes.func.isRequired
	}).isRequired,
// eslint-disable-next-line react/forbid-prop-types
	history: PropTypes.object.isRequired
};
//SidebarMenu.defaultProps = {};

const mapStateToProps = (state) => (
	getNumberOfTickets(state)
);
const mapDispatchToProps = (dispatch) => ({
	actions: {
		userLogOut: () => {
			dispatch(userLogOut())
		}
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarMenu));
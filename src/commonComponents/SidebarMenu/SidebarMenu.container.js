import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from './components/MenuItem';
import LogOutBTN from './components/LogOutBTN';
import { userLogOut } from '../../views/LoginView/ducks/Authentication.ducks';
import { Routes } from '../../services/router/router';


const SidebarMenu = (props) => {
	const { actions, history } = props;
	
	const logOutBTNOnClick = () => {
		actions.userLogOut();
		history.push('/login');
	};
	
	return (
		<SidebarWrapper>
			<SidebarList>
				<MenuItem
					itemName={Routes.HOME.menuTitle}
					path={Routes.HOME.path}
					component={Routes.HOME.component}
					location={props.location}
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
	actions: PropTypes.shape({
		userLogOut: PropTypes.func.isRequired
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};


const mapDispatchToProps = (dispatch) => ({
	actions: {
		userLogOut: () => {
			dispatch(userLogOut())
		}
	}
});

export default withRouter(connect(null, mapDispatchToProps)(SidebarMenu));
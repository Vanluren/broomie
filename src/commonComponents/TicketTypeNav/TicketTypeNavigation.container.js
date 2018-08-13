import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarItem from './components/NavBarItem';
import { getNumberOfTickets } from '../../services/selectors/selectors';
import { Routes } from '../../services/router/router';


const TicketTypeNavigation = ({ numSkader, numKlager }) => (
	<StyledNav tabs>
		<StyledNavItem>
			<NavBarItem
				path={Routes.HOME.path}
				itemName='Alle'
			/>
		</StyledNavItem>
		<StyledNavItem>
			<NavBarItem
				path={Routes.SKADER.path}
				itemName={Routes.SKADER.menuTitle}
				badgeNumber={numSkader}
			/>
		</StyledNavItem>
		<StyledNavItem>
			<NavBarItem
				path={Routes.KLAGER.path}
				itemName={Routes.KLAGER.menuTitle}
				badgeNumber={numKlager}
			/>
		</StyledNavItem>
	</StyledNav>
);

const StyledNav = styled(Nav)`
	margin-top: 30px;
`;

const StyledNavItem = styled(NavItem)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
TicketTypeNavigation.propTypes = {
	numSkader: PropTypes.number,
	numKlager: PropTypes.number
};
TicketTypeNavigation.defaultProps = {
	numSkader: null,
	numKlager: null
};

const mapStateTopProps = (state) => (
	getNumberOfTickets(state)
);

export default withRouter(connect(mapStateTopProps)(TicketTypeNavigation));
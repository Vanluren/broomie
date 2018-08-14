import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Header from '../../commonComponents/Header/Header.container';
import SidebarMenu from '../../commonComponents/SidebarMenu/SidebarMenu.container';
import TicketTypeNavigation from '../../commonComponents/TicketTypeNav/TicketTypeNavigation.container';
import WithLoadingSpinner from '../../commonComponents/LoadingSpinner/LoadingSpinner.container';
import HomeViewRouter from './components/HomeViewRouter';

const HomeView = () => (
	<Container fluid>
		<Row>
			<Header />
		</Row>
		<Row>
			<SidebarMenu />
			<Col md={{ size: 10, offset: 1 }}>
				<TicketTypeNavigation />
				<WithLoadingSpinner>
					<HomeViewRouter />
				</WithLoadingSpinner>
			</Col>
		</Row>
	</Container>
);
export default withRouter((HomeView));
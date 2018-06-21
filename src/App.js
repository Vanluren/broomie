import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './commonComponents/Header/Header.container';
import SidebarMenu from './commonComponents/SidebarMenu/SidebarMenu.container';
import Skader from './views/SkaderView/Skader.container';
import Klager from './views/KlagerView/KlagerView.container';
import Home from './views/HomeView/Home.container';
import store from './services/redux/reduxStore';
import { fetchAllTickets } from './views/HomeView/ducks/Home.ducks';


store.dispatch(fetchAllTickets());

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			<Router>
				<Container fluid>
					<Row>
						<Header />
					</Row>
					<Row>
						<SidebarMenu />
						<Switch>
							<Col md={{ size: 11, offset: 1 }}>
								<Route
									path='/'
									component={Home}
									exact
								/>
								<Route
									path='/skader'
									component={Skader}
									exact
								/>
								<Route
									path='/klager'
									component={Klager}
								/>
							</Col>
						</Switch>
					</Row>
				</Container>
			</Router>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import firebase from 'firebase/app';
import { firebaseConfig } from '../../services/firebase/firebaseConfig';
import Header from '../../commonComponents/Header/Header.container';

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Header />
				</Row>
			</Container>
		);
	}
}

export default App;

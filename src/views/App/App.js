import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../../commonComponents/Header/Header.container';
import SidebarMenu from '../../commonComponents/SidebarMenu/SidebarMenu.container';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
    	<Container fluid>
		    <Row>
			    <Header/>
		    </Row>
		    <Row>
			    <SidebarMenu/>
		    </Row>
	    </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from '../../commonComponents/Header/Header.container';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
    	<Grid fluid>
		    <Row>
			    <Header/>
		    </Row>
	    </Grid>
    );
  }
}

export default App;

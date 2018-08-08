import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'reactstrap';
import LoginLogo from './components/Logo';
import LoginForm from './components/LoginForm';

const initialState = {
	username: '',
	password: '',
	errorType: null,
	errorMessage: null
};

class LoginView extends Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
		
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleInputFieldChange(fieldName) {
		return event => {
			this.setState({ [fieldName]: event.target.value });
		}
	}
	
	handleSubmit() {
		const {
			username,
			password,
		} = this.state;
		this.setState({
			errorType: 'user',
			errorMessage: 'Denne bruger findes ikke'
		});
		// eslint-disable-next-line no-console
		console.log('Username:', username);
		// eslint-disable-next-line no-console
		console.log('Password:', password);
	}
	
	render() {
		return (
			<Container>
				<Row className='justify-content-center'>
					<LoginWrapper md={4}>
						<Row>
							<LoginLogo />
						</Row>
						<Row>
							<Col md={4}>
								<h2>Login</h2>
							</Col>
						</Row>
						<Row>
							<LoginForm
								onSubmitHandler={this.handleSubmit}
								onInputFieldHandler={this.handleInputFieldChange}
								errorType={this.state.errorType}
								errorMessage={this.state.errorMessage}
							/>
						</Row>
					</LoginWrapper>
				</Row>
			</Container>
		);
	}
}

const LoginWrapper = styled(Col)`
	background-color: lightgray;
	margin-top: 20px;
	padding-top: 20px;
	padding-bottom: 20px;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.75);
`;

export default LoginView;
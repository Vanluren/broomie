import React, { Component } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import LoginLogo from './components/Logo';
import LoginForm from './components/LoginForm';
import { userLogin } from './ducks/Authentication.ducks';
import { Routes } from '../../services/router/router';
import { redirectToRequestedPath } from '../../services/router/routeHelpers';

const initialState = {
	username: '',
	password: '',
};

class LoginView extends Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
		
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		const { userData, isLoggedIn, location, history } = this.props;
		if (isLoggedIn && (userData !== null || userData !== undefined)){
			redirectToRequestedPath(location, history);
		} else {
			history.push(Routes.LOGIN.path);
		}
	}
	
	componentDidUpdate(prevProps) {
		const { isLoggedIn, location, history } = this.props;
		if (isLoggedIn !== prevProps.isLoggedIn){
			redirectToRequestedPath(location, history);
		}
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
		const { actions } = this.props;
		actions.userLogin(username, password);
	}
	
	render() {
		const { errorType, errorMessage } = this.props;
		
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
								errorType={errorType}
								errorMessage={errorMessage}
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

LoginView.propTypes = {
	isLoggedIn: PropType.bool.isRequired,
	userData: PropType.shape(),
	errorType: PropType.string,
	errorMessage: PropType.string,
	actions: PropType.shape({
		userLogin: PropType.func.isRequired,
	}).isRequired,
	history: PropType.shape({
		push: PropType.func,
	}),
	location: PropType.shape({
		state: PropType.object,
	}).isRequired
};

LoginView.defaultProps = {
	userData: null,
	errorType: null,
	errorMessage: null,
	history: null
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.isLoggedIn,
	userData: state.auth.userData,
	errorType: state.auth.error.type,
	errorMessage: state.auth.error.message,
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		userLogin: (user, pass) => {
			dispatch(userLogin(user, pass))
		}
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
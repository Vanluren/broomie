import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, FormFeedback, FormGroup, Input } from 'reactstrap';

const LoginForm = ({ onSubmitHandler, onInputFieldHandler, errorType, errorMessage }) => (
		<Col>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmitHandler();
				}}
			>
				<FormGroup>
					<Input
						type='text'
						placeholder="Username"
						onChange={onInputFieldHandler('username')}
						autoComplete='Username'
						invalid={errorType === 'user'}
					/>
					{
						errorType === 'user' ?
						<FormFeedback>{errorMessage}</FormFeedback> : null
					}
				</FormGroup>
				<FormGroup>
					<Input
						type='password'
						placeholder='Password'
						onChange={onInputFieldHandler('password')}
						autoComplete='current-password'
						invalid={errorType === 'pass'}
					/>
					{
						errorType === 'pass' ?
						<FormFeedback>{errorMessage}</FormFeedback> : null
					}
				</FormGroup>
				<Button
					color="primary"
				>
					Login
				</Button>
			</Form>
		</Col>
	);

LoginForm.propTypes = {
	onSubmitHandler: PropTypes.func.isRequired,
	onInputFieldHandler: PropTypes.func.isRequired,
	errorType: PropTypes.string,
	errorMessage: PropTypes.string
};

LoginForm.defaultProps = {
	errorType: null || undefined,
	errorMessage: null || undefined
};

export default LoginForm;
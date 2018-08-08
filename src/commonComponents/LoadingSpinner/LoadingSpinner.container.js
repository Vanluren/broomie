import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ajaxLoader from '../../assets/images/ajax-loader.gif';
import { fetchUser } from '../../views/LoginView/ducks/Authentication.ducks';


class LoadingSpinner extends Component {
	
	componentDidMount() {
		const { userData, actions } = this.props;
		if (!userData || userData === undefined){
			actions.fetchUser();
		}
	};
	
	render() {
		const { isFetchingUser, userData, children } = this.props;
		if ((!isFetchingUser) || (userData !== null)){
			return (
				<div>
					{children}
				</div>
			)
		}
		return (
			<Spinner className='justify-content-center'>
				<img src={ajaxLoader} alt='Loading...' />
			</Spinner>
		);
	}
}

const Spinner = styled(Col)`
	position:absolute;
	top: 50%;
	left: 50%;
	right: 50%;
	bottom: 50%;
`;

LoadingSpinner.propTypes = {
	isFetchingUser: PropTypes.bool.isRequired,
	userData: PropTypes.shape(),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	actions: PropTypes.shape({
		fetchUser: PropTypes.func.isRequired,
	}).isRequired,
};
LoadingSpinner.defaultProps = {
	userData: null,
	children: null
};

const mapStateToProps = state => ({
	isFetchingUser: state.auth.isFetchingUser,
	userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => ({
	actions: {
		fetchUser: () => dispatch(fetchUser())
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadingSpinner));
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
	
	componentDidUpdate() {
		const { isFetchingUser, userData, isLoggedIn } = this.props;
		
		if (!isLoggedIn && !isFetchingUser && !userData || userData === undefined){
			this.props.history.push('/login');
		}
	}
	
	render() {
		const { children, userData, isFetchingUser, isLoggedIn } = this.props;
		
		return (isLoggedIn && userData && !isFetchingUser) ? <div>{children}</div> :
		       <Redirect
			       to={{
				       pathname: "/login",
				       state: { from: this.props.location }
			       }}
		       />
	}
}

PrivateRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	history: PropTypes.object,
	location: PropTypes.object,
	isFetchingUser: PropTypes.bool.isRequired,
	userData: PropTypes.object,
	isLoggedIn: PropTypes.bool.isRequired
};
PrivateRoute.defaultProps = {
	history: null,
	location: null,
	children: null,
	userData: null,
};

const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.isLoggedIn,
	isFetchingUser: state.auth.isFetchingUser,
	userData: state.auth.userData
});

export default connect(mapStateToProps)(PrivateRoute);
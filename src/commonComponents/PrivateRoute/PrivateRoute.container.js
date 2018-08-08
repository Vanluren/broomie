/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
	
	componentDidUpdate(prevProps) {
		if (this.props !== prevProps){
			
			const { isFetchingUser, userData, isLoggedIn, history } = this.props;
			
			if (isLoggedIn !== prevProps.isLoggedIn){
				history.push('/');
			}
			
			if (!isFetchingUser && !isLoggedIn && (!userData || userData === undefined)){
				history.push('/login');
			}
		}
	}
	
	render() {
		const { children, userData, isFetchingUser, isLoggedIn } = this.props;
		return (!isFetchingUser && userData || isLoggedIn) ? <div>{children}</div> :
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

export default withRouter(connect(mapStateToProps)(PrivateRoute));
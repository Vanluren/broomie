import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { redirectToRequestedPath } from '../../services/router/routeHelpers';

class PrivateRoute extends Component {
	componentDidUpdate(prevProps) {
		if (this.props !== prevProps){
			const { isFetchingUser, userData, isLoggedIn, history, location } = this.props;
			if (isLoggedIn !== prevProps.isLoggedIn){
				redirectToRequestedPath(location, history)
			}
			if (!isFetchingUser && !isLoggedIn && (!userData || userData === undefined)){
				history.push('/login');
			}
		}
	}
	
	render() {
		const { children, userData, isFetchingUser, isLoggedIn } = this.props;
		return ((!isFetchingUser && userData) || isLoggedIn) ? <div>{children}</div> :
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
	history: PropTypes.instanceOf(Object),
	location: PropTypes.instanceOf(Object),
	isFetchingUser: PropTypes.bool.isRequired,
	userData: PropTypes.instanceOf(Object),
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
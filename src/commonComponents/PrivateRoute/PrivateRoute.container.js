import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const userLoading = false;
const user = false;

class PrivateRoute extends Component {
	
	componentDidUpdate() {
		if (!userLoading && !user || user === undefined){
			this.props.history.push('/login');
		}
	}
	
	render() {
		const { children } = this.props;
		return (!userLoading && user) ? <div>{children}</div> :
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
	// eslint-disable-next-line react/forbid-prop-types
	history: PropTypes.object,
	// eslint-disable-next-line react/forbid-prop-types
	location: PropTypes.object,
};
PrivateRoute.defaultProps = {
	history: null,
	location: null,
	children: null
};

export default PrivateRoute;
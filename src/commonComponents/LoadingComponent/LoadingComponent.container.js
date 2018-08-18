import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../views/LoginView/ducks/Authentication.ducks';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.container';


class LoadingComponent extends Component {
	
	componentDidMount() {
		const { userData, actions } = this.props;
		if (!userData || userData === null || userData === undefined){
			actions.fetchUser();
		}
	};
	
	render() {
		const { isFetchingUser, isFetchingTickets, children } = this.props;
		if (isFetchingUser || isFetchingTickets){
			return (
				<LoadingSpinner />
			);
		}
		return (
			<div>
				{children}
			</div>
		)
	}
}

LoadingComponent.propTypes = {
	isFetchingTickets: PropTypes.bool.isRequired,
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
LoadingComponent.defaultProps = {
	userData: null,
	children: null
};

const mapStateToProps = state => ({
	isFetchingUser: state.auth.isFetchingUser,
	userData: state.auth.userData,
	isLoggedIn: state.auth.isLoggedIn,
	isFetchingTickets: state.data.isFetchingTickets
});

const mapDispatchToProps = dispatch => ({
	actions: {
		fetchUser: () => dispatch(fetchUser())
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadingComponent));
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
		if (!userData || userData === null || userData === undefined){
			actions.fetchUser();
		}
	};
	
	render() {
		const { isFetchingUser, isFetchingTickets, children } = this.props;
		if (isFetchingUser || isFetchingTickets){
			return (
				<Spinner className='justify-content-center'>
					<img src={ajaxLoader} alt='Loading...' />
				</Spinner>
			);
		}
		return (
			<div>
				{children}
			</div>
		)
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
LoadingSpinner.defaultProps = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadingSpinner));
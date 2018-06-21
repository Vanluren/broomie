import React from 'react';
//import PropTypes from 'prop-types';
//import styled from 'styled-components';
import { connect } from 'react-redux';

const Home = ({data}) => {
	if (!data.isFetching){
		return(
			<h1>Hello World</h1>
		);
	}
	return(
		<h1>Firebase is fetching</h1>
	);
}


// Home.propTypes = {};
// Home.defaultProps = {};

const mapStateToProps = state => ({
	data: state.data,
});

export default connect(
	mapStateToProps
)(Home);
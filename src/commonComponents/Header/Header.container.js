import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import HeaderLogo from './components/Logo';

const Header = () => (
		<HeaderWrapper>
				<Col xs={4}>
					<HeaderLogo />
				</Col>
		</HeaderWrapper>
);
const HeaderWrapper = styled.div`
	background-color: lightgray;
	display: flex;
	width: 100%;
	padding-top:20px;
	padding-bottom: 20px;
`;
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
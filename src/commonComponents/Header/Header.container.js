import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import HeaderLogo from './components/Logo';
import HeaderTitle from './components/Title';

const Header = () => (
	<HeaderWrapper>
		<Row>
			<Col xs={12}>
				<Col xs={4}>
					<HeaderLogo/>
				</Col>
				<Col xs={6}>
					<HeaderTitle/>
				</Col>
			</Col>
		</Row>
	</HeaderWrapper>
  );
const HeaderWrapper = styled.div`
	background-color: lightgray;
	position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding-top: 15px;
    padding-bottom: 15px;
`;
// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
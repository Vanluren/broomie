import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.svg';

const Logo = () => (
	<LogoWrapper>
		<img
			src={logo}
			alt='Nørresundby Boligselskab'
		/>
	</LogoWrapper>
);
const LogoWrapper = styled(Col)`
	margin-bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
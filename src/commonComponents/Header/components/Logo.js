import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../../assets/images/logo.svg';


const LogoImage = () => (
    <LogoWrapper>
	    <Logo src={logo} alt="logo" />
    </LogoWrapper>
    
  );
const LogoWrapper = styled.div`
	height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Logo = styled.img`
	width: 130px;
    height: auto;
`;
// LogoImage.propTypes = {};
// LogoImage.defaultProps = {};

export default LogoImage;
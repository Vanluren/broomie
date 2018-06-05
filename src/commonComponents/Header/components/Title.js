import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = () => (
    <TitleWrapper>
	    <TitleText>Velkommen Brian</TitleText>
    </TitleWrapper>
  );

const TitleWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const TitleText = styled.h1`
	color: #000;
	font-weight: bold;
	font-size: 40px;
`;

//Title.propTypes = {};
//Title.defaultProps = {};

export default Title;
import React from 'react';
import styled from 'styled-components';
import spinner from '../../assets/images/spinner.svg';


const LoadingSpinner = () => (
	<Spinner src={spinner} alt='Loading...' />
);

const Spinner = styled.img`
	width: 64px;
	height: 64px;
	position:absolute;
	top: 50%;
	left: 50%;
	right: 50%;
	bottom: 50%;
	margin-left: -32px;
    margin-top: -32px;
`;

export default LoadingSpinner;
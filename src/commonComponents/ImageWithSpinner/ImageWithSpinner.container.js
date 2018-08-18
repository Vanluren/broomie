import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.container';

function imagesLoaded(imageElement) {
	return imageElement.complete;
}

class ImageWithSpinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
		this.handleStateChange = this.handleStateChange.bind(this);
	}
	
	
	handleStateChange() {
		this.setState({
			loading: !imagesLoaded(this.imageElement)
		});
	};
	
	renderSpinner() {
		if (!this.state.loading){
			return null;
		}
		return <LoadingSpinner />;
	}
	
	render() {
		const { imageKEY, imageSRC, imageALT, imageOnClick } = this.props;
		return (
			<ImageWrapper>
				{this.renderSpinner()}
				<StyledImage
					innerRef={element => {
						this.imageElement = element;
					}}
					key={imageKEY}
					src={imageSRC}
					onLoad={this.handleStateChange}
					onError={this.handleStateChange}
					alt={imageALT}
					onClick={() => imageOnClick()}
				/>
			</ImageWrapper>
		);
	}
}


const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 150px;
	background: lightgrey;
	cursor: pointer;
`;
const StyledImage = styled.img`
	width: 100%;
	height: auto;
`;
ImageWithSpinner.propTypes = {
	imageKEY: PropTypes.string,
	imageSRC: PropTypes.string.isRequired,
	imageALT: PropTypes.string,
	imageOnClick: PropTypes.func
};
ImageWithSpinner.defaultProps = {
	imageKEY: undefined,
	imageALT: undefined,
	imageOnClick: undefined
};

export default ImageWithSpinner;
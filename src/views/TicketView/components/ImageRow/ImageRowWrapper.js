import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import TicketInfoRow from '../../../../commonComponents/TicketInfoRow/TicketInfoRow.container';
import ImageWithSpinner from '../../../../commonComponents/ImageWithSpinner/ImageWithSpinner.container';

const ImageRowWrapper = ({ images }) => {
	const imageOnClickHandler = (src) => {
		// eslint-disable-next-line no-console
		console.log(src);
	};
	const renderImages = (img) => {
		const imgArr = [];
		img.forEach(
			(elem) => {
				
				imgArr.push(
					<Col md={3}>
						<StyledImage
							imageKEY={elem}
							imageSRC={elem}
							imageALT=""
							imageOnClick={() => imageOnClickHandler(elem)}
						/>
					</Col>
				);
			}
		);
		return imgArr;
	};
	return (
		<TicketInfoRow
			header='Billeder'
		>
			{renderImages(images)}
		</TicketInfoRow>
	);
};

const StyledImage = styled(ImageWithSpinner)`
	width:100%;
	height: auto;
`;
ImageRowWrapper.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
ImageRowWrapper.defaultProps = {};

export default ImageRowWrapper;
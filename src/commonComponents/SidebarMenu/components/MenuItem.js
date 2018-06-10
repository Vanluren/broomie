import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItem = ({active, link, itemName, onClickFunc }) => (
		<ItemWrapper
			onClick={onClickFunc}
		>
			<a href={link}>{itemName}</a>
		</ItemWrapper>
);
const ItemWrapper = styled.div`
background-color: ${(props) => props.active === false ? 'lightgrey' : 'yellow'};
width: 100%;
padding: 15px 0px;
`;
MenuItem.propTypes = {
};
MenuItem.defaultProps = {

};

export default MenuItem;
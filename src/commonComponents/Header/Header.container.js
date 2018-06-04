import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
	    <HeaderLogo/>
	    <HeaderTitle/>
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({iconName}) => {
  const iconClass = `fas fa-${iconName}`;
  return (
    <i className={iconClass}/>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
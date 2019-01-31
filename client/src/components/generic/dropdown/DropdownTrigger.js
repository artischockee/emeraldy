import React from 'react';
import PropTypes from 'prop-types';

const DropdownTrigger = ({
  children, className, component: Tag, onClick
}) => (
  <Tag className={className} onClick={onClick}>
    {children}
  </Tag>
);

DropdownTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // NOTE: check Dropdown's propTypes for the info
  component: PropTypes.string
};

DropdownTrigger.defaultProps = {
  className: '',
  component: 'div'
};

export default DropdownTrigger;

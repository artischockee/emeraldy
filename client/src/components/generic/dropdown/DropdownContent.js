import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DropdownContent = ({
  active, children, className, component: Tag
}) => (
  <Tag
    className={classNames({
      dropdown: true,
      'dropdown_is-visible': active,
      [className]: true
    })}
  >
    {children}
  </Tag>
);

DropdownContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // NOTE: check Dropdown's propTypes for the info
  component: PropTypes.string
};

DropdownContent.defaultProps = {
  className: '',
  component: 'div'
};

export default DropdownContent;

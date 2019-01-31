import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DropdownContent = ({
  active, children, className, component: Tag
}) => (
  <Tag
    className={classNames({
      [className]: true,
      [`${className}_is-visible`]: active
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

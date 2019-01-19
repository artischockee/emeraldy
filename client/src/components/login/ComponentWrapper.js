import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ComponentWrapper = ({ alignCenter, children }) => (
  <div className={classNames(
    "login__component",
    { "login__component_align-center": alignCenter }
  )}>
    {children}
  </div>
);

ComponentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ComponentWrapper;
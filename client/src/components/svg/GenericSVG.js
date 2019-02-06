import './GenericSVG.sass';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GenericSVG = ({
  className,
  viewBox,
  children: drawing
}) => (
  <svg
    className={classNames("svg", className)}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {drawing}
  </svg>
);

GenericSVG.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired
};

export default GenericSVG;

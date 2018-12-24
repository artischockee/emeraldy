import React from 'react';
import PropTypes from 'prop-types';

const GenericSVG = ({
  className,
  viewBox,
  children: drawing
}) => (
  <svg
    className={className}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {drawing}
  </svg>
);

GenericSVG.propTypes = {
  className: PropTypes.string,
  viewBox: PropTypes.string.isRequired
};

export default GenericSVG;
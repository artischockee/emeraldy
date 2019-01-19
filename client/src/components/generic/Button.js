import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      children,
      className,
      content,
      disabled,
      onClick: handleAction,
      reference,
      type
    } = this.props

    return (
      <button
        className={className}
        disabled={disabled}
        onClick={handleAction}
        ref={reference}
        type={type}
      >
        {content || children}
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: function(props, propName, componentName) {
    if (!props.propName && props.type === 'button')
      return new Error(
        `The prop \`${propName}\` is marked as required in \`${componentName}\` (in cases when \`type\` is 'button'), but its value is \`${props.propName}\`.`
      );
  },
  type: PropTypes.oneOf([
    'submit', 'button', 'reset'
  ])
};

export default Button;
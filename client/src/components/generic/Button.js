import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { className, content, children, onClick: handleAction, reference } = this.props

    return (
      <button ref={reference} className={className} onClick={handleAction}>
        {content || children}
      </button>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func.isRequired
};

export default Button;
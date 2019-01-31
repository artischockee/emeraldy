import React from 'react';
import PropTypes from 'prop-types';
import DropdownContent from './DropdownContent';
import DropdownTrigger from './DropdownTrigger';

// Inspired by react-simple-dropdown package

class Dropdown extends React.Component {
  state = {
    active: false
  };

  static Content = DropdownContent;
  static Trigger = DropdownTrigger;

  static defaultProps = {
    component: 'div',
    className: ''
  };

  ref = React.createRef();

  componentDidMount () {
    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('touchstart', this.onWindowClick);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('touchstart', this.onWindowClick);
  }

  onToggleClick = (event) => {
    event.preventDefault();

    this.state.active
      ? this.hide()
      : this.show();
  };

  onWindowClick = (event) => {
    const dropdownElement = this.ref.current;

    console.log(
    event.target !== dropdownElement,
    !dropdownElement.contains(event.target),
    this.state.active
    );

    if (
      (event.target !== dropdownElement)
      && !dropdownElement.contains(event.target)
      && this.state.active
    ) {
      this.hide();
    }
  };

  hide = () => {
    console.log('hide');

    this.setState({
      active: false
    }, () => {
      if (this.props.onHide)
        this.props.onHide();
    });
  };

  show = () => {
    console.log('show');

    this.setState({
      active: true
    }, () => {
      if (this.props.onShow)
        this.props.onShow();
    });
  };

  render() {
    const { active } = this.state;
    const {
      children,
      className,
      component: Tag,
      unmountOnHide
    } = this.props;

    const preparedChildren = React.Children.map(children, (child) => {
      switch (child.type) {
        case DropdownTrigger:
          child = React.cloneElement(child, {
            onClick: (event) => {
              this.onToggleClick(event);
            }
          });
          break;
        case DropdownContent:
          if (unmountOnHide && !active)
            child = null;
          else
            child = React.cloneElement(child, { active });
          break;
        default:
          break;
      }

      return child;
    });

    return (
      <Tag className={className} ref={this.ref}>
        {preparedChildren}
      </Tag>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // TODO: improve component prop checking by
  // passing an array of valid tag names
  component: PropTypes.string,
  style: PropTypes.object,
  unmountOnHide: PropTypes.bool
};

export { DropdownContent, DropdownTrigger };
export default Dropdown;

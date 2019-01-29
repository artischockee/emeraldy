import React from 'react';
import classNames from 'classnames';

export default class Dropdown extends React.Component {
  componentDidMount() {
    console.log('Dropdown component did mount');
  }

  componentWillUnmount() {
    console.log('Dropdown component will unmount');
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={classNames(
        className,
        // { [`${className}_is-visible`]: isDropdownDisplayed }
      )}>
        {children}
      </div>
    );
  }
}

import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

class Link extends React.Component {
  isActive = () => {
    const { mainPage, to } = this.props
    const { pathname } = this.props.location

    if (
      (mainPage && pathname === to)
      || (!mainPage && pathname.includes(to))
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { children, to, className } = this.props

    return (
      <RouterLink
        className={classNames(
          className,
          { [`${className}_is-active`]: this.isActive() }
        )}
        to={to}
      >
        {children}
      </RouterLink>
    )
  }
}

export default withRouter(Link);

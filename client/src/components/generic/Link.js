import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

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
        className={`${className} ${this.isActive() ? "active" : ""}`} to={to}
      >
        {children}
      </RouterLink>
    )
  }
}

export default withRouter(Link);
import './Page404.sass';
import React from 'react';

export default class Page404 extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <h2 className="page404">
        Page&nbsp;
        <span className="page404__pathname">
          {location.pathname}
        </span>
        &nbsp;not found!
      </h2>
    );
  }
}

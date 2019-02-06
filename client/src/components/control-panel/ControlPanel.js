import './ControlPanel.sass';
import React from 'react';
import { BarGraph, Emerald, Home, Star, User } from '../svg';
import Link from '../generic/Link';

export default class ControlPanel extends React.Component {
  render() {
    return (
      <section className="control-panel">
        <div className="control-panel__logo-container">
          <Emerald className="control-panel__logo" />
        </div>
        <nav className="control-panel__nav">
          <ul className="ul">
            <ListItem linkTo="/" iconComponent={Home} />
            <ListItem linkTo="/users" iconComponent={User} />
            <ListItem linkTo="/stock" iconComponent={Star} />
            <ListItem linkTo="/charts" iconComponent={BarGraph} />
          </ul>
        </nav>
      </section>
    );
  }
}

const ListItem = ({
  linkTo, iconComponent: SVGIcon
}) => (
  <li className="control-panel__li">
    <Link className="control-panel__link" to={linkTo}>
      <SVGIcon className="control-panel__svg" />
    </Link>
  </li>
);

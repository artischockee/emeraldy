import './Header.sass';
import React from 'react';
import classNames from 'classnames';
import Link from '../generic/Link';
import SVGEmerald from '../svg/Emerald';
import SVGLens from '../svg/Lens';

const Header = ({ inSection }) => (
  <header className={classNames("header", { "header_of-section": inSection })}>
    <div className="header__logo-container">
      <SVGEmerald className="logo__svg" />
      <span className="logo__text">emeraldy</span>
    </div>
    <nav className="header__nav-social">
      <ul className="nav__ul">
        <li className="nav__li nav__li--narrow">
          <p>in</p>
        </li>
        <li className="nav__li nav__li--narrow">
          <p>tw</p>
        </li>
        <li className="nav__li nav__li--narrow">
          <p>vk</p>
        </li>
        <li className="nav__li nav__li--narrow">
          <p>fb</p>
        </li>
      </ul>
    </nav>
    <nav className="header__nav-links">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link className="li__link" to="/" mainPage>Home</Link>
        </li>
        <li className="nav__li">
          <Link className="li__link" to="/about">About</Link>
        </li>
        <li className="nav__li">
          <Link className="li__link" to="/contact">Contact</Link>
        </li>
        <li className="nav__li">
          <Link className="li__link" to="/crud-test">CRUD</Link>
        </li>
        <li className="nav__li">
          <Link className="li__link" to="/login">Login</Link>
        </li>
        <li className="nav__li">
          <Link className="li__link" to="/crud-tessst">bad link</Link>
        </li>
      </ul>
    </nav>
    <div className="header__tools">
      <p style={{ marginRight: 28, textDecoration: 'underline' }}>EN</p>
      <SVGLens className="svg__lens" />
    </div>
    {/* <div className="header__login">
      <Link className="login-button" to="/login">Log in</Link>
    </div> */}
  </header>
)

export default Header;
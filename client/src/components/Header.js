import React from 'react';
import Link from './generic/Link';

const Header = () => (
  <header className="header">
    <div className="section-wrapper">
      <div className="header__logo">
        <p>emeraldy</p>
      </div>
      <nav className="header__nav">
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
        </ul>
      </nav>
      <div className="header__login">
        <p style={{margin: 0}}>Log in</p>
      </div>
    </div>
  </header>
)

export default Header;
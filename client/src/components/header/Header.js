import './Header.sass';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { headerSearchFormName } from '../../auxiliary/redux-forms';
import { Bell, Lens } from '../svg';
import UserBlock from './UserBlock';

const Header = () => (
  <header className="header">
    <Field
      component={searchField}
      name="query"
      placeholder="Search"
      type="text"
     />

    {/* TODO: */}
    <div className="header__notifications-area">
      <Bell className="header__notifications-bell" />
    </div>

    <UserBlock />
  </header>
);

const searchField = ({
  input,
  placeholder,
  type,
  meta: { active }
}) => (
  <div
    className={classNames("header__search-form", {
      "header__search-form_is-active": active || input.value
    })}
  >
    <Lens className="header__search-lens" />
    <input
      {...input}
      className="input header__input"
      placeholder={placeholder}
      type={type}
    />
  </div>
);

export default reduxForm({
  form: headerSearchFormName
})(Header);

import './Header.sass';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { headerSearchFormName } from '../../auxiliary/redux-forms';
import { submitLogout } from '../../actions';
import { Bell, Lens } from '../svg';
import UserBlock from './UserBlock';

const Header = ({ isLoggedIn, handleLogout }) => (
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

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.user.isLoggedIn
});

const actions = {
  handleLogout: submitLogout
};

export default reduxForm({
  form: headerSearchFormName
})(connect(mapStateToProps, actions)(Header));

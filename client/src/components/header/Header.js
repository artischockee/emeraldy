import './Header.sass';
import React from 'react';
import { connect } from 'react-redux';
import { submitLogout } from '../../actions';
import { Bell } from '../svg';
import UserBlock from './UserBlock';

const Header = ({ isLoggedIn, handleLogout }) => (
  <header className="header">
    <div className="header__search-form">
      <p style={{margin: 0}}>search form</p>
    </div>

    {/* TODO: */}
    <div className="header__notifications-area">
      <Bell className="header__notifications-bell" />
    </div>

    <UserBlock />
  </header>
);

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  handleLogout: submitLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

import React from 'react';
import { connect } from 'react-redux';
import ComponentWrapper from './ComponentWrapper';
import SVGHappyFace from '../svg/HappyFace';

const SuccessComponent = ({ user }) => (
  <ComponentWrapper alignCenter>
    <SVGHappyFace className="login__svg svg" />
    <p className="login__welcome-message">
      Welcome, {
        (user.firstName && user.lastName)
          ? `${user.firstName} ${user.lastName}`
          : user.login
      }!
    </p>
  </ComponentWrapper>
);

const mapStateToProps = (state, ownProps) => ({
  user: {
    login: state.user.login,
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }
});

export default connect(mapStateToProps)(SuccessComponent);
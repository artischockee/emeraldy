import React from 'react';
import ComponentWrapper from './ComponentWrapper';
import SVGHappyFace from '../svg/HappyFace';

const SuccessComponent = () => (
  <ComponentWrapper alignCenter>
    <SVGHappyFace className="login__svg svg" />
    <p className="login__welcome-message">Welcome, {'%username%'}!</p>
  </ComponentWrapper>
);

export default SuccessComponent;
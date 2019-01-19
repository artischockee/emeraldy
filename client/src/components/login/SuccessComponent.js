import React from 'react';
import classNames from 'classnames';
import { timeout } from '../../auxiliary/timeout';

class SuccessComponent extends React.Component {
  // static headerStyle = {
  //   backgroundImage: 'url(images/login/header-background.jpg)'
  // };

  state = {
    shouldTranslate: false
  };

  async componentDidMount() {
    await timeout();

    this.setState({
      shouldTranslate: true
    });
  }

  render() {
    const { shouldTranslate } = this.state;

    return (
      <div className={classNames(
        "login__component login__component_last",
        { "login__component_last-is-translating": shouldTranslate }
      )}>
        <div>fuck you asshole</div>
        <div>fuck you asshole</div>
        <div>fuck you asshole</div>
        <div>fuck you asshole</div>
        <div>fuck you asshole</div>
      </div>
    );
  }
}

export default SuccessComponent;
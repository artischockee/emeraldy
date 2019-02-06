import './Home.sass';
import React from 'react';
import { connect } from 'react-redux';
import { mountNotification } from '../../actions/notificationSystem';
import {
  NotificationTypes,
  createNotification
} from '../../auxiliary/notification';

const data = [
  createNotification(
    NotificationTypes.EXCLAMATION,
    'Sign out',
    'You have successfully logged out',
    [
      'This text will appear only if there is need in this. No text - no problem, of course.',
      'There also can be several paragraphs in a row'
    ]
  ),
  createNotification(
    NotificationTypes.QUESTION,
    'I have got a question',
    'How do you live in Moscow?',
    [
      'This text will appear only if there is need in this. No text - no problem, of course.'
    ]
  ),
  createNotification(
    NotificationTypes.INFORMATION,
    'You are handsome',
    'Take my congrats, pal'
  )
];

let dataId = 0;

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>home page</h1>
        <button onClick={() => this.props.pushNotification(data[dataId++])} style={{alignSelf: 'flex-start', height: 92}}>
          Push test notification
        </button>
      </React.Fragment>
    );
  }
}

const actions = {
  pushNotification: mountNotification
};

export default connect(null, actions)(Home);

import React from 'react';
import { connect } from 'react-redux';
import { getLogin, getName, hasFullName } from '../../reducers/user';
import Dropdown from '../generic/dropdown/Dropdown';
import { CaretDown } from '../svg';

class UserBlock extends React.Component {
  render() {
    const {
      userHasFullName,
      userLogin,
      userName
    } = this.props;

    return (
      <Dropdown component="section" className="user-block header__user-block">
        <Dropdown.Trigger className="user-block__userdata-area">
          <div className="user-block__image" />
          <span className="user-block__username">
            {userHasFullName
              ? `${userName.first} ${userName.last}`
              : userLogin
            }
          </span>
          <CaretDown className="user-block__caret-down" />
        </Dropdown.Trigger>

        <Dropdown.Content className="user-block__dropdown">
          <ul>
            <li>View Profile</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </Dropdown.Content>
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => ({
  userHasFullName: hasFullName(state),
  userLogin: getLogin(state),
  userName: getName(state)
});

export default connect(mapStateToProps)(UserBlock);

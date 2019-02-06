import React from 'react';
import { connect } from 'react-redux';
import { submitLogout } from '../../actions';
import { getLogin, getName, hasFullName } from '../../reducers/user';
import Dropdown from '../generic/dropdown/Dropdown';
import { CaretDown } from '../svg';

class UserBlock extends React.Component {
  render() {
    const {
      handleLogout,
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
          {userHasFullName &&
            <p>@{userLogin}</p>
          }
          <ul className="ul user-block__ul">
            <li className="list-item">View Profile</li>
            <li className="list-item">Settings</li>
            <li className="list-item" onClick={handleLogout}>
              Log out
            </li>
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

const actions = {
  handleLogout: submitLogout
};

export default connect(mapStateToProps, actions)(UserBlock);

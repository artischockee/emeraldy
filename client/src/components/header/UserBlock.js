import React from 'react';
import classNames from 'classnames';
import Dropdown from '../generic/Dropdown';
import { CaretDown } from '../svg';

class UserBlock extends React.Component {
  state = {
    isDropdownDisplayed: false
  };

  // dropdownRef = React.createRef();

  // switchDropdown = () => {
  //   this.setState({
  //     isDropdownDisplayed: !this.state.isDropdownDisplayed
  //   })
  // }

  // detectClick = (e) => {
  //   if (!this.state.isDropdownDisplayed)
  //     return;
  //
  //   if (
  //     [
  //       this.dropdownRef.current,
  //     ].every(ref => !ref.contains(e.target))
  //     && this.state.isDropdownDisplayed
  //   ) {
  //     this.setState({ isDropdownDisplayed: false });
  //   }
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('click', this.detectClick);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('click', this.detectClick);
  // }

  render() {
    const { isDropdownDisplayed } = this.state;

    return (
      <section className="user-block header__user-block">
        <div
          className="user-block__userdata-area"
          onClick={this.switchDropdown}
        >
          <div className="user-block__image" />
          <span className="user-block__username">Artem Piskarev</span>
          <CaretDown className="user-block__caret-down" />
        </div>

        <Dropdown className="user-block__dropdown">
          <ul>
            <li>View Profile</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </Dropdown>
        {/* <div className={classNames(
          "user-block__dropdown",
          { "user-block__dropdown_is-visible": isDropdownDisplayed }
        )}>
          <ul>
            <li>View Profile</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </div> */}
      </section>
    );
  }
}

export default UserBlock;

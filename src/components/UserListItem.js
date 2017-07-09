import React, { Component } from 'react';

class UserListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;

    return (
      <div className="UserListItem">
        <h4 className="UserListItem__name">{user.login}</h4>
      </div>
    );
  }
}

export default UserListItem;
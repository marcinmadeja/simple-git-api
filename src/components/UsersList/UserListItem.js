import React, { Component } from 'react';
import './UserListItem.css';

class UserListItem extends Component {
  render() {
    const user = this.props.user;
    const grid = this.props.displayList;
    const itemClass = `UserListItem UserListItem__${grid}`;

    return (
      <div className={itemClass}>
        <div className="UserListItem__wrap">
          <div className="UserListItem__img-wrap">
            <img className="UserListItem__img" src={user.avatar_url} alt={user.login} />
          </div>

          <div className="UserListItem__details">
            <h4 className="UserListItem__name">{user.login}</h4>
            
            <p className="UserListItem__type"><strong>Type:</strong> {user.type}</p>
          </div>

            <a className="UserListItem__github-link" href={user.html_url} target="_blank">
              <i className="UserListItem__fa--github fa fa-github" aria-hidden="true"></i> github profile
            </a>
        </div>
      </div>
    );
  }
}

export default UserListItem;
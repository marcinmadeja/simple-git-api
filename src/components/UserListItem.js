import React, { Component } from 'react';
import './styles/UserListItem.css';

class UserListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const grid = this.props.displayList;
    const itemClass = `UserListItem UserListItem__${grid}`;

    return (
      <div className={itemClass}>
        <div className="UserListItem__wrap">
          <a className="UserListItem__img-wrap" href="#">
            <img className="UserListItem__img" src={user.avatar_url} alt={user.login} />
          </a>

          <div className="UserListItem__details">
            <h4 className="UserListItem__name"><a href="#">{user.login}</a></h4>
            
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
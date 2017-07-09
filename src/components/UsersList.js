import React, { Component } from 'react';
import './styles/UsersList.css';

import UserListItem from './UserListItem';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.renderUsers = this.renderUsers.bind(this);

    this.baseLink = "https://api.github.com/search/users?q=";

    this.getUsers();
  }

  getUsers(name = 'react') {
    name = encodeURI(name);
    const apiLink = `${this.baseLink}${name}`;
    if (!name.length) return false;
    const postsPromise = fetch(apiLink);
    
    postsPromise
      .then(data => { 
        return data.json(); 
      })
      .then(data => {
        console.log(data);
        this.addUsers(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addUsers(newUsers) {
    if (!newUsers.length) return false;
    this.setState({ users: newUsers });
  }

  renderUsers() {
    return this.state.users.map(user => (
      <UserListItem 
        key={user.id}
        user={user}
      />
    ));
  }

  render() {
    return (
      <div className="UsersList">
        {this.renderUsers()}
      </div>
    );
  }
}

export default UsersList;
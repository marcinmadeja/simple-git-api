import React, { Component } from 'react';
import './styles/UsersList.css';

import UserListItem from './UserListItem';

import UserSearchForm from './UserSearchForm';
import UsersListPagination from './UsersListPagination';
import UserListDisplay from './UsersListDisplay';


class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayList: 'grid',
    };

    this.renderUsers = this.renderUsers.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.changeListDisplay = this.changeListDisplay.bind(this);

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
    this.setState({ users: newUsers });
  }

  searchUsers(name) {
    this.getUsers(name);
  }

  changeListDisplay(display) {
    this.setState({ displayList: display });
  }

  renderUsers() {
    return this.state.users.map(user => (
      <UserListItem 
        key={user.id}
        user={user}
        searchUsers={this.searchUsers}
        displayList={this.state.displayList}
      />
    ));
  }

  render() {
    return (
      <main className="AppMain">
        <UserSearchForm 
          searchUsers={this.searchUsers} 
        />

        <UserListDisplay 
          changeListDisplay={this.changeListDisplay}
        />

        <div className="UsersList container">
          {this.renderUsers()}
        </div>

        <UsersListPagination />
      </main>
    );
  }
}

export default UsersList;
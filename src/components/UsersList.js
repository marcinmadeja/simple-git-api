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
      searchName: 'react',
      users: [],
      page: 1,
      totalPages: 1,
      displayList: 'grid',
    };

    this.renderUsers = this.renderUsers.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.changeListDisplay = this.changeListDisplay.bind(this);
    this.changePage = this.changePage.bind(this);

    this.baseLink = "https://api.github.com/search/users?q=";

    this.getUsers();
  }

  getUsers() {
    const searchName = encodeURI(this.state.searchName);
    let apiLink = `${this.baseLink}${searchName}`;
    if (!searchName.length) return false;

    if (this.state.page > 0) {
      apiLink += `&page=${this.state.page}`;
    }

    const postsPromise = fetch(apiLink);
    
    postsPromise
      .then(data => { 
        return data.json(); 
      })
      .then(data => {
        if (data.items) {
          this.addUsers(data.items);
          this.setPagination(data.total_count);
        }

        console.log('------ no results ------------');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setPagination(totalCount) {
    totalCount = parseInt(totalCount);
    const pages = Math.ceil( totalCount / 30 );
    this.setState({ 'totalPages': pages });
  }

  changePage(newPage) {
    this.setState({ 'page': newPage }, this.getUsers);
  }

  addUsers(newUsers) {
    this.setState({ users: newUsers });
  }

  searchUsers(name) {
    this.setState({ searchName: name }, this.getUsers);
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

        <UsersListPagination 
          currentPage={this.state.page}
          totalPages={this.state.totalPages}
          changePage={this.changePage}
        />
      </main>
    );
  }
}

export default UsersList;
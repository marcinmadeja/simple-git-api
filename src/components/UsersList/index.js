import React, { Component } from 'react';
import './UsersList.css';

import { getSearchLink } from './../Helpers/ApiConnect';
import UserListItem from './UserListItem';
import UserSearchForm from './UserSearchForm';
import UsersListPagination from './UsersListPagination';
import UserListDisplay from './UsersListDisplay';
import Notifications from './../Notifications/';


class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: 'react',
      users: [],
      page: 1,
      totalPages: 1,
      displayList: 'grid',
      notifications: '',
      notificationsType: 'info'
    };

    this.renderUsers = this.renderUsers.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.changeListDisplay = this.changeListDisplay.bind(this);
    this.changePage = this.changePage.bind(this);

    this.getUsers();
  }

  getUsers() {
    const apiLink = getSearchLink(this.state.searchName, this.state.page);
    const postsPromise = fetch(apiLink);
    
    postsPromise
      .then(data => { 
        return data.json(); 
      })
      .then(data => {
        if (data.items && data.items.length > 0) {
          this.addUsers(data.items);
          this.setPagination(data.total_count);
        } else if (data.items && data.items.length === 0) {
          this.addUsers([]);
          this.setState({
            'notificationsMsg': 'No results',
            'notificationsType': 'warning',
          });
        } else {
          this.addUsers([]);
          this.setState({
            'notificationsMsg': data.message,
            'notificationsType': 'danger',
          });          
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setPagination(totalCount) {
    totalCount = parseInt(totalCount, 10);
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
          <Notifications
            type={this.state.notificationsType}
          >
            {this.state.notificationsMsg}
          </Notifications>
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
import React, { Component } from 'react';
import './UsersListPagination.css';

class UsersListPagination extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(event) {
    console.log(event.target.value);
    this.props.changePage(event.target.value);
  }

  generatePagination() {
    const currentPage = this.props.currentPage;
    const totalPages = this.props.totalPages;
    if (this.props.totalPages <= 1) return '';

    const paginationList = [];

    for( let i = 1; i <= totalPages; i++) {
      paginationList.push(<option value={i} key={i}>{i}</option>);
    }

    return (
      <select className="UsersListPagination__change-page select" value={currentPage} onChange={this.changePage}>
        {paginationList}
      </select>
    );
  }

  render() {
    return (
      <div className="UsersListPagination container">
        {this.generatePagination()}
      </div>
    );
  }
}

export default UsersListPagination;
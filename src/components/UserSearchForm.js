import React, { Component } from 'react';
import './styles/UserSearchForm.css';

class UserSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchUserName: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchUserName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchUsers(this.state.searchUserName);
    this.setState({ searchUserName: '' });
  }

  render() {
    return (
      <form className="UserSearchForm container" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className="UserSearchForm__search input"
          onChange={this.handleChange}
          placeholder="Search user by name" 
          required 
        />
        
        <button className="UserSearchForm__submit btn">Search</button>
      </form>
    );
  }
}

export default UserSearchForm;
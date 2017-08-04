import React, { Component } from 'react';
import './styles/UsersListDisplay.css';

class UsersListDisplay extends Component {
  constructor(props) {
    super(props);
    this.changeListDisplay = this.changeListDisplay.bind(this);
  }

  changeListDisplay(event) {
    const button = event.currentTarget;
    const display = button.dataset.displayType;
    
    if (!button.classList.contains('UsersListDisplay__btn--active')) {
      const activeButton = document.querySelector('.UsersListDisplay__btn--active');
      activeButton.classList.remove('UsersListDisplay__btn--active');
      button.classList.add('UsersListDisplay__btn--active');
      this.props.changeListDisplay(display);
    }
  }

  render() {
    return (
      <div className="UserListDisplay container">
        <button 
          className="UsersListDisplay__btn UsersListDisplay__btn--active" 
          data-display-type="grid"
          onClick={this.changeListDisplay}
        >
          <i className="UsersListDisplay__icon-grid fa fa-th" aria-hidden="true"></i>
        </button>

        <button 
          className="UsersListDisplay__btn" 
          data-display-type="list"
          onClick={this.changeListDisplay}
        >
          <i className="UsersListDisplay__icon-grid fa fa-th-list" aria-hidden="true"></i>
        </button>        
      </div>
    );
  }
}

export default UsersListDisplay;
import React, { Component } from 'react';
import './styles/Notifications.css';

class Notifications extends Component {
  render() {
    if (!this.props.children) {
      return (null);
    }

    return (
      <div className={ 'Notifications Notifications--' + this.props.type }>
        {this.props.children}
      </div>
    );
  }
}

export default Notifications;
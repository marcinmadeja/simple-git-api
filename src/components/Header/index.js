import React, { Component } from 'react';
import './Header.css';

import imgLogo from './../../images/github-logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <img className="Header__logo" src={imgLogo} alt="github"/>
        </div>
      </header>
    );
  }
}

export default Header;
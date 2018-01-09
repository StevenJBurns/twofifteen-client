import React, { Component } from 'react';
import logo from '../logo.svg';


class Header extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header class="App-header">
        <img src={logo} className="App-logo" alt="TwoFifteen Baseball Database" />
        <h1 className="App-title">Welcome to TwoFifteen</h1>
      </header>
    );
  }
}

export default Header;
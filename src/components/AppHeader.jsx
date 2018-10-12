import React, { Component } from 'react';
import BaseballLogoSVG from '../baseball.svg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <header className="App-header">
        <img src={ BaseballLogoSVG } className="App-logo" alt="TwoFifteen Baseball Database" />
        <h1 className="App-title">Welcome to TwoFifteen</h1>
      </header>
    );
  }
}

export default Header;
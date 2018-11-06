import React from 'react';
import BaseballLogoSVG from '../../assets/images/baseball.svg';

import "../../styles/app/AppHeader.css";


class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <header id="app-header">
        <img src={ BaseballLogoSVG } className="App-logo" alt="TwoFifteen Baseball Database" />
        <h2 className="App-title">TwoFifteen</h2>
        <h4>An Open Source Baseball Database</h4>
      </header>
    );
  }
}

export default AppHeader;
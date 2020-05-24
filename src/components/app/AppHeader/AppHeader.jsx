import React from 'react';
import BaseballLogoSVG from '../../../assets/images/baseball.svg';
import { OnThisDay } from "../../common/OnThisDay.jsx.js";
import "./AppHeader.scss";


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <header id="app-header">
        <img src={ BaseballLogoSVG } className="App-logo" alt="TwoFifteen Baseball Database" />
        <h1 id="h1-app-title">TwoFifteen</h1>
        <h5 id="h5-app-title">An Open Source Baseball Database</h5>
        <OnThisDay />
      </header>
    );
  }
}

export default AppHeader;
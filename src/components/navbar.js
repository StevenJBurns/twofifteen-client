import React, { Component } from 'react';
import NavItem from "./navitem";

class NavBar extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="App-navbar">
        <ul>
          <NavItem label="Ballparks"/>
          <NavItem label="Teams"/>
          <NavItem label="Players"/>
          <NavItem label="Games"/>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
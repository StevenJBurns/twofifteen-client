import React, { Component } from 'react';
import NavItem from "./navitem";

class NavBar extends Component {
  render() {
    return (
      <nav class="App-navbar">
        <ul>
          <NavItem />
        </ul>
      </nav>
    );
  }
}

export default NavBar;
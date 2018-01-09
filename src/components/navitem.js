import React, { Component } from 'react';

class NavItem extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li class="App-navitem">{ this.props.label }</li>
    );
  }
}

export default NavItem;
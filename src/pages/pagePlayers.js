import React, { Component } from 'react';
import Background from '../images/players.jpg';

class PagePlayers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-players' style={{backgroundImage: `url(${Background})`}}>
        <h1>Players</h1>
      </main>
    );
  }
}

export default PagePlayers;
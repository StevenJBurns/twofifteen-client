import React, { Component } from 'react';
import Background from '../images/games.jpg';

class PageGames extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-games' style={{backgroundImage: `url(${Background})`}}>
        <h1>Games</h1>
      </main>
    );
  }
}

export default PageGames;
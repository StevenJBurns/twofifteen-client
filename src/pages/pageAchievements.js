import React, { Component } from 'react';
import Background from '../images/achievements.jpg';

class PageAchievements extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-achievements' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-achievements-content'>
          <h1>Championships</h1>
          <h1>Hall of Fame</h1>
          <h1>All-Star Games</h1>
          <h1>Individual Achievements</h1>
        </div>
      </main>
    );
  }
}

export default PageAchievements
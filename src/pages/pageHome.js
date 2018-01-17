import React, { Component } from 'react';
import Background from '../images/home.jpg';

class PageHome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-home' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-page-content'>
          <p className='p-home-content'>TwoFifteen is an open source database and API referencing all things related to professional baseball.  The data is comprehensive dating back to 1871 covering the ballparks (venues), franchises (teams), players and game details. </p>
        </div>
      </main>
    );
  }
}

export default PageHome
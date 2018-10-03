/* React */ 
import React from 'react';

/* Stylesheets */
import "../styles/containers/PageHome.css";

/* Assets */ 
import Background from '../images/home.jpg';


class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='main-home' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-page-content'>
          <p>TwoFifteen is an open source database and API referencing all things related to professional baseball.  The data is comprehensive dating back to 1871 covering the ballparks (venues), franchises (teams), players and game details. </p>
        </div>
      </main>
    );
  }
}

export default PageHome
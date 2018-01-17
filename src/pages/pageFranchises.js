import React, { Component } from 'react';
import Background from '../images/teams.jpg';

class PageFranchises extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-teams' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-teams-content'>
          <div className='grid-item'>
            <h4>Arizona Diamondbacks</h4>
          </div>
          <div className='grid-item'>
            <h3>Atlanta Braves</h3>
          </div>
          <div className='grid-item'>
            <h3>Baltimore Orioles</h3>
          </div>
          <div className='grid-item'>
            <h3>Boston Red Sox</h3>
          </div>
          <div className='grid-item'>
            <h3>Chicago Cubs</h3>
          </div>
          <div className='grid-item'>
            <h3>Chicago White Sox</h3>
          </div>
          <div className='grid-item'>
            <h3>Cincinnati Reds</h3>
          </div>
          <div className='grid-item'>
            <h3>Cleveland Indians</h3>
          </div>
          <div className='grid-item'>
            <h3>Colorado Rockies</h3>
          </div>
          <div className='grid-item'>
            <h3>Detroit Tigers</h3>
          </div>
          <div className='grid-item'>
            <h3>Houston Astros</h3>
          </div>
          <div className='grid-item'>
            <h3>Kansas City Royals</h3>
          </div>
          <div className='grid-item'>
            <h3>Los Angeles Angels</h3>
          </div>
          <div className='grid-item'>
            <h3>Los Angeles Dodgers</h3>
          </div>
          <div className='grid-item'>
            <h3>Miami Marlins</h3>
          </div>
          <div className='grid-item'>
            <h3>Milwaukee Brewers</h3>
          </div>
          <div className='grid-item'>
            <h3>Minnesota Twins</h3>
          </div>
          <div className='grid-item'>
            <h3>New York Mets</h3>
          </div>
          <div className='grid-item'>
            <h3>New York Yankees</h3>
          </div>
          <div className='grid-item'>
            <h3>Oakland Athletics</h3>
          </div>
          <div className='grid-item'>
            <h3>Philidelphia Phillies</h3>
          </div>
          <div className='grid-item'>
            <h3>Pittsburgh Pirates</h3>
          </div>
          <div className='grid-item'>
            <h3>San Diego Padres</h3>
          </div>
          <div className='grid-item'>
            <h3>San Francisco Giants</h3>
          </div>
          <div className='grid-item'>
            <h3>Seattle Mariners</h3>
          </div>
          <div className='grid-item'>
            <h3>St Louis Cardinals</h3>
          </div>
          <div className='grid-item'>
            <h3>Tampa Bay Rays</h3>
          </div>
          <div className='grid-item'>
            <h3>Texas Rangers</h3>
          </div>
          <div className='grid-item'>
            <h3>Toronto Blue Jays</h3>
          </div>
          <div className='grid-item'>
            <h4>Washington Nationals</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default PageFranchises;
import React, { Component } from 'react';

import Background from '../images/teams.jpg';
import Diamondbacks from '../images/diamondbacks.png';
import Braves from '../images/braves.png';
import Orioles from '../images/orioles.png';
import RedSox from '../images/redsox.png';
import Cubs from '../images/cubs.png';
import WhiteSox from '../images/whitesox.png';
import Reds from '../images/reds.png';
import Indians from '../images/indians.png';
import Rockies from '../images/rockies.png';
import Tigers from '../images/tigers.png';
import Astros from '../images/astros.png';
import Royals from '../images/royals.png';
import Angels from '../images/angels.png';
import Dodgers from '../images/dodgers.png';
import Marlins from '../images/marlins.png';
import Brewers from '../images/brewers.png';
import Twins from '../images/twins.png';
import Mets from '../images/mets.png';
import Yankees from '../images/yankees.jpg';
import Athletics from '../images/athletics.png';
import Phillies from '../images/phillies.png';
import Padres from '../images/padres.png';
import Pirates from '../images/pirates.png';
import Giants from '../images/giants.png';
import Mariners from '../images/mariners.png';
import Cardinals from '../images/cardinals.png';
import Rays from '../images/rays.png';
import Rangers from '../images/rangers.png';
import Jays from '../images/jays.png';
import Nationals from '../images/nationals.png';

class PageFranchises extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-teams' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-teams-content'>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Diamondbacks})` }}>
            <h4>Arizona Diamondbacks</h4>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Braves})` }}>
            <h3>Atlanta Braves</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Orioles})` }}>
            <h3>Baltimore Orioles</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${RedSox})` }}>
            <h3>Boston Red Sox</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Cubs})` }}>
            <h3>Chicago Cubs</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${WhiteSox})` }}>
            <h3>Chicago White Sox</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Reds})` }}>
            <h3>Cincinnati Reds</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Indians})` }}>
            <h3>Cleveland Indians</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Rockies})` }}>
            <h3>Colorado Rockies</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Tigers})` }}>
            <h3>Detroit Tigers</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Astros})` }}>
            <h3>Houston Astros</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Royals})` }}>
            <h3>Kansas City Royals</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Angels})` }}>
            <h3>Los Angeles Angels</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Dodgers})` }}>
            <h4>Los Angeles Dodgers</h4>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Marlins})` }}>
            <h3>Miami Marlins</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Brewers})` }}>
            <h3>Milwaukee Brewers</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Twins})` }}>
            <h3>Minnesota Twins</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Mets})` }}>
            <h3>New York Mets</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Yankees})` }}>
            <h3>New York Yankees</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Athletics})` }}>
            <h3>Oakland Athletics</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Phillies})` }}>
            <h3>Philidelphia Phillies</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Padres})` }}>
            <h3>Pittsburgh Pirates</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Pirates})` }}>
            <h3>San Diego Padres</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Giants})` }}>
            <h4>San Francisco Giants</h4>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Mariners})` }}>
            <h3>Seattle Mariners</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Cardinals})` }}>
            <h3>St Louis Cardinals</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Rays})` }}>
            <h3>Tampa Bay Rays</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Rangers})` }}>
            <h3>Texas Rangers</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Jays})` }}>
            <h3>Toronto Blue Jays</h3>
          </div>
          <div className='grid-item div-team-logo' style={{backgroundImage: `url(${Nationals})` }}>
            <h4>Washington Nationals</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default PageFranchises;
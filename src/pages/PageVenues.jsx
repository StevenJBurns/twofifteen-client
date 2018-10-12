import React from 'react';

import Background from '../images/ballparks.jpg';
import Anaheim from '../images/anaheim.jpg';
import Arlington from '../images/arlington.jpg';
import SanFran from '../images/sanfran.jpg';
import StLouis from '../images/stlouis.jpg';
import Phoenix from '../images/phoenix.jpg';
import Queens from '../images/queens.jpg';
import Philly from '../images/philly.jpg';
import Detroit from '../images/detroit.jpg';
import Baltimore from '../images/baltimore.jpg';
import LA from '../images/la.jpg';
import Cincinnati from '../images/cincinnati.jpg';
import ChicagoS from '../images/chicago-s.jpg';
import KC from '../images/kc.jpg';
import Miami from '../images/miami.jpg';
import Milwaukee from '../images/milwaukee.jpg';
//import Houston from '../images/houston.jpg';
import Washington from '../images/washington.jpg';
import Boston from '../images/boston.jpg';
import Seattle from '../images/seattle.jpg';
import Oakland from '../images/oakland.jpg';
//import SanDiego from '../images/sandiego.jpg';
import Pittsburgh from '../images/pittsburgh.jpg';
import Cleveland from '../images/cleveland.jpg';
import Toronto from '../images/toronto.jpg';
import Minnesota from '../images/minnesota.jpg';
import Atlanta from '../images/atlanta.jpg';
//import Tampa from '../images/tampa.jpg';
import ChicagoN from '../images/chicago-n.jpg';
import Bronx from '../images/bronx.jpg';

class PageVenues extends React.Component {
  static api_url = "http://twofifteen-api.azurewebsites.net/venue";

  constructor(props) {
    super(props);
    this.state = { venues : [] };
  }

  fetchVenues() {
    fetch(PageVenues.api_url) //{ mode : "cors" }
      .then(res => res.json())
      .then(json => this.setState({ venues : json }))
      .catch(error => console.log(error));
  }

  componentWillMount() {    
    this.fetchVenues();
  }

  render() {
    // let venueMap = this.state.venues.map(v => <div className='grid-item' key={v.id}>{ v.location.city }</div>);
    
    return (
      <main className='page-ballparks' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-venues-content'>
          {/* <div>{ venueMap }</div> */}
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Anaheim})` }}>
            <h3>Angel Stadium</h3>
            <h4>Anaheim &bull; CA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${SanFran})` }}>
            <h3>AT&amp;T Park</h3>
            <h4>San Francisco &bull; CA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${StLouis})` }}>
            <h3>Busch Stadium</h3>
            <h4>St Louis &bull; MO</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Phoenix})` }}>
            <h3>Chase Field</h3>
            <h4>Phoenix &bull; AZ</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Queens})` }}>
            <h3>Citi Field</h3>
            <h4>Queens &bull; NY</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Philly})` }}>
            <h3>Citizens Bank Park</h3>
            <h4>Philadelphia &bull; PA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Detroit})` }}>
            <h3>Comerica Park</h3>
            <h4>Detroit &bull; MI</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Baltimore})` }}>
            <h3>Coors Field</h3>
            <h4>Denver &bull; CO</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${LA})` }}>
            <h3>Dodger Stadium</h3>
            <h4>Los Angeles &bull; CA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Boston})` }}>
            <h3>Fenway Park</h3>
            <h4>Boston &bull; MA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Arlington})` }}>
            <h3>Globe Life Park</h3>
            <h4>Arlington &bull; TX</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Cincinnati})` }}>
            <h4>Great American Ball Park</h4>
            <h4>Cincinnati &bull; OH</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${ChicagoS})` }}>
            <h3>Guarantee Rate Field</h3>
            <h4>Chicago &bull; IL</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${KC})` }}>
            <h3>Kaufmann Stadium</h3>
            <h4>Kansas City &bull; MO</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Miami})` }}>
            <h3>Marlins Park</h3>
            <h4>Miami &bull; FL</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Milwaukee})` }}>
            <h3>Miller Park</h3>
            <h4>Milwuakee &bull; WI</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Seattle})` }}>
            <h3>Minute Maid Park</h3>
            <h4>Houston &bull; TX</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Washington})` }}>
            <h3>Nationals Park</h3>
            <h4>Washington &bull; DC</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Oakland})` }}>
            <h3>Oakland Colesium</h3>
            <h4>Oakland &bull; CA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Baltimore})` }}>
            <h3>Camden Yards</h3>
            <h4>Baltimore &bull; MD</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Queens})` }}>
            <h3>Petco Park</h3>
            <h4>San Diego &bull; CA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Pittsburgh})` }}>
            <h3>PNC Park</h3>
            <h4>Pittsburgh &bull; PA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Cleveland})` }}>
            <h3>Progressive Field</h3>
            <h4>Cleveland &bull; OH</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Toronto})` }}>
            <h3>Rogers Centre</h3>
            <h4>Toronto &bull; Canada</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Seattle})` }}>
            <h3>SafeCo Field</h3>
            <h4>Seattle &bull; WA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Atlanta})` }}>
            <h3>SunTrust Park</h3>
            <h4>Cumberland &bull; GA</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Minnesota})` }}>
            <h3>Target Field</h3>
            <h4>Minneapolis &bull; MN</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Toronto})` }}>
            <h3>Tropicana Field</h3>
            <h4>St Petersburg &bull; FL</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${ChicagoN})` }}>
            <h3>Wrigley Field</h3>
            <h4>Chicago &bull; IL</h4>
          </div>
          <div className='grid-item div-venue-image' style={{backgroundImage: `url(${Bronx})` }}>
            <h3>Yankee Stadium</h3>
            <h4>Bronx &bull; NY</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default PageVenues;

import React, { Component } from 'react';
import Background from '../images/ballparks.jpg';

class PageBallparks extends Component {
  static api_url = "http://twofifteen-api.azurewebsites.net/venue";

  constructor(props) {
    super(props);
    this.state = { venues : [] };
  }

  fetchVenues() {
    fetch(PageBallparks.api_url) //{ mode : "cors" }
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
          <div className='grid-item'>
            <h3>Angel Stadium</h3>
            <h4>Anaheim &bull; CA</h4>
          </div>
          <div className='grid-item'>
            <h3>AT&amp;T Park</h3>
            <h4>San Francisco &bull; CA</h4>
          </div>
          <div className='grid-item'>
            <h3>Busch Stadium</h3>
            <h4>St Louis &bull; MO</h4>
          </div>
          <div className='grid-item'>
            <h3>Chase Field</h3>
            <h4>Phoenix &bull; AZ</h4>
          </div>
          <div className='grid-item'>
            <h3>Citi Field</h3>
            <h4>Queens &bull; NY</h4>
          </div>
          <div className='grid-item'>
            <h3>Citizens Bank Park</h3>
            <h4>Philadelphia &bull; PA</h4>
          </div>
          <div className='grid-item'>
            <h3>Comerica Park</h3>
            <h4>Detroit &bull; MI</h4>
          </div>
          <div className='grid-item'>
            <h3>Coors Field</h3>
            <h4>Denver &bull; CO</h4>
          </div>
          <div className='grid-item'>
            <h3>Dodger Stadium</h3>
            <h4>Los Angeles &bull; CA</h4>
          </div>
          <div className='grid-item'>
            <h3>Fenway Park</h3>
            <h4>Boston &bull; MA</h4>
          </div>
          <div className='grid-item'>
            <h3>Globe Life Park</h3>
            <h4>Arlington &bull; TX</h4>
          </div>
          <div className='grid-item'>
            <h4>Great American Ball Park</h4>
            <h4>Cincinnati &bull; OH</h4>
          </div>
          <div className='grid-item'>
            <h3>Guarantee Rate Field</h3>
            <h4>Chicago &bull; IL</h4>
          </div>
          <div className='grid-item'>
            <h3>Kaufmann Stadium</h3>
            <h4>Kansas City &bull; MO</h4>
          </div>
          <div className='grid-item'>
            <h3>Marlins Park</h3>
            <h4>Miami &bull; FL</h4>
          </div>
          <div className='grid-item'>
            <h3>Miller Park</h3>
            <h4>Milwuakee &bull; WI</h4>
          </div>
          <div className='grid-item'>
            <h3>Minute Maid Park</h3>
            <h4>Houston &bull; TX</h4>
          </div>
          <div className='grid-item'>
            <h3>Nationals Park</h3>
            <h4>Washington &bull; DC</h4>
          </div>
          <div className='grid-item'>
            <h3>Oakland Colesium</h3>
            <h4>Oakland &bull; CA</h4>
          </div>
          <div className='grid-item'>
            <h3>Camden Yards</h3>
            <h4>Baltimore &bull; MD</h4>
          </div>
          <div className='grid-item'>
            <h3>Petco Park</h3>
            <h4>San Diego &bull; CA</h4>
          </div>
          <div className='grid-item'>
            <h3>PNC Park</h3>
            <h4>Pittsburgh &bull; PA</h4>
          </div>
          <div className='grid-item'>
            <h3>Progressive Field</h3>
            <h4>Cleveland &bull; OH</h4>
          </div>
          <div className='grid-item'>
            <h3>Rogers Centre</h3>
            <h4>Toronto &bull; Canada</h4>
          </div>
          <div className='grid-item'>
            <h3>SafeCo Field</h3>
            <h4>Seattle &bull; WA</h4>
          </div>
          <div className='grid-item'>
            <h3>SunTrust Park</h3>
            <h4>Cumberland &bull; GA</h4>
          </div>
          <div className='grid-item'>
            <h3>Target Field</h3>
            <h4>Minneapolis &bull; MN</h4>
          </div>
          <div className='grid-item'>
            <h3>Tropicana Field</h3>
            <h4>St Petersburg &bull; FL</h4>
          </div>
          <div className='grid-item'>
            <h3>Wrigley Field</h3>
            <h4>Chicago &bull; IL</h4>
          </div>
          <div className='grid-item'>
            <h3>Yankee Stadium</h3>
            <h4>Bronx &bull; NY</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default PageBallparks;
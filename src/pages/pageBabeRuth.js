import React, { Component } from 'react';
import Background from '../images/player-detail.jpg';

class PageBabeRuth extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-babe-ruth' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-babe-ruth-content'>


        </div>
      </main>
    );
  }
}

export default PageBabeRuth;
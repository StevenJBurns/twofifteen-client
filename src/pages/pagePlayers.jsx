import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PagePlayersR from './pagePlayersR';
import Background from '../images/players.jpg';

class PagePlayers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className='page-players' style={{backgroundImage: `url(${Background})`}}>
        <div className='div-players-content'>
          <h1>Player Search by Last Name</h1>
          <h1>&nbsp;</h1>
          <div className='div-search-letter'>
            <h1>A</h1>
          </div>
          <div className='div-search-letter'>
            <h1>B</h1>
          </div>
          <div className='div-search-letter'>
            <h1>C</h1>
          </div>
          <div className='div-search-letter'>
            <h1>D</h1>
          </div>
          <div className='div-search-letter'>
            <h1>E</h1>
          </div>
          <div className='div-search-letter'>
            <h1>F</h1>
          </div>
          <div className='div-search-letter'>
            <h1>G</h1>
          </div>
          <div className='div-search-letter'>
            <h1>H</h1>
          </div>
          <div className='div-search-letter'>
            <h1>I</h1>
          </div>
          <div className='div-search-letter'>
            <h1>J</h1>
          </div>
          <div className='div-search-letter'>
            <h1>K</h1>
          </div>
          <div className='div-search-letter'>
            <h1>L</h1>
          </div>
          <div className='div-search-letter'>
            <h1>M</h1>
          </div>
          <div className='div-search-letter'>
            <h1>N</h1>
          </div>
          <div className='div-search-letter'>
            <h1>O</h1>
          </div>
          <div className='div-search-letter'>
            <h1>P</h1>
          </div>
          <div className='div-search-letter'>
            <h1>Q</h1>
          </div>
          <div className='div-search-letter'>
            <Link to="/players/r"><h1>R</h1></Link>
          </div>
          <div className='div-search-letter'>
            <h1>S</h1>
          </div>
          <div className='div-search-letter'>
            <h1>T</h1>
          </div>
          <div className='div-search-letter'>
            <h1>U</h1>
          </div>
          <div className='div-search-letter'>
            <h1>V</h1>
          </div>
          <div className='div-search-letter'>
            <h1>W</h1>
          </div>
          <div className='div-search-letter'>
            <h1>X</h1>
          </div>
          <div className='div-search-letter'>
            <h1>Y</h1>
          </div>
          <div className='div-search-letter'>
            <h1>Z</h1>
          </div>
        </div>
      </main>
    );
  }
}

export default PagePlayers;
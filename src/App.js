import React, { Component } from 'react';

import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main>
          <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

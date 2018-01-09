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

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

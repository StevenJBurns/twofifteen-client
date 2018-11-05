/* React & React Router */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Components */
import AppHeader from "./components/AppHeader";
import AppNav from "./components/AppNavBar";
import AppFooter from './components/AppFooter';

import PageHome from "./pages/PageHome.jsx";
import PageVenues from "./pages/PageVenues";
import PageFranchises from "./pages/pageFranchises";
import PagePlayers from "./pages/pagePlayers";
import PagePlayer from "./pages/pagePlayer";
import PageGames from "./pages/pageGames";
import PageAchievements from "./pages/PageAchievements";

/* Stylesheets */


/* Assets */


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={ PageHome }/>
            <Route path="/ballparks" component={ PageVenues }/>
            <Route path="/teams" component={ PageFranchises }/>
            <Route path="/players" exact component={ PagePlayers }/>
            <Route path="/player" exact component={ PagePlayer }/>
            <Route path="/games" component={ PageGames }/>
            <Route path="/achievements" component={ PageAchievements }/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

/* React & React Router */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Components */
import AppHeader from "./AppHeader/AppHeader";
import AppNav from "./AppNav/AppNav";
import AppFooter from './AppFooter/AppFooter';

import PageHome from "../pages/PageHome/PageHome.jsx";
import PageVenues from "../pages/PageVenues";
import PageFranchises from "../pages/pageFranchises";
import PagePlayers from "../pages/pagePlayers";
import PagePlayer from "../pages/pagePlayer";
import PageGames from "../pages/pageGames";
import PageAchievements from "../pages/PageAchievements";

/* Stylesheets */
import '../../styles/app/App-1.css';
import '../../styles/app/App-2.css';

/* Assets */


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <AppHeader /> */}
        {/* <AppNav /> */}
        <Switch>
          <Route path="/" exact component={ PageHome }/>
          <Route path="/ballparks" component={ PageVenues }/>
          <Route path="/teams" component={ PageFranchises }/>
          <Route path="/players" exact component={ PagePlayers }/>
          <Route path="/player" exact component={ PagePlayer }/>
          <Route path="/games" component={ PageGames }/>
          <Route path="/achievements" component={ PageAchievements }/>
        </Switch>
        {/* <AppFooter /> */}
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import AppHeader from "../AppHeader/AppHeader";
// import AppNav from "../AppNav/AppNav";
// import AppFooter from '../AppFooter/AppFooter';

import { PageHome } from "../../pages/PageHome/PageHome";
/* Season list and details pages*/
import { PageSeasonList } from '../../pages/PageSeasonList/PageSeasonList';
import { PageSeasonDetail } from '../../pages/PageSeasonDetail/PageSeasonDetail';
// import { SeasonSelect } from '../../ui/SeasonsSelect/SeasonsSelect';
import PageVenues from "../../pages/PageVenues";
import { PageFranchises, PageFranchiseDetail } from "../../pages/PageFranchises";
import PagePlayers from "../../pages/PagePlayers/PagePlayers";
// import PagePlayer from "../../pages/PagePlayer";
import PageGames from "../../pages/PageGames";
import PageAchievements from "../../pages/PageAchievements/PageAchievements";

/* Stylesheets */
import './App.scss';
import './App-1.css';
import './App-2.css';

export const App = () => (
  <Switch>
    <Route path="/" exact>
      <PageHome />
    </Route>
    <Route path="/seasons" exact>
      <PageSeasonList />
    </Route>
    <Route path="/seasons/:season">
      <PageSeasonDetail />
    </Route>
    <Route path="/venues">
      <PageVenues />
    </Route>
    <Route exact path="/franchises">
      <PageFranchises />
    </Route>
    <Route path="/franchises/:id">
      <PageFranchiseDetail />
    </Route>
    <Route path="/people" exact>
      <PagePlayers />
    </Route>
    {/* <Route path="/player" exact component={ PagePlayer }/> */}
    <Route path="/games">
      <PageGames />
    </Route>
    <Route path="/achievements">
      <PageAchievements />
    </Route>
  </Switch>
);

export default App;

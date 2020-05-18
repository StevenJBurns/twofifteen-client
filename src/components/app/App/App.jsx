import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageHome } from "components/pages/PageHome/PageHome";
import { PageSeasonList } from '../../pages/PageSeasonList/PageSeasonList';
import { PageSeasonDetail } from '../../pages/PageSeasonDetail/PageSeasonDetail';
import { PageVenues } from "../../pages/PageVenues/PageVenueList";
import { PageFranchiseList, PageFranchiseDetail } from "../../pages/PageFranchises";
import { PeopleList } from "components/pages/PeopleList/PeopleList";
import { PeopleDetail } from "components/pages/PeopleDetail/PeopleDetail";
import { PageGamesList } from "../../pages/PageGames/PageGamesList";
import { PageAchievements } from "../../pages/PageAchievements/PageAchievements";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route exact path="/seasons">
        <PageSeasonList />
      </Route>
      <Route exact path="/seasons/:year">
        <PageSeasonDetail />
      </Route>
      <Route exact path="/venues">
        <PageVenues />
      </Route>
      <Route exact path="/franchises">
        <PageFranchiseList />
      </Route>
      <Route exact path="/franchises/:id">
        <PageFranchiseDetail />
      </Route>
      <Route exact path="/people">
        <PeopleList />
      </Route>
      <Route exact path="/people/:id">
        <PeopleDetail />
      </Route>
      <Route exact path="/games">
        <PageGamesList />
      </Route>
      <Route exact path="/achievements">
        <PageAchievements />
      </Route>
    </Switch>
  );
};

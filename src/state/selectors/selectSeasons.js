import { createSelector } from 'reselect';

export const selectAllSeasons = createSelector([state.seasons.list], seasons => seasons);

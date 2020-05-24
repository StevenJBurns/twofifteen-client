import { combineReducers } from 'redux';
import { franchiseReducer } from './franchiseReducer';
import { peopleReducer } from './peopleReducer';
import { seasonReducer } from './seasonReducer';
import { venueReducer } from './venueReducer';

export const rootReducer = combineReducers({
  seasons: seasonReducer,
  franchises: franchiseReducer,
  people: peopleReducer,
  venues: venueReducer,
});

export default rootReducer;

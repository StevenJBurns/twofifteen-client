import { combineReducers } from 'redux';
import { franchiseReducer } from './franchiseReducer';
import { peopleReducer } from './peopleReducer';
import { seasonReducer } from './seasonReducer';
import { venueReducer } from './venueReducer';

export const rootReducer = combineReducers({
  franchises: franchiseReducer,
  people: peopleReducer,
  seasons: seasonReducer,
  venues: venueReducer
});

export default rootReducer;

import * as actions from 'state/actionTypes/venues/getVenues';

const initialState = {
  isPending: false,
  list: [],
  error: ''
};

export const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAR_VENUES_LIST:
      return initialState;
    case actions.GET_ALL_VENUES_START:
      return { ...state, isPending: true };
    case actions.GET_ALL_VENUES_SUCCESS:
      return { isPending: false, list: action.payload, error: '' };
    case actions.GET_ALL_VENUESS_ERROR:
      return { isPending: false, list: [], error: action.payload };
    default:
      return state;
  };
};

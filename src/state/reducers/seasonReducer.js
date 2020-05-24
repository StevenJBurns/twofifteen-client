import * as actions from '../actionTypes/seasons/getSeasons';

const initialState = {
  isPending: false,
  list: [],
  error: ''
};

export const seasonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAR_SEASONS_LIST:
      return initialState;
    case actions.GET_ALL_SEASONS_START:
      return { ...state, isPending: true };
    case actions.GET_ALL_SEASONS_SUCCESS:
      return { isPending: false, list: action.payload, error: '' };
    case actions.GET_SEASON_BY_ID_ERROR:
      return { isPending: false, list: [], error: action.payload };
    default:
      return state;
  };
};

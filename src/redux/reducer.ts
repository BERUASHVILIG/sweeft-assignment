/* eslint-disable @typescript-eslint/no-unused-vars */
import { ACTIONS } from "./actionTypes";
import {
  SAVE_ALL_COUNTRY,
  SAVE_SINGLE_COUNTRY,
  SAVE_ALL_AIRPORTS,
} from "./actions";

const defaultState: GlobalState = {
  countries: [],
  country: null,
  airports: [],
};

const reducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_ALL_COUNTRY:
      return { ...state, countries: action.countries };
    case SAVE_SINGLE_COUNTRY:
      return { ...state, country: action.country };
    case SAVE_ALL_AIRPORTS:
      return { ...state, airports: action.airports };
    default:
      return state;
  }
};

export default reducer;

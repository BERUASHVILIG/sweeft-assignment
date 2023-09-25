import { GlobalState } from "../@types/general";
import { ACTIONS } from "./actionTypes";
import {
  SAVE_ALL_COUNTRY,
  SAVE_ALL_AIRPORTS,
  SAVE_ALL_CURRENCY,
  SAVE_CURRENT_LOCATION,
} from "./actions";

const defaultState: GlobalState = {
  countries: [],
  airports: [],
  currencies: null,
  currentLocation: null,
};

const reducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_ALL_COUNTRY:
      return { ...state, countries: action.countries };
    case SAVE_ALL_AIRPORTS:
      return { ...state, airports: action.airports };
    case SAVE_ALL_CURRENCY:
      return { ...state, currencies: action.currencies };
    case SAVE_CURRENT_LOCATION:
      return { ...state, currentLocation: action.currentLocation };
    default:
      return state;
  }
};

export default reducer;

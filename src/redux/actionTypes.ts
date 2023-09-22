import { SAVE_ALL_COUNTRY, SAVE_SINGLE_COUNTRY } from "./actions";

export type SAVE_ALL_COUNTRY_ACTION = {
  type: typeof SAVE_ALL_COUNTRY;
  countries: CountryType[];
};

export type SAVE_SINGLE_COUNTRY_ACTION = {
  type: typeof SAVE_SINGLE_COUNTRY;
  country: CountryType;
};

export type ACTIONS = SAVE_ALL_COUNTRY_ACTION | SAVE_SINGLE_COUNTRY_ACTION;

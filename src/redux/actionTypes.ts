import {
  AirportsType,
  CountryType,
  CurrencyExchangeRates,
} from "../@types/general";
import {
  SAVE_ALL_AIRPORTS,
  SAVE_ALL_COUNTRY,
  SAVE_ALL_CURRENCY,
  SAVE_CURRENT_LOCATION,
} from "./actions";

export type SAVE_ALL_COUNTRY_ACTION = {
  type: typeof SAVE_ALL_COUNTRY;
  countries: CountryType[];
};

export type SAVE_ALL_AIRPORTS_ACTION = {
  type: typeof SAVE_ALL_AIRPORTS;
  airports: AirportsType[];
};

export type SAVE_ALL_CURRENCY_ACTION = {
  type: typeof SAVE_ALL_CURRENCY;
  currencies: CurrencyExchangeRates;
};

export type SAVE_CURRENT_LOCATION_ACTION = {
  type: typeof SAVE_CURRENT_LOCATION;
  currentLocation: string;
};

export type ACTIONS =
  | SAVE_ALL_COUNTRY_ACTION
  | SAVE_ALL_AIRPORTS_ACTION
  | SAVE_ALL_CURRENCY_ACTION
  | SAVE_CURRENT_LOCATION_ACTION;

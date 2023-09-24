import {
  AirportsType,
  CountryType,
  CurrencyExchangeRates,
} from "../@types/general";
import {
  SAVE_ALL_COUNTRY_ACTION,
  SAVE_ALL_AIRPORTS_ACTION,
  SAVE_ALL_CURRENCY_ACTION,
} from "../redux/actionTypes";

export const SAVE_ALL_COUNTRY = "SAVE_ALL_COUNTRY";

export const SAVE_ALL_AIRPORTS = "SAVE_ALL_AIRPORTS";

export const SAVE_ALL_CURRENCY = "SAVE_ALL_CURRENCY";

export const saveAllCountry = (
  countries: CountryType[]
): SAVE_ALL_COUNTRY_ACTION => ({
  type: SAVE_ALL_COUNTRY,
  countries,
});

export const saveAllAirports = (
  airports: AirportsType[]
): SAVE_ALL_AIRPORTS_ACTION => ({
  type: SAVE_ALL_AIRPORTS,
  airports,
});
export const saveAllCurrency = (
  currencies: CurrencyExchangeRates
): SAVE_ALL_CURRENCY_ACTION => ({
  type: SAVE_ALL_CURRENCY,
  currencies,
});

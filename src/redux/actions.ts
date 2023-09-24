/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import axiosInstance from "../axios/axiosAPI";
import {
  SAVE_ALL_COUNTRY_ACTION,
  SAVE_SINGLE_COUNTRY_ACTION,
  SAVE_ALL_AIRPORTS_ACTION,
} from "../redux/actionTypes";

export const SAVE_ALL_COUNTRY = "SAVE_ALL_COUNTRY";
export const SAVE_SINGLE_COUNTRY = "SAVE_SINGLE_COUNTRY";

export const SAVE_ALL_AIRPORTS = "SAVE_ALL_AIRPORTS";

export const saveAllCountry = (
  countries: CountryType[]
): SAVE_ALL_COUNTRY_ACTION => ({
  type: SAVE_ALL_COUNTRY,
  countries,
});

export const saveSingleCountry = (
  country: CountryType
): SAVE_SINGLE_COUNTRY_ACTION => ({
  type: SAVE_SINGLE_COUNTRY,
  country,
});

export const saveAllAirports = (
  airports: AirportsType[]
): SAVE_ALL_AIRPORTS_ACTION => ({
  type: SAVE_ALL_AIRPORTS,
  airports,
});

// export const loadAllCountries = () => {
//   return async (dispatch: Function) => {
//     try {
//       const countriesPromise = axios.get("https://restcountries.com/v3.1/all");
//       const data = await countriesPromise;
//       console.log("data", data.data);
//       dispatch(saveAllCountry(data.data));
//       console.log(saveAllCountry(data.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const loadSingleCountry = (id: string) => {
//   return async (dispatch: any) => {
//     try {
//       const countryPromise = axiosSingle.get(`/${id}`);
//       const data = await countryPromise;
//       dispatch(saveSingleCountry(data.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
